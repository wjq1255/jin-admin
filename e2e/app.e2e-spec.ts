import { JinAdminPage } from './app.po';

describe('jin-admin App', function() {
  let page: JinAdminPage;

  beforeEach(() => {
    page = new JinAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
