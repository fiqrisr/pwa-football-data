import {
    elements,
    apiRequest,
    renderPreloader,
    clearPreloader,
    clearContentBody,
    loadPageNotFound,
} from '../base';
import { Competition } from '../models/competition';
import { renderCompetitionList } from '../views/competitionListView';

export const competitionListController = async (idList: string[]) => {
    clearContentBody();
    elements.pageTitle.textContent = 'Competitions';
    renderPreloader(elements.contentBody);

    await apiRequest
        .getData(`competitions`)
        .then((response: any) => {
            let competitionList = new Map();

            response.competitions.forEach((competition: any) => {
                competitionList.set(competition.id, competition);
            });

            idList.forEach((id) => {
                const competition = new Competition(competitionList.get(+id));
                competition.setEmblemUrl(`assets/images/competitions/${competition.id}.webp`);
                renderCompetitionList(competition);
            });

            clearPreloader();
        })
        .catch(() => {
            loadPageNotFound();
            clearPreloader();
        });
};
