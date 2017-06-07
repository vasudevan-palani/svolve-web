import { SvolveWebPage } from './app.po';

describe('svolve-web App', () => {
  let page: SvolveWebPage;

  beforeEach(() => {
    page = new SvolveWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
