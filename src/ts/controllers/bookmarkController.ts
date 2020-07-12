import { clearContentBody, clearPreloader, db, elements, renderPreloader } from '../base';
import {
    renderBookmarkPage,
    renderCompetitionsBookmark,
    renderTeamsBookmark,
} from '../views/bookmarkView';

export const bookmarkController = async () => {
    clearContentBody();
    elements.pageTitle.textContent = 'Bookmarks';
    renderPreloader(elements.contentBody);

    await db.transaction('r', db.competitions, db.teams, async () => {
        renderBookmarkPage();

        const competitionsData = await db.competitions.toArray();
        const teamsData = await db.teams.toArray();

        competitionsData.forEach((item) => renderCompetitionsBookmark(item));
        teamsData.forEach((item) => renderTeamsBookmark(item));
    });

    clearPreloader();
};
