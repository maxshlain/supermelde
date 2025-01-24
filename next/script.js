let isDefaultValuesMode = false;

async function loadDefaultValues() {
    const urlParams = new URLSearchParams(window.location.search);
    const defaultValuesSet = urlParams.get('default_values');
    
    if (defaultValuesSet === '1') {
        try {
            const response = await fetch('assets/values_1.json');
            const defaultValues = await response.json();
            return defaultValues;
        } catch (error) {
            console.error('Error loading default values:', error);
        }
    }
    return null;
}

function applyDefaultValues(values) {
    if (!values) return;
    
    isDefaultValuesMode = true;  // Set the flag when applying default values

    // Set language
    const languageButton = document.querySelector(`[data-language="${values.language}"]`);
    if (languageButton) {
        languageButton.click();
    }

    // iterate over each field in the values object
    for (const [fieldId, value] of Object.entries(values)) {

        const inputElement = document.getElementById(fieldId)
        if (inputElement) {
            inputElement.value = value;
        }
    }

    // Enable all buttons in default values mode
    nextButton.disabled = false;
    personalNextButton.disabled = false;
    birthDetailsNextButton.disabled = false;
    birthDetailsNextButton.textContent = translations[values.language]?.submit || 'Submit';
}

function changeLanguage(lang) {
    // Update active button state
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(lang)) {
            btn.classList.add('active');
        }
    });

    // Update content
    document.querySelector('label[for="firstName"]').textContent = translations[lang].firstName;
    document.querySelector('label[for="lastName"]').textContent = translations[lang].lastName;
    document.querySelector('#firstName').nextElementSibling.textContent = translations[lang].firstNameTooltip;
    document.querySelector('#lastName').nextElementSibling.textContent = translations[lang].lastNameTooltip;
    document.querySelector('.submit-btn').textContent = translations[lang].submit;
}

function handleSubmit(event) {
    event.preventDefault();
    alert('Submitted!');
}

