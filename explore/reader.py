import fitz  # PyMuPDF

def list_form_fields(pdf_path):
    doc = fitz.open(pdf_path)
    for page_num in range(doc.page_count):
        page = doc.load_page(page_num)
        for widget in page.widgets():
            print(f"Field Name: {widget.field_name}, Type: {widget.field_type}")
    doc.close()

# Usage
fields = list_form_fields("/Users/maximshlain/Code/GitHub/supermelde/explore/meldezettel.pdf")

print(fields)
