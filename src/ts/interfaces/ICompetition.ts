export interface ICompetition {
    id: number;
    area: IArea;
    name: string;
    code: string;
    emblemUrl: null;
    plan: string;
    currentSeason: ISeason;
    seasons: ISeason[];
    lastUpdated: Date;
}

export interface IArea {
    id: number;
    name: string;
}

export interface ISeason {
    id: number;
    startDate: Date;
    endDate: Date;
    currentMatchday: number | null;
    winner: IWinner | null;
}

export interface IWinner {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crestUrl: string;
}
