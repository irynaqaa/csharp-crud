package app.modules.gwtjee;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gwtjee',
  templateUrl: './gwtjee.component.html',
  styleUrls: ['./gwtjee.component.css']
})
export class GwtJeeComponent implements OnInit {

  sendButton: string;
  nameField: string;

  ngOnInit(): void {
    this.sendButton = 'Translate this text for sendButton';
    this.nameField = 'Translate this text for nameField';
  }

}