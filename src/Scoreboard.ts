import { Match } from './Match';

export class Scoreboard {
  private matches: Match[];

  constructor() {
    this.matches = [];
  }

  public startNewMatch(homeTeam: string, awayTeam: string): void {
    const match = new Match(homeTeam, awayTeam, this.matches.length);
    this.matches.push(match);
  }

  public finishMatch(homeTeam: string, awayTeam: string): void {
    const matchIndex = this.findMatchIndex(homeTeam, awayTeam);
    if (matchIndex !== -1) {
      this.matches.splice(matchIndex, 1);
    }
  }

  public updateScore(
    homeTeam: string,
    awayTeam: string,
    homeScore: number,
    awayScore: number
  ): void {
    const match = this.findMatch(homeTeam, awayTeam);
    if (match) {
      match.updateScore(homeScore, awayScore);
    }
  }

  public getSummary(): string[] {
    const sortedMatches = [...this.matches].sort((a, b) => {
      // Compare by total score    
      const aTotalScore = a.getHomeScore() + a.getAwayScore();
      const bTotalScore = b.getHomeScore() + b.getAwayScore();
      if (aTotalScore !== bTotalScore) {

        return bTotalScore - aTotalScore; // Sort in descending order by total score
      }

      // Compare by order if total score is equal
      return b.getOrder() - a.getOrder();
    });
  
    return sortedMatches.map((match) => match.getSummary());
  }

  private findMatch(homeTeam: string, awayTeam: string): Match | undefined {
    return this.matches.find(
      (match) =>
        match.getHomeTeam() === homeTeam && match.getAwayTeam() === awayTeam
    );
  }

  private findMatchIndex(homeTeam: string, awayTeam: string): number {
    return this.matches.findIndex(
      (match) =>
        match.getHomeTeam() === homeTeam && match.getAwayTeam() === awayTeam
    );
  }
}
