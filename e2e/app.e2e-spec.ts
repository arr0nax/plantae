import { PlantaePage } from './app.po';

describe('plantae App', function() {
  let page: PlantaePage;

  beforeEach(() => {
    page = new PlantaePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
