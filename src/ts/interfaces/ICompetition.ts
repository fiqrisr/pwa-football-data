import { IArea } from './IArea';
import { ISeason } from './ISeason';

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
