```typescript
import { SendButtonTranslationService } from '../services/sendButtonTranslationService';

export class SendButtonTranslationComponent {
    constructor(private translationService: SendButtonTranslationService) {}

    translateSendButtonToFrench(): string {
        return this.translationService.translate('sendButton', 'fr');
    }

    translateNameFieldToFrench(): string {
        return this.translationService.translate('nameField', 'fr');
    }
}
```