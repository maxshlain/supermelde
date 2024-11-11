
async function generate_pdf(event) {
    event.preventDefault();

    // Retrieve form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comments").value;

    // Fetch the existing PDF
    const existingPdfBytes = await fetch('explore/meldezettel_orig.pdf').then(res => res.arrayBuffer());

    // Load the existing PDF into pdf-lib
    const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);

    // Get the first page of the PDF
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Add text to the first page
    firstPage.drawText(`Name: ${name}`, { x: 10, y: 700 });
    firstPage.drawText(`Email: ${email}`, { x: 10, y: 680 });
    firstPage.drawText(`Comments: ${comments}`, { x: 10, y: 660 });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

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

// Add event listener to the submit button
document.getElementById("submitBtn").addEventListener("click", generate_pdf);
