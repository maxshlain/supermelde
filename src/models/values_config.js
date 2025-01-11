class ValuesConfig {
    constructor() {
        this.ValuesConfig = new Map();
        this.loadConfig();
    }
    
    async loadConfig() {
        try {
            const response = await fetch('src/config/values.json');
            const data = await response.json();
            this.ValuesConfig = new Map(Object.entries(data));
        } catch (error) {
            console.error('Error loading values configuration:', error);
        }
    }

    getValue(fieldId) {
        return this.ValuesConfig.get(fieldId);
    }

    forEach(callback) {
        this.ValuesConfig.forEach(callback);
    }
}