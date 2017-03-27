import { browser, element, by } from 'protractor';

export class CliUniversalDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root app-home-page p')).getText();
  }
}
