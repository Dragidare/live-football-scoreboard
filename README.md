# Live Football World Cup Scoreboard

The Live Football World Cup Scoreboard is a TypeScript library that provides functionality to manage ongoing football matches and their scores. It allows you to start new matches, update scores, finish matches, and get a summary of matches in progress.

## Usage

Here's a basic example of how to use the library:

```typescript

import { Scoreboard } from 'live-football-scoreboard';

// Create a new instance of the Scoreboard

const scoreboard = new Scoreboard();

// Start a new match

scoreboard.startMatch('Mexico', 'Canada');

// Update the score of a match

scoreboard.updateScore('Mexico', 'Canada', 0, 5);

// Finish a match

scoreboard.finishMatch('Mexico', 'Canada');

// Get a summary of matches in progress

const summary = scoreboard.getSummary();

console.log(summary);

```

## API

### `Scoreboard` Class

#### `startMatch(homeTeam: string, awayTeam: string): void`

Starts a new match with the specified home team and away team. The initial score is set to 0-0.

#### `updateScore(homeTeam: string, awayTeam: string, homeScore: number, awayScore: number): void`

Updates the score of an ongoing match with the specified home score and away score.

#### `finishMatch(homeTeam: string, awayTeam: string): void`

Finishes the match with the specified home team and away team, removing it from the scoreboard.

#### `getSummary(): string[]`

Returns a summary of matches in progress, ordered by their total score. Matches with the same total score are returned in the order they were started.

## Contributing

Contributions to the Live Football World Cup Scoreboard library are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

The Live Football World Cup Scoreboard library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
