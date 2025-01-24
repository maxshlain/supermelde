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

    // Set form values
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    
    if (firstName) firstName.value = values.firstName;
    if (lastName) lastName.value = values.lastName;
    
    // Trigger validation
    validatePersonalInfo();
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
    }

    // Validate personal info inputs
    function validatePersonalInfo() {
        const isValid = firstName.value.trim() !== '' && lastName.value.trim() !== '';
        personalNextButton.disabled = !isValid;
    }

    // Add input listeners
    firstName.addEventListener('input', validatePersonalInfo);
    lastName.addEventListener('input', validatePersonalInfo);

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
        if (!selectedLanguage) return;
        
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
        if (!firstName.value.trim() || !lastName.value.trim()) return;
        
        // TODO: Save the form data and proceed to next card
        console.log('Personal info saved:', {
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim()
        });
    });

    // Load and apply default values if specified
    const defaultValues = await loadDefaultValues();
    if (defaultValues) {
        applyDefaultValues(defaultValues);
    }
}); 