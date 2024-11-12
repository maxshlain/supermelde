
async function fillForm(formData) {
    try {
        // Load the PDF with form fields
        const formUrl = 'https://maxshlain.github.io/supermelde/explore/meldezettel_orig.pdf';
        const existingPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
        
        // Load the PDF document
        const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);
        
        // Get the form from the document
        const form = pdfDoc.getForm();

        // Fill in the form fields
        // Note: These field names should match the actual field names in your PDF
        // You might need to inspect your PDF to get the exact field names
        const fields = form.getFields();
        fields.forEach(field => {
            const field_name = field.getName();
            if (field_name === 'Geschlecht') {
                console.log('field:', field);
            }
        });

        // Fill the form fields using their names
        const the_field_name = 'Familienname (in Blockschrift), Akad. Grad (abgekürzt)';
        const select_field_name = 'Geschlecht';
        try {
            form.getTextField(the_field_name).setText(formData.familyName.toUpperCase());

            form.getFields().forEach(field => {
                if (field.getName() === select_field_name) {
                    field.select('inter');
                }
            });

            // form.getTextField('FAMILIENNAME').setText(formData.familyName.toUpperCase());

            // form.getTextField('VORNAME').setText(formData.firstName);
            // if (formData.previousName) {
            //     form.getTextField('VORHERIGER_NAME').setText(formData.previousName);
            // }
        } catch (e) {
            console.error('Error filling specific field:', e);
        }

        // Save and download the filled PDF
        const pdfBytes = await pdfDoc.save();
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
    const formData = {
        familyName: document.getElementById('familyName').value,
        firstName: document.getElementById('firstName').value,
        previousName: document.getElementById('previousName').value
    };
    await fillForm(formData);
});
