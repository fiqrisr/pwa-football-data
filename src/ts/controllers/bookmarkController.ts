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

        if (competitionsData.length != 0)
            competitionsData.forEach((item) => renderCompetitionsBookmark(item));
        else document.querySelector('#bookmarks-competitions').innerHTML = '<p>No bookmarks</p>';

        if (teamsData.length != 0) teamsData.forEach((item) => renderTeamsBookmark(item));
        else document.querySelector('#bookmarks-teams').innerHTML = '<p>No bookmarks</p>';
    });

    clearPreloader();
};
