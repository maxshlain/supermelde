class FormData {
    constructor({
        // Familienname
        lastName = "",
        // Vorname
        firstName = "",
        // Familienname vor der ersten Eheschließung/Eingetragenen Partnerschaft
        lastNameBeforeMarriage = "",
        // Sonstiger Name
        otherName = "",
        // Geburtsdatum
        dateOfBirth = "",
        // Geschlecht
        gender = "",
        // Gesetzlich anerkannte Kirche oder Religionsgesellschaft/Bekenntnisgemeinschaft
        religionOrCommunity = "",
        // Geburtsort
        placeOfBirth = "",
        // Familienstand
        maritalStatus = "",
        // Staatsangehörigkeit
        nationality = "",
        // Reisedokument Art
        documentType = "",
        // Reisedokument Nummer
        documentNumber = "",
        // Reisedokument Ausstellungsdatum
        documentIssueDate = "",
        // Reisedokument ausstellende Behörde
        documentIssuingAuthority = "",
        // Anmeldung der Unterkunft in Straße (Platz)
        registrationStreet = "",
        // Anmeldung der Unterkunft in Haus Nr.
        registrationHouseNumber = "",
        // Anmeldung der Unterkunft in Stiege
        registrationStaircase = "",
        // Anmeldung der Unterkunft in Tür Nr.
        registrationApartmentNumber = "",
        // Anmeldung der Unterkunft in Postleitzahl
        registrationPostalCode = "",
        // Anmeldung der Unterkunft in Ortsgemeinde, Bundesland
        registrationMunicipality = "",
        // Ist diese Unterkunft Hauptwohnsitz
        isMainResidence = "",
        // Hauptwohnsitz bleibt in Straße (Platz)
        previousResidenceStreet = "",
        // Hauptwohnsitz bleibt in Haus Nr.
        previousResidenceHouseNumber = "",
        // Hauptwohnsitz bleibt in Stiege
        previousResidenceStaircase = "",
        // Hauptwohnsitz bleibt in Tür Nr.
        previousResidenceApartmentNumber = "",
        // Hauptwohnsitz bleibt in Postleitzahl
        previousResidencePostalCode = "",
        // Hauptwohnsitz bleibt in Ortsgemeinde, Bundesland
        previousResidenceMunicipality = "",
        // Zuzug aus dem Ausland
        movedFromAbroad = "",
        // Name des Staates bei Zuzug
        previousCountry = "",
        // Abmeldung der Unterkunft in Straße (Platz)
        deregistrationStreet = "",
        // Abmeldung der Unterkunft in Haus Nr.
        deregistrationHouseNumber = "",
        // Abmeldung der Unterkunft in Stiege
        deregistrationStaircase = "",
        // Abmeldung der Unterkunft in Tür Nr.
        deregistrationApartmentNumber = "",
        // Abmeldung der Unterkunft in Postleitzahl
        deregistrationPostalCode = "",
        // Abmeldung der Unterkunft in Ortsgemeinde, Bundesland
        deregistrationMunicipality = "",
        // Sie verziehen ins Ausland
        movedAbroad = "",
        // Name des Staates bei Abmeldung
        futureCountry = "",
        // Unterkunftgeber Name
        landlordName = "",
        // Unterkunftgeber Datum
        landlordDate = "",
        // Datum des Meldepflichtigen
        declarantDate = "",
        // Unterschrift des Meldepflichtigen
        declarantSignature = "",
    } = {}) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastNameBeforeMarriage = lastNameBeforeMarriage;
        this.otherName = otherName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.religionOrCommunity = religionOrCommunity;
        this.placeOfBirth = placeOfBirth;
        this.maritalStatus = maritalStatus;
        this.nationality = nationality;
        this.documentType = documentType;
        this.documentNumber = documentNumber;
        this.documentIssueDate = documentIssueDate;
        this.documentIssuingAuthority = documentIssuingAuthority;
        this.registrationStreet = registrationStreet;
        this.registrationHouseNumber = registrationHouseNumber;
        this.registrationStaircase = registrationStaircase;
        this.registrationApartmentNumber = registrationApartmentNumber;
        this.registrationPostalCode = registrationPostalCode;
        this.registrationMunicipality = registrationMunicipality;
        this.isMainResidence = isMainResidence;
        this.previousResidenceStreet = previousResidenceStreet;
        this.previousResidenceHouseNumber = previousResidenceHouseNumber;
        this.previousResidenceStaircase = previousResidenceStaircase;
        this.previousResidenceApartmentNumber = previousResidenceApartmentNumber;
        this.previousResidencePostalCode = previousResidencePostalCode;
        this.previousResidenceMunicipality = previousResidenceMunicipality;
        this.movedFromAbroad = movedFromAbroad;
        this.previousCountry = previousCountry;
        this.deregistrationStreet = deregistrationStreet;
        this.deregistrationHouseNumber = deregistrationHouseNumber;
        this.deregistrationStaircase = deregistrationStaircase;
        this.deregistrationApartmentNumber = deregistrationApartmentNumber;
        this.deregistrationPostalCode = deregistrationPostalCode;
        this.deregistrationMunicipality = deregistrationMunicipality;
        this.movedAbroad = movedAbroad;
        this.futureCountry = futureCountry;
        this.landlordName = landlordName;
        this.landlordDate = landlordDate;
        this.declarantDate = declarantDate;
        this.declarantSignature = declarantSignature;
    }
}
