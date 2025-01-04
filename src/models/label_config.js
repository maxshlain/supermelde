class LabelConfig {
    constructor() {
        this.labelConfig = new Map();
        this.loadConfig();
    }

    async loadConfig() {
        try {
            const response = await fetch('/src/config/labels.json');
            const data = await response.json();
            this.labelConfig = new Map(Object.entries(data));
        } catch (error) {
            console.error('Error loading label configuration:', error);
        }
    }

    getLabel(fieldId) {
        return this.labelConfig.get(fieldId);
    }

    forEach(callback) {
        this.labelConfig.forEach(callback);
    }
}
