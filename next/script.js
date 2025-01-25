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
    // Element references
    const languageButtons = document.querySelectorAll('.language-button');
    const nextButton = document.getElementById('nextButton');
    const backButton = document.getElementById('backButton');
    const personalNextButton = document.getElementById('personalNextButton');
    let selectedLanguage = null;

    // Card elements
    const languageCard = document.getElementById('languageCard');
    const personalCard = document.getElementById('personalCard');
    const birthDetailsCard = document.getElementById('birthDetailsCard');
    const birthDetailsBackButton = document.getElementById('birthDetailsBackButton');
    const birthDetailsNextButton = document.getElementById('birthDetailsNextButton');
    const citizenshipCard = document.getElementById('citizenshipCard');
    const citizenshipBackButton = document.getElementById('citizenshipBackButton');
    const citizenshipNextButton = document.getElementById('citizenshipNextButton');

    function updateCardLanguage(lang) {
        // Update all text content based on selected language
        document.querySelector('.wizard-card h2').textContent = translations[lang].welcome;
        document.querySelector('.wizard-card p').textContent = translations[lang].selectLanguage;
        nextButton.textContent = translations[lang].startButton;
        
        // Update language button texts
        document.querySelector('[data-language="en"] span').textContent = translations[lang].english;
        document.querySelector('[data-language="de"] span').textContent = translations[lang].german;
        
        // Update explanation text
        document.querySelector('.site-explanation').textContent = translations[lang].siteExplanation;
        
        // Update document language
        document.documentElement.lang = lang;

        // Update cards text
        updatePersonalCard(lang);
        updateBirthDetailsCard(lang);
        updateCitizenshipCard(lang);
    }

    function updatePersonalCard(lang) {
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
        personalNextButton.textContent = translations[lang].next;
    }

    function updateBirthDetailsCard(lang) {
        document.querySelector('#birthDetailsCard h2').textContent = translations[lang].birthDetailsTitle;
        document.querySelector('#birthDetailsCard p').textContent = translations[lang].birthDetailsSubtitle;
        document.querySelector('label[for="dateOfBirth"]').textContent = translations[lang].dateOfBirth;
        document.querySelector('label[for="gender"]').textContent = translations[lang].gender;
        document.querySelector('#dateOfBirth').nextElementSibling.textContent = translations[lang].dateOfBirthTooltip;
        document.querySelector('#gender').nextElementSibling.textContent = translations[lang].genderTooltip;
        document.querySelector('label[for="religionOrCommunity"]').textContent = translations[lang].religionOrCommunity;
        document.querySelector('#religionOrCommunity').nextElementSibling.textContent = translations[lang].religionOrCommunityTooltip;
        birthDetailsBackButton.textContent = translations[lang].back;
        birthDetailsNextButton.textContent = translations[lang].next;

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
    }

    function updateCitizenshipCard(lang) {
        document.querySelector('#citizenshipCard h2').textContent = translations[lang].citizenshipTitle;
        document.querySelector('#citizenshipCard p').textContent = translations[lang].citizenshipSubtitle;
        document.querySelector('label[for="placeOfBirth"]').textContent = translations[lang].placeOfBirth;
        document.querySelector('#placeOfBirth').nextElementSibling.textContent = translations[lang].placeOfBirthTooltip;
        citizenshipBackButton.textContent = translations[lang].back;
        citizenshipNextButton.textContent = translations[lang].submit;

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

    // Handle language selection
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            languageButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            selectedLanguage = this.dataset.language;
            updateCardLanguage(selectedLanguage);
        });
    });

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