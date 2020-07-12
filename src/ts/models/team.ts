import { ITeam, Area, IBookmark } from '../interfaces/interfaces';
import { db } from '../base';

export class Team implements ITeam, IBookmark {
    id: number;
    area: Area;
    name: string;
    shortName: string;
    tla: string;
    crestUrl: string | null;
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

    setCrestUrl(url: string) {
        this.crestUrl = url;
    }

    saveToBookmarks() {
        return db.transaction('rw', db.teams, async () => {
            this.id = await db.teams.put({
                id: this.id,
                name: this.name,
                crestUrl: this.crestUrl,
                founded: this.founded,
                website: this.website,
            });
        });
    }

    deleteFromBookmarks() {
        return db.transaction('rw', db.teams, async () => {
            await db.teams.delete(this.id);
        });
    }
}
