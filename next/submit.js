async function handleFormSubmit(formData) {
    try {
        // Load the PDF with form fields
        const formUrl = 'assets/meldezettel.pdf';
        const existingPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
        
        // Load the PDF document
        const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);
        
        // Create a new document with only the first page
        const newPdfDoc = await PDFLib.PDFDocument.create();
        const [firstPage] = await newPdfDoc.copyPages(pdfDoc, [0]);
        newPdfDoc.addPage(firstPage);
        
        // Save the modified document
        const pdfBytes = await newPdfDoc.save();

        // Create a blob and download the file
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'meldezettel_filled.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        // Show success message
        alert('Form submitted successfully! Check your downloads.');
        console.log('Form data:', formData);
    } catch (error) {
        console.error('Error processing PDF:', error);
        alert('Error processing the form. Please try again.');
    }
} 