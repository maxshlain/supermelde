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
    let selectedLanguage = null;

    // Handle language selection
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove selected class from all buttons
            languageButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Add selected class to clicked button
            this.classList.add('selected');
            
            // Store selected language
            selectedLanguage = this.dataset.language;
            
            // Enable next button
            nextButton.disabled = false;
        });
    });

    // Handle next button click
    nextButton.addEventListener('click', function() {
        if (!selectedLanguage) {
            return;
        }
        
        // Set the selected language
        document.documentElement.lang = selectedLanguage;
        
        // TODO: Hide current card and show next card
        // TODO: Load translations for the selected language
    });
}); 