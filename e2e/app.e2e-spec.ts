import { ComponenteDansPage } from './app.po';

describe('componente-dans App', function() {
  let page: ComponenteDansPage;

  beforeEach(() => {
    page = new ComponenteDansPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
