async function loadDefaultValues() {
    const urlParams = new URLSearchParams(window.location.search);
    const setNumber = urlParams.get('set');

    if (!setNumber) {
        return null;
    }

    try {
        // Load the values from the corresponding set file
        const response = await fetch(`assets/set_${setNumber}.json`);
        if (!response.ok) {
            console.error(`Failed to load set_${setNumber}.json`);
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error('Error loading default values:', error);
        return null;
    }
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
}

export {
    loadDefaultValues,
    applyDefaultValues
};
