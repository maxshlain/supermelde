document.addEventListener('DOMContentLoaded', () => {
    const app = {
        currentStep: 1,
        totalSteps: 3,
        selectedLanguage: null,

        translations: {
            en: {
                next: 'Next',
                previous: 'Previous',
                generate: 'Generate PDF'
            },
            de: {
                next: 'Weiter',
                previous: 'Zurück',
                generate: 'PDF erstellen'
            },
            es: {
                next: 'Siguiente',
                previous: 'Anterior',
                generate: 'Generar PDF'
            }
        },

        init() {
            this.attachEventListeners();
            this.setupTooltips();
        },

        attachEventListeners() {
            // Language selection
            document.querySelectorAll('.flag-button').forEach(button => {
                button.addEventListener('click', (e) => {
                    this.selectedLanguage = e.currentTarget.dataset.language;
                    this.startForm();
                });
            });

            // Navigation buttons
            document.getElementById('prevBtn').addEventListener('click', () => this.navigate(-1));
            document.getElementById('nextBtn').addEventListener('click', () => this.navigate(1));

            // Form submission
            document.getElementById('meldezettelForm').addEventListener('submit', (e) => {
                e.preventDefault();
                this.generatePDF();
            });
        },

        setupTooltips() {
            document.querySelectorAll('.help-icon').forEach(icon => {
                icon.addEventListener('mouseenter', (e) => {
                    const tooltip = document.createElement('div');
                    tooltip.className = 'tooltip';
                    tooltip.textContent = e.target.dataset.tooltip;
                    document.body.appendChild(tooltip);

                    const rect = e.target.getBoundingClientRect();
                    tooltip.style.top = rect.bottom + 5 + 'px';
                    tooltip.style.left = rect.left + 'px';
                    tooltip.style.display = 'block';
                });

                icon.addEventListener('mouseleave', () => {
                    const tooltip = document.querySelector('.tooltip');
                    if (tooltip) {
                        tooltip.remove();
                    }
                });
            });
        },

        startForm() {
            document.getElementById('languageSelector').style.display = 'none';
            document.getElementById('formContainer').style.display = 'block';
            this.updateProgress();
        },

        navigate(direction) {
            const newStep = this.currentStep + direction;
            if (newStep < 1 || newStep > this.totalSteps) return;

            document.querySelector(`.form-step[data-step="${this.currentStep}"]`).classList.remove('active');
            document.querySelector(`.form-step[data-step="${newStep}"]`).classList.add('active');

            this.currentStep = newStep;
            this.updateNavButtons();
            this.updateProgress();

            // submit form if it's the last step
            if (this.currentStep === this.totalSteps) {
                alert('Sending subtmit');
                // document.getElementById('meldezettelForm').submit();
                this.generatePDF();
            }
        },

        updateNavButtons() {
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            prevBtn.disabled = this.currentStep === 1;
            nextBtn.textContent = this.currentStep === this.totalSteps ? 
                this.translations[this.selectedLanguage].generate : 
                this.translations[this.selectedLanguage].next;
        },

        updateProgress() {
            const progress = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
            document.getElementById('progressBar').style.width = progress + '%';
        },

        async generatePDF() {
            alert('Generating PDF...');
        },
        
        async generatePDF2() {
            alert('Generating PDF...');
            const formData = new FormData(document.getElementById('meldezettelForm'));
            debugger;
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('meldezettel_orig.pdf');
                const pdfBytes = await response.arrayBuffer();
                const pdfDoc = await PDFLib.PDFDocument.load(pdfBytes);
                const form = pdfDoc.getForm();

                // Fill form fields
                form.getTextField('Familienname').setText(data.familyName.toUpperCase());
                form.getTextField('Vorname').setText(data.firstName);
                // Add more fields as needed

                const filledPdfBytes = await pdfDoc.save();
                const blob = new Blob([filledPdfBytes], { type: 'application/pdf' });
                const url = URL.createObjectURL(blob);
                
                const link = document.createElement('a');
                link.href = url;
                link.download = 'filled_meldezettel.pdf';
                link.click();
                
                URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Error generating PDF:', error);
                alert('Error generating PDF. Please try again.');
            }
        }
    };

    app.init();
}); 