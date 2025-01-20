class FormMapper {
    constructor() {
      this.fieldMap = {
        lastName: "Familienname (in Blockschrift), Akad. Grad (abgekürzt)", // Familienname
        firstName: "Vorname lt. Geburtsurkunde (bei Fremden laut Reisedokument)", // Vorname
        lastNameBeforeMarriage: "Familienname vor der ersten Eheschließung/Eingetragenen Partnerschaft", // Familienname vor der ersten Eheschließung
        otherName: "Sonstiger Name nach fremdem Namensrecht z.B. Vatersname siehe auch Rückseite", // Sonstiger Name
        dateOfBirth: "Geburtsdatum", // Geburtsdatum
        gender: "Geschlecht", // Geschlecht
        religionOrCommunity: "Gesetzlich anerkannte Kirche oder Religionsgesellschaft/Bekenntnisgemeinschaft", // Kirche oder Religionsgemeinschaft
        placeOfBirth: "Geburtsort lt. Reisedokument (bei österr. Staatsbürgern auch lt. Geburtsurkunde); Bundesland (Inland) und Staat (Ausland)", // Geburtsort
        maritalStatus: "Familienstand", // Familienstand
        nationality: "Staatsangehörigkeit", // Staatsangehörigkeit
        nameOfState: "Name des Staates", // Name des Staates
        documentType: "Reisedokument bei Fremden / Art des Dokuments", // Reisedokument Art
        documentNumber: "Reisedokument bei Fremden / Nummer", // Reisedokument Nummer
        documentIssueDate: "Reisedokument bei Fremden / Ausstellungsdatum", // Reisedokument Ausstellungsdatum
        documentIssuingAuthority: "Reisedokument bei Fremden / ausstellende Behörde, Staat", // Reisedokument ausstellende Behörde
        registrationStreet: "Anmeldung der Unterkunft in Straße (Platz) bzw. Ort ohne Straßennamen", // Anmeldung der Unterkunft Straße
        registrationHouseNumber: "Anmeldung der Unterkunft in Haus Nr", // Anmeldung der Unterkunft Haus Nr
        registrationStaircase: "Anmeldung der Unterkunft in Stiege", // Anmeldung der Unterkunft Stiege
        registrationApartmentNumber: "Anmeldung der Unterkunft in Tür Nr", // Anmeldung der Unterkunft Tür Nr
        registrationPostalCode: "Annmeldung der Unterkunft in Postleitzahl", // Anmeldung der Unterkunft PLZ
        registrationMunicipality: "Anmeldung der Unterkunft in Ortsgemeinde, Bundesland", // Anmeldung der Unterkunft Ortsgemeinde
        isMainResidence: "Ist diese Unterkunft Hauptwohnsitz", // Hauptwohnsitz
        previousResidenceStreet: "wenn nein, Hauptwohnsitz bleibt in Straße (Platz) bzw. Ort ohne Straßennamen", // Hauptwohnsitz bleibt Straße
        previousResidenceHouseNumber: "wenn nein, Hauptwohnsitz bleibt in Haus Nr", // Hauptwohnsitz bleibt Haus Nr
        previousResidenceStaircase: "wenn nein, Hauptwohnsitz bleibt in Stiege", // Hauptwohnsitz bleibt Stiege
        previousResidenceApartmentNumber: "wenn nein, Hauptwohnsitz bleibt in Tür Nr", // Hauptwohnsitz bleibt Tür Nr
        previousResidencePostalCode: "wenn nein, Hauptwohnsitz bleibt in Postleitzahl", // Hauptwohnsitz bleibt PLZ
        previousResidenceMunicipality: "wenn nein, Hauptwohnsitz bleibt in Ortsgemeinde, Bundesland", // Hauptwohnsitz bleibt Ortsgemeinde
        movedFromAbroad: "Zuzug aus dem Ausland", // Zuzug aus dem Ausland
        previousCountry: "Name des Staates bei Zuzug", // Name des Staates bei Zuzug
        deregistrationStreet: "Abmeldung der Unterkunft in Straße (Platz) bzw. Ort ohne Straßennamen", // Abmeldung Straße
        deregistrationHouseNumber: "Abmeldung der Unterkunft in Haus Nr", // Abmeldung Haus Nr
        deregistrationStaircase: "Abmeldung der Unterkunft Stiege", // Abmeldung Stiege
        deregistrationApartmentNumber: "Abmeldung der Unterkunft in Tür Nr", // Abmeldung Tür Nr
        deregistrationPostalCode: "Abmeldung der Unterkunft in Postleitzahl", // Abmeldung PLZ
        deregistrationMunicipality: "Abmeldung der Unterkunft in Ortsgemeinde, Bundesland", // Abmeldung Ortsgemeinde
        movedAbroad: "Sie verziehen ins Ausland", // Verzug ins Ausland
        futureCountry: "Name des Staates bei Abmeldung", // Name des Staates bei Abmeldung
        landlordName: "Im Falle einer Anmeldung: Unterkunftgeber (Name in Blockschrift, Datum und Unterschrift)", // Unterkunftgeber Name
        landlordDate: "Im Falle einer Anmeldung: Unterkunftgeber (Name in Blockschrift, Datum und Unterschrift)", // Unterkunftgeber Datum
        declarantDate: "Datum des Meldepflichtigen", // Datum des Meldepflichtigen
        declarantSignature: "Unterschrift des Meldepflichtigen", // Unterschrift des Meldepflichtigen
      };
    }
  
    getFieldMap() {
      return this.fieldMap;
    }
  
    getPdfField(dtoFieldName) {
      return this.fieldMap[dtoFieldName] || null;
    }
  }
