import fitz  # PyMuPDF

def fill_pdf_form(template_path, output_path, credentials):
    """
    Fills a PDF form with user credentials.

    Args:
        template_path (str): Path to the original PDF form template.
        output_path (str): Path to save the filled PDF.
        credentials (dict): User's credentials to fill in the form fields. Example format:
            {
                "FAMILIENNAME": "Doe",
                "VORNAME": "John",
                "GEBURTSDATUM": "01.01.1990",
                "GESCHLECHT": "männlich",
                "STAATSANGEHÖRIGKEIT": "Österreich",
                # Add additional fields as needed
            }
    """
    # Open the original form
    pdf = fitz.open(template_path)

    # take only first page
    page = pdf[0]
    one = credentials['FAMILIENNAME']
    print(one)
    rect = fitz.Rect(100, 100, 300, 130)  # Placeholder for field coordinates
    page.insert_textbox(rect, one, fontsize=12, color=(0, 0, 0))

    # Iterate over pages (assuming form fields are on the first page)

    # for page_num in range(len(pdf)):
    #     page = pdf[page_num]
        
    #     # Fill in each field based on the provided credentials
    #     for field, value in credentials.items():
    #         # Locate the position of each field on the form and fill it
    #         # Adjust coordinates based on field location, this is just an example
    #         # In practice, you would need to find and place text based on field coordinates in your PDF.
    #         rect = fitz.Rect(100, 100, 300, 130)  # Placeholder for field coordinates
    #         page.insert_textbox(rect, value, fontsize=12, color=(0, 0, 0))

    # Save the filled form
    pdf.save(output_path)
    pdf.close()

# Example usage
credentials = {
    "FAMILIENNAME": "Santa",
    "VORNAME": "Claus",
    # Add other required fields based on the form structure
}

# get loction of the current script
import os
this_script_path = (os.path.realpath(__file__))
this_script_dir = os.path.dirname(this_script_path)
original = os.path.join(this_script_dir, "meldezettel_orig.pdf")
updated = os.path.join(this_script_dir, "meldezettel_filled.pdf")

# original = "/Users/maximshlain/Code/GitHub/supermelde/explore/meldezettel_orig.pdf"
# updated = "/Users/maximshlain/Code/GitHub/supermelde/explore/meldezettel_filled.pdf"
# # fill_pdf_form("path/to/meldezettel_orig.pdf", "path/to/filled_meldezettel.pdf", credentials)
fill_pdf_form(original, updated, credentials)