document.addEventListener('DOMContentLoaded', async function() {
    const languageButtons = document.querySelectorAll('.language-button');
    const nextButton = document.getElementById('nextButton');
    const backButton = document.getElementById('backButton');
    const personalNextButton = document.getElementById('personalNextButton');
    const welcomeHeader = document.querySelector('.wizard-card h2');
    const selectText = document.querySelector('.wizard-card p');
    let selectedLanguage = null;

    // Card elements
    const languageCard = document.getElementById('languageCard');
    const personalCard = document.getElementById('personalCard');
    
    // Input elements
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const lastNameBeforeMarriage = document.getElementById('lastNameBeforeMarriage');
    const otherName = document.getElementById('otherName');

    // Add new card elements
    const birthDetailsCard = document.getElementById('birthDetailsCard');
    const birthDetailsBackButton = document.getElementById('birthDetailsBackButton');
    const birthDetailsNextButton = document.getElementById('birthDetailsNextButton');
    const dateOfBirth = document.getElementById('dateOfBirth');
    const gender = document.getElementById('gender');
    const religionOrCommunity = document.getElementById('religionOrCommunity');

    // Add new elements
    const citizenshipCard = document.getElementById('citizenshipCard');
    const citizenshipBackButton = document.getElementById('citizenshipBackButton');
    const citizenshipNextButton = document.getElementById('citizenshipNextButton');
    const placeOfBirth = document.getElementById('placeOfBirth');
    const maritalStatus = document.getElementById('maritalStatus');
    const nationality = document.getElementById('nationality');

    function updateCardLanguage(lang) {
        // Update all text content based on selected language
        welcomeHeader.textContent = translations[lang].welcome;
        selectText.textContent = translations[lang].selectLanguage;
        nextButton.textContent = translations[lang].startButton;
        
        // Update language button texts
        document.querySelector('[data-language="en"] span').textContent = translations[lang].english;
        document.querySelector('[data-language="de"] span').textContent = translations[lang].german;
        
        // Update explanation text
        document.querySelector('.site-explanation').textContent = translations[lang].siteExplanation;
        
        // Update document language
        document.documentElement.lang = lang;

        // Update personal card text
        document.querySelector('#personalCard h2').textContent = translations[lang].personalInfoTitle;
        document.querySelector('#personalCard p').textContent = translations[lang].personalInfoSubtitle;
        document.querySelector('label[for="firstName"]').textContent = translations[lang].firstName;
        document.querySelector('label[for="lastName"]').textContent = translations[lang].lastName;
        document.querySelector('#firstName').nextElementSibling.textContent = translations[lang].firstNameTooltip;
        document.querySelector('#lastName').nextElementSibling.textContent = translations[lang].lastNameTooltip;
        document.querySelector('label[for="lastNameBeforeMarriage"]').textContent = translations[lang].lastNameBeforeMarriage;
        document.querySelector('label[for="otherName"]').textContent = translations[lang].otherName;
        document.querySelector('#lastNameBeforeMarriage').nextElementSibling.textContent = translations[lang].lastNameBeforeMarriageTooltip;
        document.querySelector('#otherName').nextElementSibling.textContent = translations[lang].otherNameTooltip;
        backButton.textContent = translations[lang].back;
        personalNextButton.textContent = translations[lang].nextButton;

        // Update birth details card
        document.querySelector('#birthDetailsCard h2').textContent = translations[lang].birthDetailsTitle;
        document.querySelector('#birthDetailsCard p').textContent = translations[lang].birthDetailsSubtitle;
        document.querySelector('label[for="dateOfBirth"]').textContent = translations[lang].dateOfBirth;
        document.querySelector('label[for="gender"]').textContent = translations[lang].gender;
        document.querySelector('#dateOfBirth').nextElementSibling.textContent = translations[lang].dateOfBirthTooltip;
        document.querySelector('#gender').nextElementSibling.textContent = translations[lang].genderTooltip;
        document.querySelector('label[for="religionOrCommunity"]').textContent = translations[lang].religionOrCommunity;
        document.querySelector('#religionOrCommunity').nextElementSibling.textContent = translations[lang].religionOrCommunityTooltip;

        // Update gender options
        const genderSelect = document.getElementById('gender');
        genderSelect.innerHTML = `
            <option value="" disabled selected>${translations[lang].genderSelectPrompt}</option>
            <option value="männlich">${translations[lang].genderOptions.male}</option>
            <option value="weiblich">${translations[lang].genderOptions.female}</option>
            <option value="divers">${translations[lang].genderOptions.diverse}</option>
            <option value="inter">${translations[lang].genderOptions.inter}</option>
            <option value="offen">${translations[lang].genderOptions.open}</option>
            <option value="keine">${translations[lang].genderOptions.noStatement}</option>
        `;

        // Update submit button text if fields are valid
        if (dateOfBirth?.value && gender?.value) {
            birthDetailsNextButton.textContent = translations[lang].submit;
        }

        // Update citizenship card
        document.querySelector('#citizenshipCard h2').textContent = translations[lang].citizenshipTitle;
        document.querySelector('#citizenshipCard p').textContent = translations[lang].citizenshipSubtitle;
        document.querySelector('label[for="placeOfBirth"]').textContent = translations[lang].placeOfBirth;
        document.querySelector('#placeOfBirth').nextElementSibling.textContent = translations[lang].placeOfBirthTooltip;
        citizenshipBackButton.textContent = translations[lang].back;
        citizenshipNextButton.textContent = translations[lang].submit;

        // Update birth details button to show "Next" instead of "Submit"
        birthDetailsNextButton.textContent = translations[lang].next;

        // Update marital status field
        document.querySelector('label[for="maritalStatus"]').textContent = translations[lang].maritalStatus;
        document.querySelector('#maritalStatus').nextElementSibling.textContent = translations[lang].maritalStatusTooltip;
        
        // Update marital status options
        const maritalStatusSelect = document.getElementById('maritalStatus');
        maritalStatusSelect.innerHTML = `
            <option value="" disabled selected>${translations[lang].maritalStatusSelectPrompt}</option>
            <option value="ledig">${translations[lang].maritalStatusOptions.single}</option>
            <option value="verheiratet">${translations[lang].maritalStatusOptions.married}</option>
            <option value="geschieden">${translations[lang].maritalStatusOptions.divorced}</option>
            <option value="verwitwet">${translations[lang].maritalStatusOptions.widowed}</option>
            <option value="eingetragene Partnerschaft">${translations[lang].maritalStatusOptions.registeredPartnership}</option>
        `;

        // Update nationality field
        document.querySelector('label[for="nationality"]').textContent = translations[lang].nationality;
        document.querySelector('#nationality').nextElementSibling.textContent = translations[lang].nationalityTooltip;
        
        // Update nationality options
        const nationalitySelect = document.getElementById('nationality');
        nationalitySelect.innerHTML = `
            <option value="" disabled selected>${translations[lang].nationalitySelectPrompt}</option>
            <option value="Österreich">${translations[lang].nationalityOptions.yes}</option>
            <option value="anderer Staat">${translations[lang].nationalityOptions.no}</option>
        `;
    }

    // Validate personal info inputs
    function validatePersonalInfo() {
        if (isDefaultValuesMode) {
            personalNextButton.disabled = false;
            return;
        }
        const isValid = firstName.value.trim() !== '' && lastName.value.trim() !== '';
        personalNextButton.disabled = !isValid;
    }

    // Validate birth details inputs
    function validateBirthDetails() {
        if (isDefaultValuesMode) {
            birthDetailsNextButton.disabled = false;
            birthDetailsNextButton.textContent = translations[selectedLanguage]?.submit || 'Submit';
            return;
        }
        const isValid = dateOfBirth.value && gender.value;
        birthDetailsNextButton.disabled = !isValid;
        
        // Update button text based on validation
        if (isValid) {
            birthDetailsNextButton.textContent = translations[selectedLanguage].submit;
        } else {
            birthDetailsNextButton.textContent = translations[selectedLanguage].next;
        }
    }

    // Add input listeners
    firstName.addEventListener('input', validatePersonalInfo);
    lastName.addEventListener('input', validatePersonalInfo);
    dateOfBirth.addEventListener('input', validateBirthDetails);
    gender.addEventListener('change', validateBirthDetails);

    // Handle language selection
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove selected class from all buttons
            languageButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Add selected class to clicked button
            this.classList.add('selected');
            
            // Store selected language
            selectedLanguage = this.dataset.language;
            
            // Update card language
            updateCardLanguage(selectedLanguage);
            
            // Enable next button
            nextButton.disabled = false;
        });
    });

    // Handle next button click (language to personal)
    nextButton.addEventListener('click', function() {
        if (!isDefaultValuesMode && !selectedLanguage) return;
        
        languageCard.style.display = 'none';
        personalCard.style.display = 'block';
    });

    // Handle back button click (personal to language)
    backButton.addEventListener('click', function() {
        personalCard.style.display = 'none';
        languageCard.style.display = 'block';
    });

    // Handle personal next button click
    personalNextButton.addEventListener('click', function() {
        if (!isDefaultValuesMode && (!firstName.value.trim() || !lastName.value.trim())) return;
        
        // Update progress
        document.querySelector('#personalCard .progress-step').classList.remove('active');
        document.querySelector('#personalCard .progress-step').classList.add('completed');
        
        personalCard.style.display = 'none';
        birthDetailsCard.style.display = 'block';
    });

    // Handle birth details back button click
    birthDetailsBackButton.addEventListener('click', function() {
        // Update progress
        document.querySelector('#birthDetailsCard .progress-step:first-child').classList.remove('completed');
        document.querySelector('#birthDetailsCard .progress-step:first-child').classList.add('active');
        
        birthDetailsCard.style.display = 'none';
        personalCard.style.display = 'block';
    });

    // Handle birth details next button click
    birthDetailsNextButton.addEventListener('click', function() {
        if (!isDefaultValuesMode && (!dateOfBirth.value || !gender.value)) return;
        
        birthDetailsCard.style.display = 'none';
        citizenshipCard.style.display = 'block';
    });

    // Handle citizenship back button
    citizenshipBackButton.addEventListener('click', function() {
        citizenshipCard.style.display = 'none';
        birthDetailsCard.style.display = 'block';
    });

    // Handle citizenship next button (final submit)
    citizenshipNextButton.addEventListener('click', function() {
        const formData = {
            language: selectedLanguage,
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            lastNameBeforeMarriage: lastNameBeforeMarriage.value.trim(),
            otherName: otherName.value.trim(),
            dateOfBirth: dateOfBirth.value,
            gender: gender.value,
            religionOrCommunity: religionOrCommunity.value,
            placeOfBirth: placeOfBirth.value.trim(),
            maritalStatus: maritalStatus.value,
            nationality: nationality.value.trim()
        };
        
        handleFormSubmit(formData);
    });

    // Add validation for citizenship
    function validateCitizenship() {
        if (isDefaultValuesMode) {
            citizenshipNextButton.disabled = false;
            citizenshipNextButton.textContent = translations[selectedLanguage].submit;
            return;
        }
        const isValid = placeOfBirth.value.trim() !== '' && 
                       maritalStatus.value !== '' && 
                       nationality.value.trim() !== '';
        citizenshipNextButton.disabled = !isValid;
        
        // Always show "Submit" on the last card
        citizenshipNextButton.textContent = translations[selectedLanguage].submit;
    }

    // Add input listeners
    placeOfBirth.addEventListener('input', validateCitizenship);
    maritalStatus.addEventListener('change', validateCitizenship);
    nationality.addEventListener('input', validateCitizenship);

    // Load and apply default values if specified
    const defaultValues = await loadDefaultValues();
    if (defaultValues) {
        applyDefaultValues(defaultValues);
    }
}); 