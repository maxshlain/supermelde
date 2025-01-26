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
    const nextButton = document.getElementById('nextButton');
    const personalNextButton = document.getElementById('personalNextButton');
    const birthDetailsNextButton = document.getElementById('birthDetailsNextButton');
    
    nextButton.disabled = false;
    personalNextButton.disabled = false;
    birthDetailsNextButton.disabled = false;
    birthDetailsNextButton.textContent = translations[values.language]?.submit || 'Submit';
}

export {
    loadDefaultValues,
    applyDefaultValues
};
