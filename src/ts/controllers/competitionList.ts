import { elements, apiRequest } from '../base';
import { Competition } from '../models/Competition';
import { renderCompetition } from '../views/competitionView';

export const competitionListController = (idList: string[]) => {
    const title = `<h3 class="center title">Competitions - Standings</h3>`;

    elements.contentBody.insertAdjacentHTML('beforeend', title);

    idList.forEach(async (id) => {
        const data: any = await apiRequest.getData(`competitions/${id}`);
        const competition = new Competition(data);

        renderCompetition(competition);
    });
};
