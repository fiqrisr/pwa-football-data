import {
    elements,
    renderPreloader,
    clearPreloader,
    clearContentBody,
    loadPageNotFound,
    apiRequest,
} from '../base';
import { Team } from '../models/team';
import { renderTeamSelect, renderTeam } from '../views/teamListView';
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

            document
                .querySelector('#team-select')
                .addEventListener('change', (e) =>
                    handleSelectTeam(+(<HTMLInputElement>e.target).value)
                );

            clearPreloader();
        })
        .catch(() => {
            loadPageNotFound();
            clearPreloader();
        });
};

const handleSelectTeam = async (competitionID: number) => {
    clearTeamList();
    renderPreloader(elements.contentBody);

    await apiRequest
        .getData(`competitions/${competitionID}/teams`)
        .then((response: any) => {
            response.teams.forEach((item: any) => {
                const team = new Team(item);

                renderTeam(team);
            });

            clearPreloader();
        })
        .catch(() => {
            clearPreloader();
        });
};

const clearTeamList = () => {
    document.querySelector('#team-list-container').innerHTML = '';
};
