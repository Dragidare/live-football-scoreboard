export type TeamScore = {
    name: string;
    score: number;
  };
  
  export class Match {
    private home: TeamScore;
    private away: TeamScore;
    private order: number;
  
    constructor(homeTeam: string, awayTeam: string, order: number) {
      this.home = { name: homeTeam, score: 0 };
      this.away = { name: awayTeam, score: 0 };
      this.order = order;
    }
  
    public getHomeTeam(): string {
      return this.home.name;
    }
  
    public getAwayTeam(): string {
      return this.away.name;
    }
  
    public getHomeScore(): number {
      return this.home.score;
    }
  
    public getAwayScore(): number {
      return this.away.score;
    }

    public updateScore(homeScore: number, awayScore: number): void {
        if (typeof homeScore === 'number' && typeof awayScore === 'number' && homeScore >= 0 && awayScore >= 0) {
          this.home.score = homeScore;
          this.away.score = awayScore;
        } else {
            this.home.score = 0;
            this.away.score = 0;  
          console.log('Invalid score update. Scores must be non-negative numbers.');
        }
      }
    
      public getOrder(): number {
        return this.order;
      }
    
      public getSummary(): string {
        return `${this.home.name} ${this.home.score} - ${this.away.score} ${this.away.name}`;
      }
    }
  