// Language-related state
let selectedLanguage = null;

// Function to update language across all cards
function updateCardLanguage(lang) {
    // Update all text content based on selected language
    document.querySelector('.wizard-card h2').textContent = translations[lang].welcome;
    document.querySelector('.wizard-card p').textContent = translations[lang].selectLanguage;
    document.querySelector('#nextButton').textContent = translations[lang].startButton;
    
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
    document.querySelector('#backButton').textContent = translations[lang].back;
    document.querySelector('#personalNextButton').textContent = translations[lang].next;
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
    document.querySelector('#birthDetailsBackButton').textContent = translations[lang].back;
    document.querySelector('#birthDetailsNextButton').textContent = translations[lang].next;

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
    document.querySelector('#citizenshipBackButton').textContent = translations[lang].back;
    document.querySelector('#citizenshipNextButton').textContent = translations[lang].submit;

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

// Initialize language buttons
function initializeLanguageButtons() {
    const languageButtons = document.querySelectorAll('.language-button');
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            languageButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            selectedLanguage = this.dataset.language;
            updateCardLanguage(selectedLanguage);
        });
    });
}

// Export functions and variables that need to be accessed from script.js
export {
    selectedLanguage,
    updateCardLanguage,
    initializeLanguageButtons
};
