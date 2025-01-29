import { selectedLanguage, initializeLanguageButtons } from './language.js';
import { loadDefaultValues, applyDefaultValues } from './values.js';
import { showToast } from './toast.js';


function validatePersonalCard() {
    const lastName = document.getElementById('lastName');
    const firstName = document.getElementById('firstName');
    let isValid = true;

    // Clear previous error states
    [lastName, firstName].forEach(field => {
        field.closest('.form-group').classList.remove('error');
    });

    // Validate fields
    if (!lastName.value.trim()) {
        lastName.closest('.form-group').classList.add('error');
        isValid = false;
    }
    
    if (!firstName.value.trim()) {
        firstName.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!isValid) {
        // Focus first invalid field
        if (!lastName.value.trim()) {
            lastName.focus();
        } else if (!firstName.value.trim()) {
            firstName.focus();
        }
        const message = translations[selectedLanguage].fillRequiredFields;
        showToast(message);
    }

    return isValid;
}

function validateBirthDetailsCard() {
    const dateOfBirth = document.getElementById('dateOfBirth');
    const gender = document.getElementById('gender');
    let isValid = true;

    if(!dateOfBirth.value.trim()) {
        dateOfBirth.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if(!gender.value.trim()) {
        gender.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if(!isValid) {
       const message = translations[selectedLanguage].fillRequiredFields;
       showToast(message);
    }

    return isValid;
}

function validateCitizenshipCard() {
    const placeOfBirth = document.getElementById('placeOfBirth');
    const maritalStatus = document.getElementById('maritalStatus');
    const nationality = document.getElementById('nationality');
    const stateName = document.getElementById('stateName');
    let isValid = true;

    // Clear previous error states
    [placeOfBirth, maritalStatus, nationality, stateName].forEach(field => {
        field.closest('.form-group').classList.remove('error');
    });

    if (!placeOfBirth.value.trim()) {
        placeOfBirth.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!maritalStatus.value) {
        maritalStatus.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!nationality.value) {
        nationality.closest('.form-group').classList.add('error');
        isValid = false;
    }

    // Only validate state name if nationality is non-Austrian
    if (nationality.value === 'anderer Staat' && !stateName.value.trim()) {
        stateName.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!isValid) {
        const message = translations[selectedLanguage].fillRequiredFields;
        showToast(message);
    }

    return isValid;
}

function validateForeignPassportCard() {
    const documentType = document.getElementById('documentType');
    const documentNumber = document.getElementById('documentNumber');
    const documentIssueDate = document.getElementById('documentIssueDate');
    const documentIssuingAuthority = document.getElementById('documentIssuingAuthority');
    let isValid = true;

    // Clear previous error states
    [documentType, documentNumber, documentIssueDate, documentIssuingAuthority].forEach(field => {
        field.closest('.form-group').classList.remove('error');
    });

    if (!documentType.value) {
        documentType.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!documentNumber.value.trim()) {
        documentNumber.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!documentIssueDate.value) {
        documentIssueDate.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!documentIssuingAuthority.value.trim()) {
        documentIssuingAuthority.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!isValid) {
        const message = translations[selectedLanguage].fillRequiredFields;
        showToast(message);
    }

    return isValid;
}

function validateRegistrationAddressCard() {
    const registrationStreet = document.getElementById('registrationStreet');
    const registrationHouseNumber = document.getElementById('registrationHouseNumber');
    const registrationPostalCode = document.getElementById('registrationPostalCode');
    const registrationMunicipality = document.getElementById('registrationMunicipality');
    const isMainResidence = document.getElementById('isMainResidence');
    let isValid = true;

    // Clear previous error states
    [registrationStreet, registrationHouseNumber, registrationPostalCode, 
     registrationMunicipality, isMainResidence].forEach(field => {
        field.closest('.form-group').classList.remove('error');
    });

    if (!registrationStreet.value.trim()) {
        registrationStreet.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!registrationHouseNumber.value.trim()) {
        registrationHouseNumber.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!registrationPostalCode.value.trim() || !/^[0-9]{4}$/.test(registrationPostalCode.value)) {
        registrationPostalCode.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!registrationMunicipality.value.trim()) {
        registrationMunicipality.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!isMainResidence.value) {
        isMainResidence.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!isValid) {
        const message = translations[selectedLanguage].fillRequiredFields;
        showToast(message);
    }

    return isValid;
}

function validatePreviousResidenceCard() {
    const previousResidenceStreet = document.getElementById('previousResidenceStreet');
    const previousResidenceHouseNumber = document.getElementById('previousResidenceHouseNumber');
    const previousResidencePostalCode = document.getElementById('previousResidencePostalCode');
    const previousResidenceMunicipality = document.getElementById('previousResidenceMunicipality');
    let isValid = true;

    // Clear previous error states
    [previousResidenceStreet, previousResidenceHouseNumber, 
     previousResidencePostalCode, previousResidenceMunicipality].forEach(field => {
        field.closest('.form-group').classList.remove('error');
    });

    if (!previousResidenceStreet.value.trim()) {
        previousResidenceStreet.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!previousResidenceHouseNumber.value.trim()) {
        previousResidenceHouseNumber.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!previousResidencePostalCode.value.trim()) {
        previousResidencePostalCode.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!previousResidenceMunicipality.value.trim()) {
        previousResidenceMunicipality.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!isValid) {
        const message = translations[selectedLanguage].fillRequiredFields;
        showToast(message);
    }

    return isValid;
}

function validateDeregistrationCard() {
    const deregistrationStreet = document.getElementById('deregistrationStreet');
    const deregistrationHouseNumber = document.getElementById('deregistrationHouseNumber');
    const deregistrationPostalCode = document.getElementById('deregistrationPostalCode');
    const deregistrationMunicipality = document.getElementById('deregistrationMunicipality');
    const movedFromAbroad = document.getElementById('movedFromAbroad');
    let isValid = true;

    // Clear previous error states
    [deregistrationStreet, deregistrationHouseNumber, 
     deregistrationPostalCode, deregistrationMunicipality,
     movedFromAbroad].forEach(field => {
        field.closest('.form-group').classList.remove('error');
    });

    if (!deregistrationStreet.value.trim()) {
        deregistrationStreet.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!deregistrationHouseNumber.value.trim()) {
        deregistrationHouseNumber.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!deregistrationPostalCode.value.trim()) {
        deregistrationPostalCode.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!deregistrationMunicipality.value.trim()) {
        deregistrationMunicipality.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!movedFromAbroad.value) {
        movedFromAbroad.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!isValid) {
        const message = translations[selectedLanguage].fillRequiredFields;
        showToast(message);
    }

    return isValid;
}

function add_change_handlers() {
    // Add nationality change handler
    const nationalitySelect = document.getElementById('nationality');
    const stateNameInput = document.getElementById('stateName');
    const stateNameLabel = document.querySelector('label[for="stateName"]');
    
    nationalitySelect.addEventListener('change', function() {
        if (this.value === 'anderer Staat') {
            stateNameInput.disabled = false;
            stateNameInput.required = true;
            stateNameLabel.classList.add('required');
            stateNameInput.value = ''; // Clear any previous value
        } else {
            stateNameInput.disabled = true;
            stateNameInput.required = false;
            stateNameLabel.classList.remove('required');
            stateNameInput.value = ''; // Clear the field when disabled
        }
    });
}

document.addEventListener('DOMContentLoaded', async function() {
    // Element references
    const nextButton = document.getElementById('nextButton');
    const backButton = document.getElementById('backButton');
    const personalNextButton = document.getElementById('personalNextButton');

    // Card elements
    const languageCard = document.getElementById('languageCard');
    const personalCard = document.getElementById('personalCard');
    const birthDetailsCard = document.getElementById('birthDetailsCard');
    const birthDetailsBackButton = document.getElementById('birthDetailsBackButton');
    const birthDetailsNextButton = document.getElementById('birthDetailsNextButton');
    const citizenshipCard = document.getElementById('citizenshipCard');
    const citizenshipBackButton = document.getElementById('citizenshipBackButton');
    const citizenshipNextButton = document.getElementById('citizenshipNextButton');
    const registrationAddressCard = document.getElementById('registrationAddressCard');
    const registrationAddressBackButton = document.getElementById('registrationAddressBackButton');
    const registrationAddressNextButton = document.getElementById('registrationAddressNextButton');
    const previousResidenceCard = document.getElementById('previousResidenceCard');
    const previousResidenceBackButton = document.getElementById('previousResidenceBackButton');
    const previousResidenceNextButton = document.getElementById('previousResidenceNextButton');
    const deregistrationCard = document.getElementById('deregistrationCard');
    const deregistrationBackButton = document.getElementById('deregistrationBackButton');
    const deregistrationNextButton = document.getElementById('deregistrationNextButton');

    // Initialize language functionality
    initializeLanguageButtons();

    // Navigation handlers
    nextButton.addEventListener('click', () => {
        languageCard.style.display = 'none';
        personalCard.style.display = 'block';
    });

    backButton.addEventListener('click', () => {
        personalCard.style.display = 'none';
        languageCard.style.display = 'block';
    });

    personalNextButton.addEventListener('click', () => {
        if(validatePersonalCard()) {
            personalCard.style.display = 'none';
            birthDetailsCard.style.display = 'block';
        }
    });

    birthDetailsBackButton.addEventListener('click', () => {
        birthDetailsCard.style.display = 'none';
        personalCard.style.display = 'block';
    });

    birthDetailsNextButton.addEventListener('click', () => {
        const isValid = validateBirthDetailsCard();
        if(isValid) {
            birthDetailsCard.style.display = 'none';
            citizenshipCard.style.display = 'block';
        }
    });

    citizenshipBackButton.addEventListener('click', () => {
        citizenshipCard.style.display = 'none';
        birthDetailsCard.style.display = 'block';
    });

    citizenshipNextButton.addEventListener('click', () => {
        const isValid = validateCitizenshipCard();
        if (isValid) {
            citizenshipCard.style.display = 'none';
            foreignPassportCard.style.display = 'block';
        }
    });

    foreignPassportBackButton.addEventListener('click', () => {
        foreignPassportCard.style.display = 'none';
        citizenshipCard.style.display = 'block';
    });

    foreignPassportNextButton.addEventListener('click', () => {
        const isValid = validateForeignPassportCard();
        if (isValid) {
            foreignPassportCard.style.display = 'none';
            registrationAddressCard.style.display = 'block';
        }
    });

    registrationAddressBackButton.addEventListener('click', () => {
        registrationAddressCard.style.display = 'none';
        foreignPassportCard.style.display = 'block';
    });

    registrationAddressNextButton.addEventListener('click', () => {
        const isValid = validateRegistrationAddressCard();
        if (isValid) {
            //const isMainResidence = document.getElementById('isMainResidence').value;
            registrationAddressCard.style.display = 'none';
            previousResidenceCard.style.display = 'block';
        }
    });

    previousResidenceBackButton.addEventListener('click', () => {
        previousResidenceCard.style.display = 'none';
        registrationAddressCard.style.display = 'block';
    });

    previousResidenceNextButton.addEventListener('click', () => {
        if (validatePreviousResidenceCard()) {
            previousResidenceCard.style.display = 'none';
            deregistrationCard.style.display = 'block';
        }
    });

    deregistrationBackButton.addEventListener('click', () => {
        deregistrationCard.style.display = 'none';
        previousResidenceCard.style.display = 'block';
    });

    deregistrationNextButton.addEventListener('click', () => {
        if (validateDeregistrationCard()) {
            prepare_and_submit_form();
        }
    });

    // Load and apply default values if specified
    const defaultValues = await loadDefaultValues();
    if (defaultValues) {
        applyDefaultValues(defaultValues);
    }

    add_change_handlers();

    // Set current year in footer
    // document.getElementById('currentYear').textContent = new Date().getFullYear();
}); 

function prepare_and_submit_form() {
    const formData = {
        language: selectedLanguage,
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        lastNameBeforeMarriage: document.getElementById('lastNameBeforeMarriage').value.trim(),
        otherName: document.getElementById('otherName').value.trim(),
        dateOfBirth: document.getElementById('dateOfBirth').value,
        gender: document.getElementById('gender').value,
        religionOrCommunity: document.getElementById('religionOrCommunity').value,
        placeOfBirth: document.getElementById('placeOfBirth').value.trim(),
        maritalStatus: document.getElementById('maritalStatus').value,
        nationality: document.getElementById('nationality').value,
        stateName: document.getElementById('stateName').value.trim(),
        documentType: document.getElementById('documentType')?.value || '',
        documentNumber: document.getElementById('documentNumber')?.value.trim() || '',
        documentIssueDate: document.getElementById('documentIssueDate')?.value || '',
        documentIssuingAuthority: document.getElementById('documentIssuingAuthority')?.value.trim() || '',
        registrationStreet: document.getElementById('registrationStreet')?.value.trim() || '',
        registrationHouseNumber: document.getElementById('registrationHouseNumber')?.value.trim() || '',
        registrationStaircase: document.getElementById('registrationStaircase')?.value.trim() || '',
        registrationApartmentNumber: document.getElementById('registrationApartmentNumber')?.value.trim() || '',
        registrationPostalCode: document.getElementById('registrationPostalCode')?.value.trim() || '',
        registrationMunicipality: document.getElementById('registrationMunicipality')?.value.trim() || '',
        isMainResidence: document.getElementById('isMainResidence')?.value || '',
        previousResidenceStreet: document.getElementById('previousResidenceStreet')?.value.trim() || '',
        previousResidenceHouseNumber: document.getElementById('previousResidenceHouseNumber')?.value.trim() || '',
        previousResidenceStaircase: document.getElementById('previousResidenceStaircase')?.value.trim() || '',
        previousResidenceApartmentNumber: document.getElementById('previousResidenceApartmentNumber')?.value.trim() || '',
        previousResidencePostalCode: document.getElementById('previousResidencePostalCode')?.value.trim() || '',
        previousResidenceMunicipality: document.getElementById('previousResidenceMunicipality')?.value.trim() || '',
        deregistrationStreet: document.getElementById('deregistrationStreet')?.value.trim() || '',
        deregistrationHouseNumber: document.getElementById('deregistrationHouseNumber')?.value.trim() || '',
        deregistrationStaircase: document.getElementById('deregistrationStaircase')?.value.trim() || '',
        deregistrationApartmentNumber: document.getElementById('deregistrationApartmentNumber')?.value.trim() || '',
        deregistrationPostalCode: document.getElementById('deregistrationPostalCode')?.value.trim() || '',
        deregistrationMunicipality: document.getElementById('deregistrationMunicipality')?.value.trim() || '',
        movedFromAbroad: document.getElementById('movedFromAbroad')?.value || '',
        previousCountry: document.getElementById('previousCountry')?.value.trim() || ''
    };
    
    handleFormSubmit(formData);
}