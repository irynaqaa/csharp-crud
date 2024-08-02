package services;

class SendButtonTranslationService {
    getFrenchTranslation(element: string) {
        // implementation for French translation retrieval
    }

    displayTranslation(translation: string) {
        // implementation for displaying translation in UI
    }

    translateSendButton() {
        const sendButtonTranslation = this.getFrenchTranslation('sendButton');
        this.displayTranslation(sendButtonTranslation);
    }

    translateNameField() {
        const nameFieldTranslation = this.getFrenchTranslation('nameField');
        this.displayTranslation(nameFieldTranslation);
    }

    translateSendButton();
    translateNameField();
}