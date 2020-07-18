import Dexie from 'dexie';
import { Competition } from '../models/competition';
import { Team } from '../models/team';
import { IBookmark } from '../interfaces/interfaces';
import { db } from '../base';

// prettier-ignore
export class Bookmarks extends Dexie {
    competitions: Dexie.Table<{ id: number; name: string; area: string; emblemUrl: string }, number>;
    teams: Dexie.Table<{ id: number; name: string; crestUrl: string; founded: number, website: string }, number>;

    constructor() {
        super('Bookmarks');
        this.version(1).stores({
            competitions: 'id, name, area, emblemUrl',
            teams: 'id, name, crestUrl, founded, website',
        });

        this.competitions.mapToClass(Competition);
        this.teams.mapToClass(Team);
    }

    async isBookmarked(item: IBookmark, table: string) {
        let itemFromDatabase: Competition | Team;

        switch (table) {
            case 'competitions':
                await db.transaction('r', db.competitions, async () => {
                    // @ts-ignore
                    await db.competitions.get(item.id, (item) => (itemFromDatabase = item));
                });
                break;
            case 'teams':
                await db.transaction('r', db.teams, async () => {
                    // @ts-ignore
                    await db.teams.get(item.id, (item) => (itemFromDatabase = item));
                });
                break;
        }

        return itemFromDatabase;
    }

    async remove(item: any, table:string) {
        return new Promise(async (resolve) => {
            switch (table) {
                case 'competitions':
                    await db.transaction('rw', db.competitions, async () => {
                        // @ts-ignore
                        await db.competitions.delete(item.id);
                        resolve(db.competitions.count());
                    });
                    break;
                case 'teams':
                    await db.transaction('rw', db.teams, async () => {
                        // @ts-ignore
                        await db.teams.delete(item.id);
                        resolve(db.teams.count());
                    });
                    break;
            }
        })
    }
}
