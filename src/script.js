function on_page_load() {
    set_labels();
    set_default_values();
}

async function set_labels() {

    const labelConfig = new LabelConfig();
    await labelConfig.loadConfig();

    // Set form header
    const h = document.getElementsByClassName('_formHeader')[0]
    h.textContent = labelConfig.getLabel('_formHeader');

    // Set labels
    labelConfig.forEach((labelText, fieldId) => {
        const labelElement = document.querySelector(`label[for="${fieldId}"]`);
        if (labelElement) {
            labelElement.textContent = labelText;
        }
    });
}

async function set_default_values() {
    
    const valuesConfig = new ValuesConfig();
    await valuesConfig.loadConfig();

    // Set default values
    valuesConfig.forEach((value, fieldId) => {
        const inputElement = document.getElementById(fieldId);
        if (inputElement) {
            inputElement.value = value;
        }
    });
}

function build_form_data_from_document() {
    // const debug_value = document.getElementById('isAustrian').value;
    // alert(debug_value);
    return new FormData({
        lastName: document.getElementById('lastName').value,
        firstName: document.getElementById('firstName').value,
        lastNameBeforeMarriage: document.getElementById('lastNameBeforeMarriage').value,
        otherName: document.getElementById('otherName').value,
        dateOfBirth: document.getElementById('dateOfBirth').value,
        gender: document.getElementById('gender').value,
        religionOrCommunity: document.getElementById('religionOrCommunity').value,
        placeOfBirth: document.getElementById('placeOfBirth').value,
        isAustrian: document.getElementById('isAustrian').value,
    });
}

function set_form_values(form, formData) {
    const mapper = new FormMapper();

    try {
        form.getFields().forEach(current_field => {
            current_field_name = current_field.getName();
            if (current_field_name === mapper.getPdfField("lastName")) {
                current_field.setText(formData.lastName);
            }
            else if (current_field_name === mapper.getPdfField("firstName")) {
                current_field.setText(formData.firstName);
            }
            else if (current_field_name === mapper.getPdfField("lastNameBeforeMarriage")) {
                current_field.setText(formData.lastNameBeforeMarriage);
            }
            else if (current_field_name === mapper.getPdfField("otherName")) {
                current_field.setText(formData.otherName);
            }
            else if (current_field_name === mapper.getPdfField("dateOfBirth")) {
                austrian_date = dateToAustrian(formData.dateOfBirth);
                current_field.setText(austrian_date);
            }
            else if (current_field_name === mapper.getPdfField("gender")) {
                gender_value = formData.gender;
                fixed_value = fixGenderValue(gender_value);
                current_field.select(fixed_value);
            }
            else if (current_field_name === mapper.getPdfField("religionOrCommunity")) {
                current_field.setText(formData.religionOrCommunity);
            }
            else if (current_field_name === mapper.getPdfField("placeOfBirth")) {
                current_field.setText(formData.placeOfBirth);
            }
            else if (current_field_name === mapper.getPdfField("nationality")) {
                const isAustrian = formData.isAustrian;
                if (isAustrian === 'ja') {
                    current_field.select('Österreich');
                } else {
                    current_field.select('anderer Staat');
                }
            }
        });
    } catch (e) {
        console.error('Error filling specific field:', e);
        throw e;
    }
}


function dateToAustrian(date) {
    const [year, month, day] = date.split('-');
    return `${day}.${month}.${year}`;
}

function fixGenderValue(gender_value) {
    // the form values and the presented values are different
    if (gender_value === 'männlich') {
        return 'männlich';
    }

    if (gender_value === 'weiblich') {
        return 'weiblich';
    }

    // select divers prints offen
    // select inter prints divers
    // select offen prints inter

    if (gender_value === 'divers') {
        return 'inter';
    }

    if (gender_value === 'inter') {
        return 'offen';
    }

    if (gender_value === 'offen') {
        return 'divers';
    }

    if (gender_value === 'keine') {
        return 'keine Angabe';
    }
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

        // Merge form data into the PDF
        set_form_values(form, formData);

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
    const formData = build_form_data_from_document();
    await fillForm(formData);
});

document.addEventListener('DOMContentLoaded', () => {
    on_page_load();
});
