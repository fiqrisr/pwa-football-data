export interface ICompetition {
    id: number;
    area: Area;
    name: string;
    code: string;
    emblemUrl: null;
    plan: string;
    currentSeason: Season;
    seasons: Season[];
    lastUpdated: Date;
}

export interface Standing {
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

export interface Area {
    id: number;
    name: string;
}

export interface Season {
    id: number;
    startDate: Date;
    endDate: Date;
    currentMatchday: number | null;
    winner: Winner | null;
}

interface Winner {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crestUrl: null | string;
}
