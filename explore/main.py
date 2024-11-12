from pypdf import PdfReader, PdfWriter
from pypdf.constants import AnnotationDictionaryAttributes
# from PyPDF2.generic import create_string_object
import io
import json
import os


def dump_form_keys(input_pdf_path, raw_keys_path):
    """
    Fill the Meldezettel form with a given family name
    
    Args:
        input_pdf_path (str): Path to the input PDF form
        output_pdf_path (str): Path where to save the filled form
        familienname (str): Family name to fill in the form
    """
    # Create PDF reader and writer objects
    reader = PdfReader(input_pdf_path)

    fields = []
    for page in reader.pages:
        if page:
            for annot in page.annotations:
                if annot:
                    annot = annot.get_object()
                    print(annot)
    #         if annot[AnnotationDictionaryAttributes.Subtype] == "/Widget":
    #             fields.append(annot)

    fields = reader.get_fields()
    keys = fields.keys()
    
    # # copy keys to new serializable object
    keys_j = [key for key in keys]

    # # save all keys as json file
    with open(raw_keys_path, 'w', encoding='utf-8') as f:
        json.dump(keys_j, f)

def set_form_fields(input_pdf_path, output_pdf_path, keys_path):
    reader = PdfReader(input_pdf_path)
    writer = PdfWriter()

    fields = reader.get_fields()
    key_names = list(fields.keys())

    writer.append(reader)

    # writer.update_page_form_field_values(
    #     writer.pages[0],
    #     {" Grad (abgekürzt)": "Petrov"},
    #     auto_regenerate=False,
    # )

    # writer.update_page_form_field_values(
    #     writer.pages[0],
    #     {"Geschlecht": "'/männlich'"},
    #     auto_regenerate=False,
    # )

    # iterate over each field in the form
    # and fill some iterative data like value_1, value_2, value_3, ...
    for i, key in enumerate(key_names):

        print(f"Setting value for key: '{key}' to value_{i}")
        print('')

        if key == "Geschlecht":
            writer.update_page_form_field_values(
                writer.pages[0],
                {key: "/männlich"},
                auto_regenerate=False,
            )
        else:
            writer.update_page_form_field_values(
                writer.pages[0],
                {key: f"value_{i}"},
                auto_regenerate=False,
            )

    with open(output_pdf_path, "wb") as output_stream:
        writer.write(output_stream)


# Example usage
if __name__ == "__main__":
    input_pdf = "/Users/maximshlain/Code/GitHub/supermelde/explore/meldezettel_orig.pdf"
    raw_keys = "/Users/maximshlain/Code/GitHub/supermelde/explore/meldezettel_raw_keys.json"
    output_pdf = "/Users/maximshlain/Code/GitHub/supermelde/explore/meldezettel_out.pdf"
    fixed_keys = "/Users/maximshlain/Code/GitHub/supermelde/explore/keys.json"
    
    try:
        # dump_form_keys(input_pdf, raw_keys)
        set_form_fields(input_pdf, output_pdf, fixed_keys)
    except Exception as e:
        print(f"An error occurred: {str(e)}")
