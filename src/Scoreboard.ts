import { Match } from "./Match";

export class Scoreboard {
  private matches: Match[];

  constructor() {
    this.matches = [];
  }

  public startMatch(homeTeam: string, awayTeam: string): void {
    const match = new Match(homeTeam, awayTeam);
    this.matches.push(match);
  }

  public updateScore(homeTeam: string, awayTeam: string, homeScore: number, awayScore: number): void {
    const match = this.findMatch(homeTeam, awayTeam);
    if (match) {
      match.updateScore(homeScore, awayScore);
    }
  }

  public finishMatch(homeTeam: string, awayTeam: string): void {
    const matchIndex = this.matches.findIndex(
      (match) => match.getScore() === `${homeTeam} 0 - 0 ${awayTeam}`
    );
    if (matchIndex !== -1) {
      this.matches.splice(matchIndex, 1);
    }
  }

  public getSummary(): string[] {
    const sortedMatches = this.matches.sort((a, b) => {
      if (a.getScore() === b.getScore()) {
        return 0;
      }
      return a.getScore() < b.getScore() ? 1 : -1;
    });

    return sortedMatches.map((match) => match.getScore());
  }

  private findMatch(homeTeam: string, awayTeam: string): Match | undefined {
    return this.matches.find(
      (match) => match.getScore() === `${homeTeam} 0 - 0 ${awayTeam}`
    );
  }
}
