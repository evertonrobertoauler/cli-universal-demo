import { CliUniversalDemoPage } from './app.po';

describe('cli-universal-demo App', () => {
  let page: CliUniversalDemoPage;

  beforeEach(() => {
    page = new CliUniversalDemoPage();
  });

  it('should display message saying home-page works!', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(<any>'home-page works!');
  });
});
