import { ICompetition, Season, Area, IBookmark } from '../interfaces/interfaces';
import { db } from '../base';

export class Competition implements ICompetition, IBookmark {
    id: number;
    area: Area;
    name: string;
    code: string;
    emblemUrl: string;
    plan: string;
    currentSeason: Season;
    seasons: Season[];
    lastUpdated: Date;

    constructor(data: Partial<Competition> = {}) {
        Object.assign(this, data);
    }

    setEmblemUrl(url: string) {
        this.emblemUrl = url;
    }

    saveToBookmarks() {
        return db.transaction('rw', db.competitions, async () => {
            this.id = await db.competitions.put({
                id: this.id,
                area: this.area.name,
                name: this.name,
                emblemUrl: this.emblemUrl,
            });
        });
    }

    deleteFromBookmarks() {
        return db.transaction('rw', db.competitions, async () => {
            await db.competitions.delete(this.id);
        });
    }
}
