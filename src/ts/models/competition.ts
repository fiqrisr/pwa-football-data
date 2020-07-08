import { ICompetition, Season, Area } from '../interfaces/interfaces';

export class Competition implements ICompetition {
    id: number;
    area: Area;
    name: string;
    code: string;
    emblemUrl: null;
    plan: string;
    currentSeason: Season;
    seasons: Season[];
    lastUpdated: Date;

    constructor(data: Partial<Competition> = {}) {
        Object.assign(this, data);
    }
}
