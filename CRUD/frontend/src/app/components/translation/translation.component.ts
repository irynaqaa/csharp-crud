package app.components.translation;

import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'path/to/translation.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  sendButtonTranslation: string;
  nameFieldTranslation: string;

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    this.translationService.displayTranslatedContent().subscribe((translations: any) => {
      this.sendButtonTranslation = translations.sendButton;
      this.nameFieldTranslation = translations.nameField;
    });
  }

  onTranslationUpdate(): void {
    this.translationService.handleTranslationUpdates().subscribe((translations: any) => {
      this.sendButtonTranslation = translations.sendButton;
      this.nameFieldTranslation = translations.nameField;
    });
  }
}