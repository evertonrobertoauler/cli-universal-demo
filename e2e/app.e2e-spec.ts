import { CliUniversalDemoPage } from './app.po';

describe('cli-universal-demo App', () => {
  let page: CliUniversalDemoPage;

  beforeEach(() => {
    page = new CliUniversalDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
