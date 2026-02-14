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
    input: string,
    output: string
  } = {
      input: '',
      output: '',
    }

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translate.input = '';
    this.translate.output = '';
  }

  async getTranslate() {
    this.translate.output = '';
    this.translateService.translate(this.translate.input, 'es', 'en').subscribe(
      (response) => {
        const tranlation = response[0][0][0] ?? '';
        this.translate.output = tranlation;
      }
    );
  }

}
