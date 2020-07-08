import { ITeam, Area } from '../interfaces/interfaces';

export class Team implements ITeam {
    id: number;
    area: Area;
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
    lastUpdated: Date;

    constructor(data: Partial<Team> = {}) {
        Object.assign(this, data);
    }
}
