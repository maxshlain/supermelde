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

document.addEventListener('DOMContentLoaded', function() {
    const languageButtons = document.querySelectorAll('.language-button');
    const nextButton = document.getElementById('nextButton');
    const welcomeHeader = document.querySelector('.wizard-card h2');
    const selectText = document.querySelector('.wizard-card p');
    let selectedLanguage = null;

    function updateCardLanguage(lang) {
        // Update all text content based on selected language
        welcomeHeader.textContent = translations[lang].welcome;
        selectText.textContent = translations[lang].selectLanguage;
        nextButton.textContent = translations[lang].nextButton;
        
        // Update language button texts
        document.querySelector('[data-language="en"] span').textContent = translations[lang].english;
        document.querySelector('[data-language="de"] span').textContent = translations[lang].german;
        
        // Update explanation text
        document.querySelector('.site-explanation').textContent = translations[lang].siteExplanation;
        
        // Update document language
        document.documentElement.lang = lang;
    }

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
        if (!selectedLanguage) {
            return;
        }
        
        // TODO: Hide current card and show next card
        // The language is already set, so we can proceed to the next card
    });
}); 