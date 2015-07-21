import homePage from '../pages/HomePage';


describe('HomePage', () => {

  beforeAll(() => {
    homePage.loadPage();
  });

  it('shows the latest JavaScript Book', () => {
    // Basically a bad test, as the title can change over time - but shows the concept
    expect(homePage.latestBookTitle.getText()).toEqual('JavaScript objektorientiert');
  });

  it('displays a book description', () => {
    // better, as we only test on existence now
    expect(homePage.latestBookDescription.isPresent()).toBe(true);
  })

});
