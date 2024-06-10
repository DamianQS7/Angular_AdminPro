import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkRef: Element | null = document.querySelector('#theme');

  constructor() {
    this.setTheme();
   }

  public setTheme(): void {
    const defaultTheme: string = './assets/css/colors/purple-dark.css';
    const theme: string = localStorage.getItem('theme') || defaultTheme;

    this.linkRef?.setAttribute('href', theme);
  }

  public changeTheme(theme: string): void {

    const url: string = `./assets/css/colors/${theme}.css`;
    
    this.linkRef?.setAttribute('href', url);

    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  public checkCurrentTheme(): void {
    
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');
    
    links.forEach(element => {
      element.classList.remove('working');

      const btnTheme: string | null = element.getAttribute('data-theme');
      const btnThemeUrl: string = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkRef?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        element.classList.add('working');
      }
    });
  }
}
