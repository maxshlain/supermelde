async function handleFormSubmit(formData) {
    try {
        // Load the PDF with form fields
        const formUrl = 'assets/meldezettel.pdf';
        const existingPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
        
        // Load the PDF document
        const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);

        const form = pdfDoc.getForm();
        fillPdfFields(form, formData);
        
        // Create a new document with only the first page
        const newPdfDoc = await PDFLib.PDFDocument.create();
        const [firstPage] = await newPdfDoc.copyPages(pdfDoc, [0]);
        newPdfDoc.addPage(firstPage);
        
        // Save the modified document
        const pdfBytes = await newPdfDoc.save();

        // Create blob and download using a more reliable method
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        
        // Use a more reliable download method
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            // For IE
            window.navigator.msSaveOrOpenBlob(blob, 'meldezettel_filled.pdf');
        } else {
            // For modern browsers
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'meldezettel_filled.pdf';
            
            // Make link invisible
            link.style.display = 'none';
            document.body.appendChild(link);
            
            // Use timeout to ensure proper cleanup
            setTimeout(() => {
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            }, 0);
        }

        // Show success message
        // alert('Form submitted successfully! Check your downloads.');
        console.log('Form data:', formData);
    } catch (error) {
        console.error('Error processing PDF:', error);
        alert('Error processing the form. Please try again.');
    }
}

function fillPdfFields(form, formData) {
    form.getFields().forEach(current_field => {
        const current_field_name = current_field.getName();
        if (current_field_name == fields.firstName) {
            setFieldText(current_field, formData.firstName);
        }
    });

}

// Helper function to set text field with proper formatting
function setFieldText(field, text) {
    if (!text) return;
    field.setFontSize(11);
    const padded = ' ' + text; // Add slight padding from the left
    field.setText(padded);
}
