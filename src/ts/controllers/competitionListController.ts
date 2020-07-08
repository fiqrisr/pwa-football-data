import { elements, apiRequest, renderPreloader, clearPreloader, clearContentBody } from '../base';
import { Competition } from '../models/competition';
import { renderCompetitionList } from '../views/competitionListView';

export let competitionList = new Map();

export const competitionListController = async (idList: string[]) => {
    clearContentBody();
    elements.pageTitle.textContent = 'Competitions';
    renderPreloader(elements.contentBody);

    const data: any = await apiRequest.getData(`competitions`);

    data.competitions.forEach((competition: any) => {
        competitionList.set(competition.id, competition);
    });

    idList.forEach((id) => {
        const competition = new Competition(competitionList.get(+id));
        renderCompetitionList(competition);
    });

    clearPreloader();
};
