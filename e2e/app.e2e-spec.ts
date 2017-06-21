import { AngularbundlesPage } from './app.po';

describe('angularbundles App', () => {
  let page: AngularbundlesPage;

  beforeEach(() => {
    page = new AngularbundlesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
