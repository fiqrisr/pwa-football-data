import { IArea } from '../interfaces/IArea';
import { IActiveCompetition } from './IActiveCompetition';
import { ISquad } from './ISquad';

export interface ITeam {
    id: number;
    area: IArea;
    activeCompetitions: IActiveCompetition[];
    name: string;
    shortName: string;
    tla: string;
    crestUrl: string;
    address: string;
    phone: string;
    website: string;
    email: string;
    founded: number;
    clubColors: string;
    venue: string;
    squad: ISquad[];
    lastUpdated: Date;
}
