const translations = {
    // --------------------------------------------------------------- //
    //                     English (en)                                //
    // --------------------------------------------------------------- //
    en: {
        // Language selector card
        welcome: "Welcome to Supermelde",
        selectLanguage: "Please select your preferred language",
        startButton: "Start",
        english: "English",
        german: "German",
        siteExplanation: "Get the meldezettel form filled correctly and quickly. All data stays on your device",
        fillRequiredFields: "EN Please fill out all required fields",
        madeWithLove: "Made with ❤️ to Vienna in 2024-{year}",
        requiredFieldsNote: "Required fields",

        // Navigation buttons
        back: "Back",
        next: "Next",
        nextButton: "Next",
        submit: "Submit",

        // First card - Personal Information
        personalInfoTitle: "Personal Information",
        personalInfoSubtitle: "Please enter your name exactly as it appears in your passport",
        firstName: "First Name",
        lastName: "Last Name",
        firstNameTooltip: "Your first name as written in your passport, like 'Elon' for Elon Musk",
        lastNameTooltip: "Your last name as written in your passport, like 'Musk' for Elon Musk",
        lastNameBeforeMarriage: "Last Name Before Marriage",
        lastNameBeforeMarriageTooltip: "Your last name before your first marriage, if different from current last name",
        otherName: "Other Name",
        otherNameTooltip: "Any other names you use, like father's name or other legally recognized names",

        // Second card - Birth Details
        birthDetailsTitle: "Birth Details",
        birthDetailsSubtitle: "Please enter your birth information exactly as it appears in your passport",
        dateOfBirth: "Date of Birth",
        dateOfBirthTooltip: "Your date of birth as written in your passport",
        gender: "Gender",
        genderTooltip: "Your gender as registered in official documents",
        genderSelectPrompt: "Please select your gender",
        genderOptions: {
            male: "Male",
            female: "Female",
            diverse: "Diverse",
            inter: "Inter",
            open: "Open",
            noStatement: "No Statement"
        },
        religionOrCommunity: "Religion or Community",
        religionOrCommunityTooltip: "Your religious affiliation or community membership",

        // Third card - Citizenship
        citizenshipTitle: "Citizenship",
        citizenshipSubtitle: "Please enter your citizenship information exactly as it appears in your passport",
        placeOfBirth: "Place of Birth",
        placeOfBirthTooltip: "Your place of birth as written in your passport, including city and country",
        maritalStatus: "Marital Status",
        maritalStatusTooltip: "Your current marital status",
        maritalStatusSelectPrompt: "Select marital status",
        maritalStatusOptions: {
            single: "Single",
            married: "Married",
            divorced: "Divorced",
            widowed: "Widowed",
            registeredPartnership: "Registered Partnership"
        },
        nationality: "Austrian Citizenship",
        nationalityTooltip: "Are you an Austrian citizen?",
        nationalitySelectPrompt: "Citizenship", //STAATSANGEHÖRIGKEIT
        nationalityOptions: {
            yes: "Austrian",
            no: "other country"
        },
        stateName: "Name of State",
        stateNameTooltip: "Please enter the name of your country of citizenship",

        // Foreign Passport Card
        foreignPassportTitle: "Foreign Passport Details",
        foreignPassportSubtitle: "Please enter your passport information exactly as it appears in your passport",
        documentType: "Document Type",
        documentTypeTooltip: "Type of your identification document",
        documentTypeSelectPrompt: "Select document type",
        documentTypeOptions: {
            passport: "Passport",
            idCard: "ID Card"
        },
        documentNumber: "Document Number",
        documentNumberTooltip: "The number of your passport or ID card",
        documentIssueDate: "Issue Date",
        documentIssueDateTooltip: "The date when your document was issued",
        documentIssuingAuthority: "Issuing Authority",
        documentIssuingAuthorityTooltip: "Authority that issued your document, e.g. \"US Department of State\"",

        // Registration Address Card
        registrationAddressTitle: "Registration Address",
        registrationAddressSubtitle: "Please enter your new address in Vienna",
        registrationStreet: "Street",
        registrationStreetTooltip: "Street name of your residence in Vienna",
        registrationHouseNumber: "House Number",
        registrationHouseNumberTooltip: "Building number",
        registrationStaircase: "Staircase",
        registrationStaircaseTooltip: "Staircase number if applicable",
        registrationApartmentNumber: "Door Number",
        registrationApartmentNumberTooltip: "Apartment/Door number if applicable",
        registrationPostalCode: "Postal Code",
        registrationPostalCodeTooltip: "Vienna postal code (4 digits)",
        registrationMunicipality: "Municipality",
        registrationMunicipalityTooltip: "Municipality (Wien)",
        isMainResidence: "Main Residence",
        isMainResidenceTooltip: "Is this your main residence (Hauptwohnsitz)?",
        isMainResidenceSelectPrompt: "Select residence type",
        isMainResidenceOptions: {
            yes: "Yes, this is my main residence",
            no: "No, this is my secondary residence"
        },
        registrationInViennaRequired: "I want to register a new address in Vienna",
        registrationInViennaRequiredTooltip: "Select if you want to register a new address in Vienna",
        registrationInViennaRequiredSelectPrompt: "Select option",
        registrationInViennaSkipMessage: "This step can be skipped because you selected not to register a new address.",
        registrationInViennaRequiredOptions: {
            yes: "Yes",
            no: "No"
        },

        // Previous Residence Card
        previousResidenceTitle: "Main Residence Address",
        previousResidenceSubtitle: "Please enter your main residence address",
        previousResidenceStreet: "Street",
        previousResidenceStreetTooltip: "Street name of your main residence",
        previousResidenceHouseNumber: "House Number",
        previousResidenceHouseNumberTooltip: "Building number",
        previousResidenceStaircase: "Staircase",
        previousResidenceStaircaseTooltip: "Staircase number if applicable",
        previousResidenceApartmentNumber: "Door Number",
        previousResidenceApartmentNumberTooltip: "Apartment/Door number if applicable",
        previousResidencePostalCode: "Postal Code",
        previousResidencePostalCodeTooltip: "Postal code",
        previousResidenceMunicipality: "Municipality",
        previousResidenceMunicipalityTooltip: "Municipality and state/province",
        previousResidenceSkipMessage: "This step can be skipped because you selected this address as your main residence.",

        // Deregistration Card
        deregistrationTitle: "Previous Address",
        deregistrationSubtitle: "Please enter the address you're moving from",
        deregistrationRequired: "I want to deregister from another address",
        deregistrationRequiredTooltip: "Select if you want to deregister from another address",
        deregistrationRequiredSelectPrompt: "Select option",
        deregistrationRequiredOptions: {
            yes: "Yes",
            no: "No"
        },
        deregistrationStreet: "Street",
        deregistrationStreetTooltip: "Street name of your previous residence",
        deregistrationHouseNumber: "House Number",
        deregistrationHouseNumberTooltip: "Building number",
        deregistrationStaircase: "Staircase",
        deregistrationStaircaseTooltip: "Staircase number if applicable",
        deregistrationApartmentNumber: "Door Number",
        deregistrationApartmentNumberTooltip: "Apartment/Door number if applicable",
        deregistrationPostalCode: "Postal Code",
        deregistrationPostalCodeTooltip: "Postal code",
        deregistrationMunicipality: "Municipality",
        deregistrationMunicipalityTooltip: "Municipality and state/province",
        movedFromAbroad: "Moving from Abroad",
        movedFromAbroadTooltip: "Are you moving from abroad?",
        movedFromAbroadSelectPrompt: "Select option",
        previousCountry: "Previous Country",
        previousCountryTooltip: "If moving from abroad, enter your previous country",
        movingAbroad: "Moving Abroad",
        movingAbroadTooltip: "Are you moving abroad?",
        movingAbroadSelectPrompt: "Select option",
        movingAbroadOptions: {
            yes: "Yes",
            no: "No"
        },
        destinationCountry: "Destination Country",
        destinationCountryTooltip: "If moving abroad, enter your destination country",

        // Final Card
        finalTitle: "Landlord Information",
        finalSubtitle: "Please enter your landlord's details",
        landlordName: "Landlord Name",
        landlordNameTooltip: "Full name of your landlord or property manager",
        thankYou: "Thank You!",
        formGeneratedSuccess: "Your Meldezettel form has been generated successfully.",
        nextStepsTitle: "Next Steps:",
        nextSteps: {
            print: "Print the downloaded form",
            signature: "Get your landlord's signature",
            submit: "Submit the form at your local registration office"
        },
        startOver: "Start Over"
    },

    // --------------------------------------------------------------- //
    //                     German (de)                                 //
    // --------------------------------------------------------------- //
    de: {
        // Language selector card
        welcome: "Willkommen bei Supermelde",
        selectLanguage: "Bitte wählen Sie Ihre bevorzugte Sprache",
        startButton: "Starten",
        english: "Englisch",
        german: "Deutsch",
        siteExplanation: "Füllen Sie das Meldezettel-Formular korrekt und schnell aus. Alle Daten bleiben auf Ihrem Gerät",
        fillRequiredFields: "Bitte füllen Sie alle erforderlichen Felder aus",
        madeWithLove: "Mit ❤️ für Wien gemacht in 2024-{year}",
        requiredFieldsNote: "Pflichtfelder",

        // Navigation buttons
        back: "Zurück",
        next: "Weiter",
        nextButton: "Weiter",
        submit: "Absenden",

        // First card - Personal Information
        personalInfoTitle: "Persönliche Informationen",
        personalInfoSubtitle: "Bitte geben Sie Ihren Namen genau wie im Reisepass ein",
        firstName: "Vorname",
        lastName: "Nachname",
        firstNameTooltip: "Ihr Vorname wie im Reisepass geschrieben, z.B. 'Elon' für Elon Musk",
        lastNameTooltip: "Ihr Nachname wie im Reisepass geschrieben, z.B. 'Musk' für Elon Musk",
        lastNameBeforeMarriage: "Familienname vor der Eheschließung",
        lastNameBeforeMarriageTooltip: "Ihr Familienname vor Ihrer ersten Eheschließung, falls abweichend vom aktuellen Nachnamen",
        otherName: "Sonstiger Name",
        otherNameTooltip: "Andere Namen, die Sie verwenden, z.B. Vatersname oder andere rechtlich anerkannte Namen",

        // Second card - Birth Details
        birthDetailsTitle: "Geburtsdaten",
        birthDetailsSubtitle: "Bitte geben Sie Ihre Geburtsinformationen genau wie im Reisepass ein",
        dateOfBirth: "Geburtsdatum",
        dateOfBirthTooltip: "Ihr Geburtsdatum wie im Reisepass angegeben",
        gender: "Geschlecht",
        genderTooltip: "Ihr Geschlecht wie in offiziellen Dokumenten registriert",
        genderSelectPrompt: "Bitte wählen Sie Ihr Geschlecht",
        genderOptions: {
            male: "Männlich",
            female: "Weiblich",
            diverse: "Divers",
            inter: "Inter",
            open: "Offen",
            noStatement: "Keine Angabe"
        },
        religionOrCommunity: "Religion oder Gemeinschaft",
        religionOrCommunityTooltip: "Ihre Religionszugehörigkeit oder Gemeinschaftsmitgliedschaft",

        // Third card - Citizenship
        citizenshipTitle: "Staatsbürgerschaft",
        citizenshipSubtitle: "Bitte geben Sie Ihre Staatsbürgerschaftsinformationen genau wie im Reisepass ein",
        placeOfBirth: "Geburtsort",
        placeOfBirthTooltip: "Ihr Geburtsort wie im Reisepass angegeben, einschließlich Stadt und Land",
        maritalStatus: "Familienstand",
        maritalStatusTooltip: "Ihr aktueller Familienstand",
        maritalStatusSelectPrompt: "Familienstand auswählen",
        maritalStatusOptions: {
            single: "Ledig",
            married: "Verheiratet",
            divorced: "Geschieden",
            widowed: "Verwitwet",
            registeredPartnership: "Eingetragene Partnerschaft"
        },
        nationality: "Österreichische Staatsbürgerschaft",
        nationalityTooltip: "Sind Sie österreichischer Staatsbürger?",
        nationalitySelectPrompt: "Staatsangehörigkeit", //STAATSANGEHÖRIGKEIT
        nationalityOptions: {
            yes: "Österreich",
            no: "anderer Staat"
        },
        stateName: "Name des Staates",
        stateNameTooltip: "Bitte geben Sie den Namen Ihres Herkunftslandes ein",

        // Foreign Passport Card
        foreignPassportTitle: "Ausweisdokument Details",
        foreignPassportSubtitle: "Bitte geben Sie Ihre Passinformationen genau wie im Pass ein",
        documentType: "Dokumententyp",
        documentTypeTooltip: "Art Ihres Ausweisdokuments",
        documentTypeSelectPrompt: "Dokumententyp auswählen",
        documentTypeOptions: {
            passport: "Reisepass",
            idCard: "Personalausweis"
        },
        documentNumber: "Dokumentennummer",
        documentNumberTooltip: "Die Nummer Ihres Passes oder Personalausweises",
        documentIssueDate: "Ausstellungsdatum",
        documentIssueDateTooltip: "Das Datum, an dem Ihr Dokument ausgestellt wurde",
        documentIssuingAuthority: "Ausstellende Behörde",
        documentIssuingAuthorityTooltip: "Behörde, die Ihr Dokument ausgestellt hat, z.B. \"US Department of State\"",

        // Registration Address Card
        registrationAddressTitle: "Meldeadresse",
        registrationAddressSubtitle: "Bitte geben Sie Ihre neue Adresse in Wien ein",
        registrationStreet: "Straße",
        registrationStreetTooltip: "Straßenname Ihrer Wohnung in Wien",
        registrationHouseNumber: "Hausnummer",
        registrationHouseNumberTooltip: "Gebäudenummer",
        registrationStaircase: "Stiege",
        registrationStaircaseTooltip: "Stiegennummer falls zutreffend",
        registrationApartmentNumber: "Türnummer",
        registrationApartmentNumberTooltip: "Wohnungs-/Türnummer falls zutreffend",
        registrationPostalCode: "Postleitzahl",
        registrationPostalCodeTooltip: "Wiener Postleitzahl (4 Ziffern)",
        registrationMunicipality: "Gemeinde",
        registrationMunicipalityTooltip: "Gemeinde (Wien)",
        isMainResidence: "Hauptwohnsitz",
        isMainResidenceTooltip: "Ist dies Ihr Hauptwohnsitz?",
        isMainResidenceSelectPrompt: "Wohnsitzart auswählen",
        isMainResidenceOptions: {
            yes: "Ja, dies ist mein Hauptwohnsitz",
            no: "Nein, dies ist mein Nebenwohnsitz"
        },
        registrationInViennaRequired: "Ich möchte eine neue Adresse in Wien anmelden",
        registrationInViennaRequiredTooltip: "Wählen Sie aus, ob Sie eine neue Adresse in Wien anmelden möchten",
        registrationInViennaRequiredSelectPrompt: "Option wählen",
        registrationInViennaSkipMessage: "Dieser Schritt kann übersprungen werden, da Sie keine neue Adresse anmelden möchten.",
        registrationInViennaRequiredOptions: {
            yes: "Ja",
            no: "Nein"
        },


        // Previous Residence Card
        previousResidenceTitle: "Hauptwohnsitz Adresse",
        previousResidenceSubtitle: "Bitte geben Sie Ihre Hauptwohnsitz-Adresse ein",
        previousResidenceStreet: "Straße",
        previousResidenceStreetTooltip: "Straßenname Ihres Hauptwohnsitzes",
        previousResidenceHouseNumber: "Hausnummer",
        previousResidenceHouseNumberTooltip: "Gebäudenummer",
        previousResidenceStaircase: "Stiege",
        previousResidenceStaircaseTooltip: "Stiegennummer falls zutreffend",
        previousResidenceApartmentNumber: "Türnummer",
        previousResidenceApartmentNumberTooltip: "Wohnungs-/Türnummer falls zutreffend",
        previousResidencePostalCode: "Postleitzahl",
        previousResidencePostalCodeTooltip: "Postleitzahl",
        previousResidenceMunicipality: "Gemeinde",
        previousResidenceMunicipalityTooltip: "Gemeinde und Bundesland",
        previousResidenceSkipMessage: "Dieser Schritt kann übersprungen werden, da Sie diese Adresse als Hauptwohnsitz ausgewählt haben.",

        // Deregistration Card
        deregistrationTitle: "Bisherige Adresse",
        deregistrationSubtitle: "Bitte geben Sie die Adresse ein, von der Sie wegziehen",
        deregistrationRequired: "Ich möchte mich von einer anderen Adresse abmelden",
        deregistrationRequiredTooltip: "Wählen Sie aus, ob Sie sich von einer anderen Adresse abmelden möchten",
        deregistrationRequiredSelectPrompt: "Option wählen",
        deregistrationRequiredOptions: {
            yes: "Ja",
            no: "Nein"
        },
        deregistrationStreet: "Straße",
        deregistrationStreetTooltip: "Straßenname Ihrer bisherigen Wohnung",
        deregistrationHouseNumber: "Hausnummer",
        deregistrationHouseNumberTooltip: "Gebäudenummer",
        deregistrationStaircase: "Stiege",
        deregistrationStaircaseTooltip: "Stiegennummer falls zutreffend",
        deregistrationApartmentNumber: "Türnummer",
        deregistrationApartmentNumberTooltip: "Wohnungs-/Türnummer falls zutreffend",
        deregistrationPostalCode: "Postleitzahl",
        deregistrationPostalCodeTooltip: "Postleitzahl",
        deregistrationMunicipality: "Gemeinde",
        deregistrationMunicipalityTooltip: "Gemeinde und Bundesland",
        movedFromAbroad: "Zuzug aus dem Ausland",
        movedFromAbroadTooltip: "Kommen Sie aus dem Ausland?",
        movedFromAbroadSelectPrompt: "Option wählen",
        previousCountry: "Bisheriges Land",
        previousCountryTooltip: "Bei Zuzug aus dem Ausland, geben Sie Ihr bisheriges Land ein",
        movingAbroad: "Wegzug ins Ausland",
        movingAbroadTooltip: "Ziehen Sie ins Ausland?",
        movingAbroadSelectPrompt: "Option wählen",
        movingAbroadOptions: {
            yes: "Ja",
            no: "Nein"
        },
        destinationCountry: "Zielland",
        destinationCountryTooltip: "Bei Wegzug ins Ausland, geben Sie Ihr Zielland ein",

        // Final Card
        finalTitle: "Vermieter Information",
        finalSubtitle: "Bitte geben Sie die Daten Ihres Vermieters ein",
        landlordName: "Name des Vermieters",
        landlordNameTooltip: "Vollständiger Name Ihres Vermieters oder Hausverwalters",
        thankYou: "Vielen Dank!",
        formGeneratedSuccess: "Ihr Meldezettel wurde erfolgreich erstellt.",
        nextStepsTitle: "Nächste Schritte:",
        nextSteps: {
            print: "Drucken Sie das heruntergeladene Formular aus",
            signature: "Holen Sie sich die Unterschrift Ihres Vermieters",
            submit: "Reichen Sie das Formular bei Ihrem zuständigen Meldeamt ein"
        },
        startOver: "Neu starten"
    }    
}; 