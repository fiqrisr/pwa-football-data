import Dexie from 'dexie';
import { Competition } from '../models/competition';
import { Team } from '../models/team';

// prettier-ignore
export class Bookmarks extends Dexie {
    competitions: Dexie.Table<{ id: number; name: string; area: string; emblemUrl: string }, number>;
    teams: Dexie.Table<{ id: number; name: string; crestUrl: string; founded: number }, number>;

    constructor() {
        super('Bookmarks');
        this.version(1).stores({
            competitions: 'id, name, area, emblemUrl',
            teams: 'id, name, crestUrl, founded',
        });

        this.competitions.mapToClass(Competition);
        this.teams.mapToClass(Team);
    }
}
