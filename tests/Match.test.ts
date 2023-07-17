import { Match } from '../src/Match';

describe('Match', () => {
  test('should have initial score 0 - 0', () => {
    const match = new Match('Mexico', 'Canada', 1);
    expect(match.getSummary()).toBe('Mexico 0 - 0 Canada');
  });

  test('should update the score correctly', () => {
    const match = new Match('Mexico', 'Canada', 1);
    match.updateScore(2, 1);
    expect(match.getSummary()).toBe('Mexico 2 - 1 Canada');
  });
});