import { ICompetition, IArea, ISeason } from '../interfaces/ICompetition';

export class Competition implements ICompetition {
    id: number;
    area: IArea;
    name: string;
    code: string;
    emblemUrl: null;
    plan: string;
    currentSeason: ISeason;
    seasons: ISeason[];
    lastUpdated: Date;

    constructor(data: Partial<Competition> = {}) {
        Object.assign(this, data);
    }
}
