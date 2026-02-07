import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { TranslateService } from './services/translate.service';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';


@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    CardModule,
    DialogModule,
    MenubarModule,
    TextareaModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  sizeImg: string = 'w500';
  displayModal: boolean = false;
  title = 'translator-dark-mode';
  items: any = [
    {
      label: 'Translator Dark Mode',
      src: 'google.png',
      icon: 'pi pi-home',
      url: '#home'
    }
  ];
  translate: {
    language: string,
    content: string
  } = {
      language: '',
      content: '',
    }

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    console.log('probando-1');
  }


  public getTranslate(translate: any) {
    this.translate = translate;
    this.displayModal = true;
  }






}
