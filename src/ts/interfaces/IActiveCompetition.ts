import { IArea } from '../interfaces/IArea';

export interface IActiveCompetition {
    id: number;
    area: IArea;
    name: string;
    code: string;
    plan: string;
    lastUpdated: Date;
}
