export class Match {
    private homeTeam: string;
    private awayTeam: string;
    private homeScore: number;
    private awayScore: number;
    private order: number;
  
    constructor(homeTeam: string, awayTeam: string, order: number) {
      this.homeTeam = homeTeam;
      this.awayTeam = awayTeam;
      this.homeScore = 0;
      this.awayScore = 0;
      this.order = order;
    }
  
    public getHomeTeam(): string {
      return this.homeTeam;
    }
  
    public getAwayTeam(): string {
      return this.awayTeam;
    }
  
    public getHomeScore(): number {
      return this.homeScore;
    }
  
    public getAwayScore(): number {
      return this.awayScore;
    }
  
    public updateScore(homeScore: number, awayScore: number): void {
      this.homeScore = homeScore;
      this.awayScore = awayScore;
    }
  
    public getOrder(): number {
      return this.order;
    }
  
    public getSummary(): string {
      return `${this.homeTeam} ${this.homeScore} - ${this.awayScore} ${this.awayTeam}`;
    }
  }
  