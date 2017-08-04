import { ProjectPipesPage } from './app.po';

describe('project-pipes App', () => {
  let page: ProjectPipesPage;

  beforeEach(() => {
    page = new ProjectPipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
