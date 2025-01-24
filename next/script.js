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

    // Set form values
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    
    if (firstName) firstName.value = values.firstName;
    if (lastName) lastName.value = values.lastName;
    
    // Set birth details values
    if (dateOfBirth) dateOfBirth.value = values.dateOfBirth;
    if (gender) {
        gender.value = values.gender;
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

    // Add new card elements
    const birthDetailsCard = document.getElementById('birthDetailsCard');
    const birthDetailsBackButton = document.getElementById('birthDetailsBackButton');
    const birthDetailsNextButton = document.getElementById('birthDetailsNextButton');
    const dateOfBirth = document.getElementById('dateOfBirth');
    const gender = document.getElementById('gender');

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
        backButton.textContent = translations[lang].back;
        personalNextButton.textContent = translations[lang].nextButton;

        // Update birth details card
        document.querySelector('#birthDetailsCard h2').textContent = translations[lang].birthDetailsTitle;
        document.querySelector('#birthDetailsCard p').textContent = translations[lang].birthDetailsSubtitle;
        document.querySelector('label[for="dateOfBirth"]').textContent = translations[lang].dateOfBirth;
        document.querySelector('label[for="gender"]').textContent = translations[lang].gender;
        document.querySelector('#dateOfBirth').nextElementSibling.textContent = translations[lang].dateOfBirthTooltip;
        document.querySelector('#gender').nextElementSibling.textContent = translations[lang].genderTooltip;

        // Update gender options
        const genderSelect = document.getElementById('gender');
        genderSelect.innerHTML = `
            <option value="" disabled selected>Select gender</option>
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

    // Handle next button click
    nextButton.addEventListener('click', function() {
        if (!isDefaultValuesMode && !selectedLanguage) return;
        
        languageCard.style.display = 'none';
        personalCard.style.display = 'block';
    });

    // Handle back button click
    backButton.addEventListener('click', function() {
        personalCard.style.display = 'none';
        languageCard.style.display = 'block';
    });

    // Handle personal next button click
    personalNextButton.addEventListener('click', function() {
        if (!isDefaultValuesMode && (!firstName.value.trim() || !lastName.value.trim())) return;
        
        personalCard.style.display = 'none';
        birthDetailsCard.style.display = 'block';
    });

    // Handle birth details back button click
    birthDetailsBackButton.addEventListener('click', function() {
        birthDetailsCard.style.display = 'none';
        personalCard.style.display = 'block';
    });

    // Handle birth details next button click
    birthDetailsNextButton.addEventListener('click', function() {
        if (!isDefaultValuesMode && (!dateOfBirth.value || !gender.value)) return;
        
        // Collect all form data
        const formData = {
            language: selectedLanguage,
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            dateOfBirth: dateOfBirth.value,
            gender: gender.value
        };
        
        // Call the submit handler
        handleFormSubmit(formData);
    });

    // Load and apply default values if specified
    const defaultValues = await loadDefaultValues();
    if (defaultValues) {
        applyDefaultValues(defaultValues);
    }
}); 