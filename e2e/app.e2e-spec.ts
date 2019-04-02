import { LearningPlatformPage } from './app.po';

describe('learning-platform App', () => {
  let page: LearningPlatformPage;

  beforeEach(() => {
    page = new LearningPlatformPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
