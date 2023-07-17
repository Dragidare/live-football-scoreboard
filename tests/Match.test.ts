import { Match } from '../src/Match';

describe('Match', () => {
  let match: Match;

  beforeEach(() => {
    match = new Match('Mexico', 'Canada');
  });

  test('should have initial score 0 - 0', () => {
    expect(match.getScore()).toBe('Mexico 0 - 0 Canada');
  });

  test('should update the score correctly', () => {
    match.updateScore(2, 1);
    expect(match.getScore()).toBe('Mexico 2 - 1 Canada');
  });
});
