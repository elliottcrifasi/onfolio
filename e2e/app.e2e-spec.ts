import { OnfolioPage } from './app.po';

describe('onfolio App', function() {
  let page: OnfolioPage;

  beforeEach(() => {
    page = new OnfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
