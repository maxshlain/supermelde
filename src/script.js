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
    const registrationInViennaRequired = document.getElementById('registrationInViennaRequired');
    
    if (!registrationInViennaRequired.value) {
        registrationInViennaRequired.closest('.form-group').classList.add('error');
        const message = translations[selectedLanguage].fillRequiredFields;
        showToast(message);
        return false;
    }

    if (registrationInViennaRequired.value === 'nein') {
        return true;
    }

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

    const isMainResidence = document.getElementById('isMainResidence').value === 'ja';

    if (isMainResidence) {
        return true;
    }

    const previousResidenceStreet = document.getElementById('previousResidenceStreet');
    const previousResidenceHouseNumber = document.getElementById('previousResidenceHouseNumber');
    const previousResidencePostalCode = document.getElementById('previousResidencePostalCode');
    const previousResidenceMunicipality = document.getElementById('previousResidenceMunicipality');
    const movedFromAbroad = document.getElementById('movedFromAbroad');
    const previousCountry = document.getElementById('previousCountry');
    let isValid = true;

    // Clear previous error states
    [previousResidenceStreet, previousResidenceHouseNumber, 
     previousResidencePostalCode, previousResidenceMunicipality,
     movedFromAbroad, previousCountry].forEach(field => {
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

    if (!movedFromAbroad.value) {
        movedFromAbroad.closest('.form-group').classList.add('error');
        isValid = false;
    }

    // Validate previous country only if moved from abroad is "yes"
    if (movedFromAbroad.value === 'ja' && !previousCountry.value.trim()) {
        previousCountry.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!isValid) {
        const message = translations[selectedLanguage].fillRequiredFields;
        showToast(message);
    }

    return isValid;
}

function validateDeregistrationCard() {
    const deregistrationRequired = document.getElementById('deregistrationRequired');
    if (deregistrationRequired.value === 'nein') {
        return true;
    }

    const deregistrationStreet = document.getElementById('deregistrationStreet');
    const deregistrationHouseNumber = document.getElementById('deregistrationHouseNumber');
    const deregistrationPostalCode = document.getElementById('deregistrationPostalCode');
    const deregistrationMunicipality = document.getElementById('deregistrationMunicipality');
    const movingAbroad = document.getElementById('movingAbroad');
    const destinationCountry = document.getElementById('destinationCountry');
    let isValid = true;

    // Clear previous error states
    [deregistrationStreet, deregistrationHouseNumber, 
     deregistrationPostalCode, deregistrationMunicipality,
     movingAbroad, destinationCountry].forEach(field => {
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

    if (!movingAbroad.value) {
        movingAbroad.closest('.form-group').classList.add('error');
        isValid = false;
    }

    // Validate destination country only if moving abroad is "yes"
    if (movingAbroad.value === 'ja' && !destinationCountry.value.trim()) {
        destinationCountry.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!isValid) {
        const message = translations[selectedLanguage].fillRequiredFields;
        showToast(message);
    }

    return isValid;
}

function validateFinalCard() {
    const landlordName = document.getElementById('landlordName');
    let isValid = true;

    // Clear previous error states
    landlordName.closest('.form-group').classList.remove('error');

    if (!landlordName.value.trim()) {
        landlordName.closest('.form-group').classList.add('error');
        isValid = false;
    }

    if (!isValid) {
        const message = translations[selectedLanguage].fillRequiredFields;
        showToast(message);
    }

    return isValid;
}

function subscribe_to_space_key() {
    document.addEventListener('keydown', function(event) {
        // Only handle space key when it's not pressed in an input or select element
        if (event.code === 'Space' && 
            document.activeElement.tagName !== 'INPUT' && 
            document.activeElement.tagName !== 'SELECT' && 
            document.activeElement.tagName !== 'TEXTAREA') {
            event.preventDefault(); // Prevent page scroll
            simulateNextButtonClick();
        }
    });
}

function subscribe_to_deregistration_required_change() {
    const deregistrationRequired = document.getElementById('deregistrationRequired');
    deregistrationRequired.addEventListener('change', function() {
        on_deregistration_required_change();
    });
}

function on_deregistration_required_change() {
    const deregistrationRequired = document.getElementById('deregistrationRequired');
    if (deregistrationRequired.value === 'ja') {
        show_deregistration_fields();
    } else {
        hide_deregistration_fields();
    }
}

function show_deregistration_fields() {
    
    // show street field, mandatory
    const deregistrationStreet = document.getElementById('deregistrationStreet');
    deregistrationStreet.classList.add('required');
    // deregistrationStreet.value = '';
    const deregistrationStreetGroup = deregistrationStreet.closest('.form-group');
    deregistrationStreetGroup.style.display = 'block';

    // show house number field, mandatory
    const deregistrationHouseNumber = document.getElementById('deregistrationHouseNumber');
    deregistrationHouseNumber.classList.add('required');
    // deregistrationHouseNumber.value = '';
    const deregistrationHouseNumberGroup = deregistrationHouseNumber.closest('.form-group');
    deregistrationHouseNumberGroup.style.display = 'block';

    // show staircase field
    const deregistrationStaircase = document.getElementById('deregistrationStaircase');
    // deregistrationStaircase.value = '';
    const deregistrationStaircaseGroup = deregistrationStaircase.closest('.form-group');
    deregistrationStaircaseGroup.style.display = 'block';

    // apartment number field
    const deregistrationApartmentNumber = document.getElementById('deregistrationApartmentNumber');
    // deregistrationApartmentNumber.value = '';
    const deregistrationApartmentNumberGroup = deregistrationApartmentNumber.closest('.form-group');
    deregistrationApartmentNumberGroup.style.display = 'block';

    // show postal code field, mandatory
    const deregistrationPostalCode = document.getElementById('deregistrationPostalCode');
    deregistrationPostalCode.classList.add('required');
    // deregistrationPostalCode.value = '';
    const deregistrationPostalCodeGroup = deregistrationPostalCode.closest('.form-group');
    deregistrationPostalCodeGroup.style.display = 'block';

    // show municipality field, mandatory
    const deregistrationMunicipality = document.getElementById('deregistrationMunicipality');
    deregistrationMunicipality.classList.add('required');
    // deregistrationMunicipality.value = '';
    const deregistrationMunicipalityGroup = deregistrationMunicipality.closest('.form-group');
    deregistrationMunicipalityGroup.style.display = 'block';
}

function hide_deregistration_fields() {
    // hide street field, remove mandatory
    const deregistrationStreet = document.getElementById('deregistrationStreet');
    deregistrationStreet.classList.remove('required');
    deregistrationStreet.value = '';
    const deregistrationStreetGroup = deregistrationStreet.closest('.form-group');
    deregistrationStreetGroup.style.display = 'none';

    // hide house number field, remove mandatory
    const deregistrationHouseNumber = document.getElementById('deregistrationHouseNumber');
    deregistrationHouseNumber.classList.remove('required');
    deregistrationHouseNumber.value = '';
    const deregistrationHouseNumberGroup = deregistrationHouseNumber.closest('.form-group');
    deregistrationHouseNumberGroup.style.display = 'none';

    // hide staircase field
    const deregistrationStaircase = document.getElementById('deregistrationStaircase');
    deregistrationStaircase.value = '';
    const deregistrationStaircaseGroup = deregistrationStaircase.closest('.form-group');
    deregistrationStaircaseGroup.style.display = 'none';

    // hide apartment number field
    const deregistrationApartmentNumber = document.getElementById('deregistrationApartmentNumber');
    deregistrationApartmentNumber.value = '';
    const deregistrationApartmentNumberGroup = deregistrationApartmentNumber.closest('.form-group');
    deregistrationApartmentNumberGroup.style.display = 'none';

    // hide postal code field
    const deregistrationPostalCode = document.getElementById('deregistrationPostalCode');
    deregistrationPostalCode.value = '';
    const deregistrationPostalCodeGroup = deregistrationPostalCode.closest('.form-group');
    deregistrationPostalCodeGroup.style.display = 'none';

    // hide municipality field
    const deregistrationMunicipality = document.getElementById('deregistrationMunicipality');
    deregistrationMunicipality.value = '';
    const deregistrationMunicipalityGroup = deregistrationMunicipality.closest('.form-group');
    deregistrationMunicipalityGroup.style.display = 'none';
}

function subscribe_to_nationality_change() {
    const nationalitySelect = document.getElementById('nationality');
    
    nationalitySelect.addEventListener('change', function() {
        on_nationality_select_change();
    });
}

function on_nationality_select_change() {
    const nationalitySelect = document.getElementById('nationality');
    if (nationalitySelect.value === 'anderer Staat') { // If the user is not an Austrian citizen
        show_state_name_field();
    } else { // If the user is an Austrian citizen
        hide_state_name_field();
    }
}

function show_state_name_field() {
    const stateNameInput = document.getElementById('stateName');
    const stateNameLabel = document.querySelector('label[for="stateName"]');
    stateNameInput.required = true;
    stateNameLabel.classList.add('required');
    
    const stateNameGroup = document.getElementById('stateName').closest('.form-group');
    stateNameGroup.style.display = 'block';
}

function hide_state_name_field() {
    const stateNameInput = document.getElementById('stateName');
    const stateNameLabel = document.querySelector('label[for="stateName"]');
    stateNameInput.required = false;
    stateNameInput.value = '';
    stateNameLabel.classList.remove('required');
    
    const stateNameGroup = document.getElementById('stateName').closest('.form-group');
    stateNameGroup.style.display = 'none';
}

function getCurrentVisibleCard() {
    const cards = document.querySelectorAll('.wizard-card');
    for (const card of cards) {
        if (card.style.display !== 'none') {
            return card;
        }
    }
    return null;
}

function simulateNextButtonClick() {
    const currentCard = getCurrentVisibleCard();
    if (!currentCard) return;
    
    const nextButton = currentCard.querySelector('.next-button');
    if (nextButton) {
        nextButton.click();
    }
}

function subscribe_to_moved_from_abroad_change() {
    const movedFromAbroadSelect = document.getElementById('movedFromAbroad');
    movedFromAbroadSelect.addEventListener('change', function() {
        on_moved_from_abroad_change();
    });
}

function on_moved_from_abroad_change() {
    const movedFromAbroadSelect = document.getElementById('movedFromAbroad');
    const previousCountryInput = document.getElementById('previousCountry');
    const previousCountryLabel = document.querySelector('label[for="previousCountry"]');
    const previousCountryGroup = previousCountryInput.closest('.form-group');
    
    if (movedFromAbroadSelect.value === 'ja') {
        previousCountryGroup.style.display = 'block';
        previousCountryInput.required = true;
        previousCountryLabel.classList.remove('optional');
        previousCountryLabel.classList.add('required');
    } else {
        previousCountryGroup.style.display = 'none';
        previousCountryInput.required = false;
        previousCountryLabel.classList.remove('required');
        previousCountryLabel.classList.add('optional');
        previousCountryInput.value = '';
    }
}

function subscribe_to_main_residence_change() {
    const isMainResidenceSelect = document.getElementById('isMainResidence');
    isMainResidenceSelect.addEventListener('change', function() {
        on_main_residence_selection_change();
    });
}

function on_main_residence_selection_change() {
    const isMainResidence = document.getElementById('isMainResidence').value === 'ja';
    const previousResidenceCard = document.getElementById('previousResidenceCard');
    const formGroups = previousResidenceCard.querySelectorAll('.form-group');
    const subtitle = previousResidenceCard.querySelector('p');
    const requiredFieldsNote = previousResidenceCard.querySelector('.required-fields-note');
    
    if (isMainResidence) {
        // Hide all form groups
        formGroups.forEach(group => {
            group.style.display = 'none';
        });
        
        // Update subtitle to show skip message
        subtitle.textContent = translations[selectedLanguage].previousResidenceSkipMessage;
        
        // Hide required fields note
        if (requiredFieldsNote) {
            requiredFieldsNote.style.display = 'none';
        }
    } else {
        // Show all form groups
        formGroups.forEach(group => {
            group.style.display = 'block';
        });
        
        // Restore original subtitle
        subtitle.textContent = translations[selectedLanguage].previousResidenceSubtitle;
        
        // Show required fields note
        if (requiredFieldsNote) {
            requiredFieldsNote.style.display = 'block';
        }
    }
}

function subscribe_to_moving_abroad_change() {
    const movingAbroadSelect = document.getElementById('movingAbroad');
    movingAbroadSelect.addEventListener('change', function() {
        on_moving_abroad_change();
    });
}

function on_moving_abroad_change() {
    const movingAbroadSelect = document.getElementById('movingAbroad');
    const destinationCountryInput = document.getElementById('destinationCountry');
    const destinationCountryLabel = document.querySelector('label[for="destinationCountry"]');
    const destinationCountryGroup = destinationCountryInput.closest('.form-group');
    
    if (movingAbroadSelect.value === 'ja') {
        destinationCountryGroup.style.display = 'block';
        destinationCountryInput.required = true;
        destinationCountryLabel.classList.remove('optional');
        destinationCountryLabel.classList.add('required');
    } else {
        destinationCountryGroup.style.display = 'none';
        destinationCountryInput.required = false;
        destinationCountryLabel.classList.remove('required');
        destinationCountryLabel.classList.add('optional');
        destinationCountryInput.value = '';
    }
}

function subscribe_to_registration_required_change() {
    const registrationRequiredSelect = document.getElementById('registrationInViennaRequired');
    registrationRequiredSelect.addEventListener('change', function() {
        on_registration_required_change();
    });
}

function on_registration_required_change() {
    const registrationRequired = document.getElementById('registrationInViennaRequired').value === 'ja';
    const registrationAddressCard = document.getElementById('registrationAddressCard');
    const formGroups = registrationAddressCard.querySelectorAll('.form-group');
    const subtitle = registrationAddressCard.querySelector('p');
    const requiredFieldsNote = registrationAddressCard.querySelector('.required-fields-note');
    
    formGroups.forEach(group => {
        // Skip the registration required field itself
        if (group.querySelector('#registrationInViennaRequired')) return;
        
        if (registrationRequired) {
            group.style.display = 'block';
            subtitle.textContent = translations[selectedLanguage].registrationAddressSubtitle;
            if (requiredFieldsNote) {
                requiredFieldsNote.style.display = 'block';
            }
        } else {
            group.style.display = 'none';
            subtitle.textContent = translations[selectedLanguage].registrationInViennaSkipMessage;
            if (requiredFieldsNote) {
                requiredFieldsNote.style.display = 'none';
            }
        }
    });
}

function updateRequiredFieldsNotes() {
    const requiredFieldsNotes = document.querySelectorAll('.required-fields-note');
    requiredFieldsNotes.forEach(note => {
        note.innerHTML = `<span>*</span> ${translations[selectedLanguage].requiredFieldsNote}`;
    });
}

// Add this function to handle GA events
function sendGAEvent(cardName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'wizard_progress', {
            'event_category': 'Navigation',
            'event_label': cardName
        });
    }
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
    const finalCard = document.getElementById('finalCard');
    const finalBackButton = document.getElementById('finalBackButton');
    const finalNextButton = document.getElementById('finalNextButton');

    const aboutButton = document.getElementById('aboutButton');
    const aboutCard = document.getElementById('aboutCard');
    const aboutBackButton = document.getElementById('aboutBackButton');

    // Add about navigation handlers
    aboutButton.addEventListener('click', () => {
        languageCard.style.display = 'none';
        aboutCard.style.display = 'block';
    });

    aboutBackButton.addEventListener('click', () => {
        aboutCard.style.display = 'none';
        languageCard.style.display = 'block';
    });

    // Initialize language functionality
    initializeLanguageButtons();

    // Navigation handlers
    nextButton.addEventListener('click', () => {
        languageCard.style.display = 'none';
        personalCard.style.display = 'block';
        sendGAEvent('Personal Information');
    });

    backButton.addEventListener('click', () => {
        personalCard.style.display = 'none';
        languageCard.style.display = 'block';
    });

    personalNextButton.addEventListener('click', () => {
        if(validatePersonalCard()) {
            personalCard.style.display = 'none';
            birthDetailsCard.style.display = 'block';
            sendGAEvent('Birth Details');
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
            sendGAEvent('Citizenship');
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
            sendGAEvent('Foreign Passport');
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
            sendGAEvent('Registration Address');
        }
    });

    registrationAddressBackButton.addEventListener('click', () => {
        registrationAddressCard.style.display = 'none';
        foreignPassportCard.style.display = 'block';
    });

    registrationAddressNextButton.addEventListener('click', () => {
        const isValid = validateRegistrationAddressCard();
        if (isValid) {
            registrationAddressCard.style.display = 'none';
            previousResidenceCard.style.display = 'block';
            sendGAEvent('Previous Residence');
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
            sendGAEvent('Deregistration');
        }
    });

    deregistrationBackButton.addEventListener('click', () => {
        deregistrationCard.style.display = 'none';
        previousResidenceCard.style.display = 'block';
    });

    deregistrationNextButton.addEventListener('click', () => {
        if (validateDeregistrationCard()) {
            deregistrationCard.style.display = 'none';
            finalCard.style.display = 'block';
            sendGAEvent('Landlord Information');
        }
    });

    // Add navigation handlers for final card
    finalBackButton.addEventListener('click', () => {
        finalCard.style.display = 'none';
        deregistrationCard.style.display = 'block';
    });

    finalNextButton.addEventListener('click', () => {
        if (validateFinalCard()) {
            sendGAEvent('Form Submission');
            prepare_and_submit_form();
        }
    });

    // Load and apply default values if specified
    const defaultValues = await loadDefaultValues();
    if (defaultValues) {
        applyDefaultValues(defaultValues);

        // maybe nationality value forces hide
        on_nationality_select_change();
        on_deregistration_required_change();
        on_moved_from_abroad_change();
        on_main_residence_selection_change();
    }
    
    subscribe_to_nationality_change();
    subscribe_to_deregistration_required_change();
    subscribe_to_moved_from_abroad_change();
    subscribe_to_main_residence_change();
    subscribe_to_moving_abroad_change();
    subscribe_to_registration_required_change();
    subscribe_to_space_key();

    // Update required fields notes when language changes
    const languageButtons = document.querySelectorAll('.language-button');
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            updateRequiredFieldsNotes();
        });
    });

    // Initial update of required fields notes
    updateRequiredFieldsNotes();
}); 

async function prepare_and_submit_form() {
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
        previousCountry: document.getElementById('previousCountry')?.value.trim() || '',
        landlordName: document.getElementById('landlordName')?.value.trim() || '',
        movingAbroad: document.getElementById('movingAbroad')?.value || '',
        destinationCountry: document.getElementById('destinationCountry')?.value.trim() || ''
    };
    
    try {
        await handleFormSubmit(formData);
        window.location.href = `/thankyou.html?lang=${selectedLanguage}`;
        sendGAEvent('Form Completed');
    } catch (error) {
        console.error('Error submitting form:', error);
        showToast('An error occurred while generating your form. Please try again.');
        sendGAEvent('Form Error', { error_message: error.message });
    }
}