import { 
  gameConsoleOutput, 
  prepareGameConsoleLog, 
  resetOriginalConsoleLog 
} from './utils';

describe('gilded rose approval', () => {
  beforeEach(() => {
    prepareGameConsoleLog();
  });

  afterEach(() => {
    resetOriginalConsoleLog();
  });

  it('should thirtyDays', () => {
    process.argv = ["<node>", "<script", "30"];
    require('./golden-master-text-test.ts');
       
    expect(gameConsoleOutput).toMatchSnapshot();
  });
})

