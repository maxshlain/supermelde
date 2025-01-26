import { selectedLanguage, initializeLanguageButtons } from './language.js';
import { loadDefaultValues, applyDefaultValues } from './values.js';

function handleSubmit(event) {
    event.preventDefault();
    alert('Submitted!');
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
        personalCard.style.display = 'none';
        birthDetailsCard.style.display = 'block';
    });

    birthDetailsBackButton.addEventListener('click', () => {
        birthDetailsCard.style.display = 'none';
        personalCard.style.display = 'block';
    });

    birthDetailsNextButton.addEventListener('click', () => {
        birthDetailsCard.style.display = 'none';
        citizenshipCard.style.display = 'block';
    });

    citizenshipBackButton.addEventListener('click', () => {
        citizenshipCard.style.display = 'none';
        birthDetailsCard.style.display = 'block';
    });

    citizenshipNextButton.addEventListener('click', () => {
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
            nationality: document.getElementById('nationality').value
        };
        
        handleFormSubmit(formData);
    });

    // Load and apply default values if specified
    const defaultValues = await loadDefaultValues();
    if (defaultValues) {
        applyDefaultValues(defaultValues);
    }
}); 