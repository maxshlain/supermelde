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
        maritalStatus: document.getElementById('maritalStatus').value,
        isAustrian: document.getElementById('isAustrian').value,
        nameOfState: document.getElementById('nameOfState').value,
        documentType: document.getElementById('documentType').value,
        documentNumber: document.getElementById('documentNumber').value,
        documentIssueDate: document.getElementById('documentIssueDate').value,
        documentIssuingAuthority: document.getElementById('documentIssuingAuthority').value,
        registrationStreet: document.getElementById('registrationStreet').value,
        registrationHouseNumber: document.getElementById('registrationHouseNumber').value,
        registrationStaircase: document.getElementById('registrationStaircase').value,
        registrationApartmentNumber: document.getElementById('registrationApartmentNumber').value,
        registrationPostalCode: document.getElementById('registrationPostalCode').value,
        registrationMunicipality: document.getElementById('registrationMunicipality').value,
        isMainResidence: document.getElementById('isMainResidence').value,
        previousResidenceStreet: document.getElementById('previousResidenceStreet').value,
        previousResidenceHouseNumber: document.getElementById('previousResidenceHouseNumber').value,
        previousResidenceStaircase: document.getElementById('previousResidenceStaircase').value,
        previousResidenceApartmentNumber: document.getElementById('previousResidenceApartmentNumber').value,
        previousResidencePostalCode: document.getElementById('previousResidencePostalCode').value
    });
}


function set_field_text(field, text) {
    field.setFontSize(14);
    const padded = ' ' + text;
    field.setText(padded);
}


function set_form_values(form, formData) {
    const mapper = new FormMapper();

    // all_fields = form.getFields();
    // all_fields.forEach(current_field => { 
    //     console.info(current_field.getName())
    // });

    try {
        form.getFields().forEach(current_field => {
            current_field_name = current_field.getName();
            if (current_field_name === mapper.getPdfField("lastName")) {
                set_field_text(current_field, formData.lastName);
            }
            else if (current_field_name === mapper.getPdfField("firstName")) {
                set_field_text(current_field, formData.firstName);
            }
            else if (current_field_name === mapper.getPdfField("lastNameBeforeMarriage")) {
                set_field_text(current_field, formData.lastNameBeforeMarriage);
            }
            else if (current_field_name === mapper.getPdfField("otherName")) {
                set_field_text(current_field, formData.otherName);
            }
            else if (current_field_name === mapper.getPdfField("dateOfBirth")) {
                austrian_date = dateToAustrian(formData.dateOfBirth);
                set_field_text(current_field, austrian_date);
            }
            else if (current_field_name === mapper.getPdfField("gender")) {
                gender_value = formData.gender;
                fixed_value = fixGenderValue(gender_value);
                current_field.select(fixed_value);
            }
            else if (current_field_name === mapper.getPdfField("religionOrCommunity")) {
                set_field_text(current_field, formData.religionOrCommunity);
            }
            else if (current_field_name === mapper.getPdfField("placeOfBirth")) {
                set_field_text(current_field, formData.placeOfBirth);
            }
            else if (current_field_name === mapper.getPdfField("maritalStatus")) {
                const selectedStatus = formData.maritalStatus;
                current_field.select(selectedStatus);
            }
            else if (current_field_name === mapper.getPdfField("nationality")) {
                const isAustrian = formData.isAustrian;
                if (isAustrian === 'ja') {
                    current_field.select('Österreich');
                } else {
                    current_field.select('anderer Staat');
                }
            }
            else if (current_field_name === mapper.getPdfField("nameOfState")) {
                set_field_text(current_field, formData.nameOfState);
            }
            else if (current_field_name === mapper.getPdfField("documentType")) {
                set_field_text(current_field, formData.documentType);
            }
            else if (current_field_name === mapper.getPdfField("documentNumber")) {
                set_field_text(current_field, formData.documentNumber)
            }
            else if (current_field_name === mapper.getPdfField("documentIssueDate")) {
                const documentIssueDateAustrian = dateToAustrian(formData.documentIssueDate);
                set_field_text(current_field, documentIssueDateAustrian)
            }
            else if (current_field_name === mapper.getPdfField("documentIssuingAuthority")) {
                set_field_text(current_field, formData.documentIssuingAuthority);
            }
            // REGISTRATION BLOCK
            else if (current_field_name === mapper.getPdfField("registrationStreet")) {
                set_field_text(current_field, formData.registrationStreet);
            }
            else if (current_field_name === mapper.getPdfField("registrationHouseNumber")) {
                set_field_text(current_field, formData.registrationHouseNumber);
            }
            else if (current_field_name === mapper.getPdfField("registrationStaircase")) {
                set_field_text(current_field, formData.registrationStaircase);
            }
            else if (current_field_name === mapper.getPdfField("registrationApartmentNumber")) {
                set_field_text(current_field, formData.registrationApartmentNumber);
            }
            else if (current_field_name === mapper.getPdfField("registrationPostalCode")) {
                set_field_text(current_field, formData.registrationPostalCode);
            }
            else if (current_field_name === mapper.getPdfField("registrationMunicipality")) {
                set_field_text(current_field, formData.registrationMunicipality);
            }
            else if (current_field_name === mapper.getPdfField("isMainResidence")) {
                const isMainResidence = formData.isMainResidence;
                current_field.select(isMainResidence);
            }
            else if (current_field_name === mapper.getPdfField("previousResidenceStreet")) {
                set_field_text(current_field, formData.previousResidenceStreet);
            }
            else if (current_field_name === mapper.getPdfField("previousResidenceHouseNumber")) {
                set_field_text(current_field, formData.previousResidenceHouseNumber);
            }
            else if (current_field_name === mapper.getPdfField("previousResidenceStaircase")) {
                set_field_text(current_field, formData.previousResidenceStaircase);
            }
            else if (current_field_name === mapper.getPdfField("previousResidenceApartmentNumber")) {
                set_field_text(current_field, formData.previousResidenceApartmentNumber);
            }
            else if (current_field_name === mapper.getPdfField("previousResidencePostalCode")) {
                set_field_text(current_field, formData.previousResidencePostalCode);
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

        //console.log(formData);

        // Load the PDF with form fields
        const formUrl = 'https://maxshlain.github.io/supermelde/src/meldezettel.pdf';
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
