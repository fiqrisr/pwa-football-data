import {
    elements,
    renderPreloader,
    clearPreloader,
    clearContentBody,
    loadPageNotFound,
    apiRequest,
} from '../base';
import { Team } from '../models/team';
import { renderTeamSelect } from '../views/teamListView';
import { Competition } from '../models/competition';

export const teamListController = async (competitionIdList: string[]) => {
    clearContentBody();
    elements.pageTitle.textContent = 'Teams';
    renderPreloader(elements.contentBody);

    await apiRequest
        .getData('competitions')
        .then((response: any) => {
            let competitionList = new Map();
            let competitionListFiltered: Array<Competition> = [];

            response.competitions.forEach((competition: any) => {
                competitionList.set(competition.id, competition);
            });

            competitionIdList.forEach((id) => {
                const competition = new Competition(competitionList.get(+id));
                competitionListFiltered.push(competition);
            });

            renderTeamSelect(competitionListFiltered);

            clearPreloader();
        })
        .catch(() => {
            loadPageNotFound();
            clearPreloader();
        });
};
