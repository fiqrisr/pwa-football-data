import { elements, apiRequest, renderPreloader, clearPreloader, clearContentBody } from '../base';
import { Competition } from '../models/Competition';
import { renderCompetitionList } from '../views/competitionListView';

export let competitionList = new Map();

export const competitionListController = async (idList: string[]) => {
    clearContentBody();
    elements.pageTitle.textContent = 'Competitions';
    renderPreloader(elements.contentBody);

    for (const id of idList) {
        const data: any = await apiRequest.getData(`competitions/${id}`);
        const competition = new Competition(data);

        if (!competitionList.has(competition.id)) competitionList.set(competition.id, competition);
    }

    competitionList.forEach((competition) => renderCompetitionList(competition));
    clearPreloader();
};
