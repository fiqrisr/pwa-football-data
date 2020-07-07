import { elements, apiRequest, renderPreloader, clearPreloader } from '../base';
import { Competition } from '../models/Competition';
import { renderCompetition } from '../views/competitionListView';

let competitionList: Array<Competition> = [];

const competitionListController = async (idList: string[]) => {
    elements.pageTitle.textContent = 'Competitions';
    renderPreloader(elements.contentBody);

    for (const id of idList) {
        const data: any = await apiRequest.getData(`competitions/${id}`);
        const competition = new Competition(data);

        competitionList.push(competition);
    }

    competitionList.forEach((comp) => renderCompetition(comp));
    clearPreloader();
};

export { competitionList, competitionListController };
