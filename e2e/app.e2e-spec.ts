import { HarpExpressPage } from './app.po';

describe('harp-express App', () => {
  let page: HarpExpressPage;

  beforeEach(() => {
    page = new HarpExpressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
