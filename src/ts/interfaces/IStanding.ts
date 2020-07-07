export interface IStanding {
    position: number;
    team: { id: string; name: string; crestUrl: string };
    playedGames: number;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
}
