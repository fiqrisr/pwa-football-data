import { ITeam } from '../interfaces/ITeam';
import { ISquad } from '../interfaces/ISquad';
import { IActiveCompetition } from '../interfaces/IActiveCompetition';
import { IArea } from '../interfaces/IArea';

export class Team implements ITeam {
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
