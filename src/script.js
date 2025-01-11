function on_page_load() {
    set_form_labels_and_values();
}

async function set_form_labels_and_values() {

    const labelConfig = new LabelConfig();
    await labelConfig.loadConfig();
    
    const defaultValues = new Map([
        ['city', 'Netanya'],
        ['address', 'Hertzel 16']
    ]);

    const h = document.getElementsByClassName('_formHeader')[0]
    h.textContent = labelConfig.getLabel('_formHeader');

    // Set labels
    labelConfig.forEach((labelText, fieldId) => {
        const labelElement = document.querySelector(`label[for="${fieldId}"]`);
        if (labelElement) {
            labelElement.textContent = labelText;
        }
    });

    // Set default values
    defaultValues.forEach((value, fieldId) => {
        const inputElement = document.getElementById(fieldId);
        if (inputElement) {
            inputElement.value = value;
        }
    });
}

async function fillForm(formData) {
    try {
        // Load the PDF with form fields
        const formUrl = 'https://maxshlain.github.io/supermelde/explore/meldezettel_orig.pdf';
        const existingPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
        
        // Load the PDF document
        const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);
        
        // Get the form from the document
        const form = pdfDoc.getForm();

        const mapper = new FormMapper();

        // Fill the form fields using their names
        // const the_field_name = 'Familienname (in Blockschrift), Akad. Grad (abgekürzt)';
        // const select_field_name = 'Geschlecht';
        try {
            // form.getTextField(the_field_name).setText(formData.familyName.toUpperCase());

            form.getFields().forEach(current_field => {
                current_field_name = current_field.getName();
                // console.log(current_field_name);
                if (current_field_name === mapper.getPdfField("lastName")) {
                    current_field.setText(formData.lastName);
                }

                // if (field.getName() === select_field_name) {
                //     field.select('inter');
                // }
            });

        } catch (e) {
            console.error('Error filling specific field:', e);
        }

        // create new doc with only first page of the original
        const newPdfDoc = await PDFLib.PDFDocument.create();
        const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [0]);
        newPdfDoc.addPage(copiedPage);
        const pdfBytes = await newPdfDoc.save();

        // Save and download the filled PDF
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'meldezettel_filled.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        showStatus('Form filled successfully! Check your downloads.', 'success');
    } catch (error) {
        console.error('Error filling form:', error);
        showStatus('Error filling form. Please try again.', 'error');
    }
}

function showStatus(message, type) {
    const status = document.getElementById('status');
    status.textContent = message;
    status.className = type;
    status.style.display = 'block';
    setTimeout(() => {
        status.style.display = 'none';
    }, 5000);
}

document.getElementById('meldezettelForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData({
        lastName: document.getElementById('familyName').value,
        firstName: document.getElementById('firstName').value,
        previousName: document.getElementById('previousName').value

    });

    await fillForm(formData);
});

document.addEventListener('DOMContentLoaded', () => {
    on_page_load();
});
