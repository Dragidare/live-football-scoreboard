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

  test("should handle score update with invalid input", () => {
    const match = new Match("Mexico", "Canada", 1);
    match.updateScore("invalid" as any, 5);
    expect(match.getHomeScore()).toBe(0);
    expect(match.getAwayScore()).toBe(0);
  });
  
  test("should handle negative score update", () => {
    const match = new Match("Mexico", "Canada", 1);
    match.updateScore(-1, -2);
    expect(match.getHomeScore()).toBe(0);
    expect(match.getAwayScore()).toBe(0);
  });
  
  test("should handle decreasing goals for a team", () => {
    const match = new Match("Mexico", "Canada", 1);
    match.updateScore(2, 1);
    match.updateScore(1, 0); // Decrease Mexico's goals
    expect(match.getHomeScore()).toBe(1);
    expect(match.getAwayScore()).toBe(0);
  });
  
  test("should handle updating the score of only one team", () => {
    const match = new Match("Mexico", "Canada", 1);
    match.updateScore(3, 0); // Mexico wins the match
    expect(match.getHomeScore()).toBe(3);
    expect(match.getAwayScore()).toBe(0);
  
    match.updateScore(0, 0); // Score update for only one team
    expect(match.getHomeScore()).toBe(0);
    expect(match.getAwayScore()).toBe(0);
  });
  
});