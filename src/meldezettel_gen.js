document.addEventListener('alpine:init', () => {
    Alpine.data('pdfFormHandler', () => ({
        name: '',
        email: '',
        comments: '',
        async generatePdf() {
            // Retrieve form values
            const name = this.name;
            const email = this.email;
            const comments = this.comments;

            // Fetch the existing PDF
            const existingPdfBytes = await fetch('explore/meldezettel_orig.pdf').then(res => res.arrayBuffer());

            // Load the existing PDF into pdf-lib
            const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);

            // Create a new PDF document
            const newPdfDoc = await PDFLib.PDFDocument.create();

            // Get the first page of the existing PDF
            const [firstPage] = await newPdfDoc.copyPages(pdfDoc, [0]);

            // Add the first page to the new PDF document
            newPdfDoc.addPage(firstPage);

            // Add text to the first page
            firstPage.drawText(`Name: ${name}`, { x: 10, y: 700 });
            firstPage.drawText(`Email: ${email}`, { x: 10, y: 680 });
            firstPage.drawText(`Comments: ${comments}`, { x: 10, y: 660 });

            // Serialize the new PDFDocument to bytes (a Uint8Array)
            const pdfBytes = await newPdfDoc.save();

            // Create a Blob from the PDF bytes
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });

            // Create a link element
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'form.pdf';

            // Append the link to the body
            document.body.appendChild(link);

            // Programmatically click the link to trigger the download
            link.click();

            // Remove the link from the document
            document.body.removeChild(link);
        }
    }));
});
