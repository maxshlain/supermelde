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
    document.getElementById('currentYear').textContent = new Date().getFullYear();
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
        documentIssuingAuthority: document.getElementById('documentIssuingAuthority')?.value.trim() || ''
    };
    
    handleFormSubmit(formData);
}