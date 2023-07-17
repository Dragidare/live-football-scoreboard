import { Scoreboard } from "../src/Scoreboard";

describe("Scoreboard", () => {
  let scoreboard: Scoreboard;

  beforeEach(() => {
    scoreboard = new Scoreboard();
  });

  test("should start a new match", () => {
    scoreboard.startMatch("Mexico", "Canada");
    expect(scoreboard.getSummary()).toContain("Mexico 0 - 0 Canada");
  });

  test("should update match score", () => {
    scoreboard.startMatch("Mexico", "Canada");
    scoreboard.updateScore("Mexico", "Canada", 0, 5);
    expect(scoreboard.getSummary()).toContain("Mexico 0 - 5 Canada");
  });

  test("should finish a match", () => {
    scoreboard.startMatch("Mexico", "Canada");
    scoreboard.finishMatch("Mexico", "Canada");
    expect(scoreboard.getSummary()).not.toContain("Mexico 0 - 0 Canada");
  });

  test("should return matches summary ordered by total score", () => {
    scoreboard.startMatch("Mexico", "Canada");
    scoreboard.startMatch("Spain", "Brazil");
    scoreboard.startMatch("Germany", "France");
    scoreboard.updateScore("Mexico", "Canada", 0, 5);
    scoreboard.updateScore("Spain", "Brazil", 10, 2);
    scoreboard.updateScore("Germany", "France", 2, 2);
    scoreboard.startMatch("Uruguay", "Italy");
    scoreboard.updateScore("Uruguay", "Italy", 6, 6);
    scoreboard.startMatch("Argentina", "Australia");
    scoreboard.updateScore("Argentina", "Australia", 3, 1);

    const expectedSummary = [
      "Uruguay 6 - 6 Italy",
      "Spain 10 - 2 Brazil",
      "Mexico 0 - 5 Canada",
      "Argentina 3 - 1 Australia",
      "Germany 2 - 2 France",
    ];

    expect(scoreboard.getSummary()).toEqual(expectedSummary);
  });
});