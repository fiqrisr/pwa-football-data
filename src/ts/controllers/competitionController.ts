import {
    elements,
    apiRequest,
    renderPreloader,
    clearPreloader,
    clearContentBody,
    loadPageNotFound,
} from '../base';
import { Competition } from '../models/competition';
import { renderCompetition, renderCompetitionStandings } from '../views/competitionView';
import { Standing } from '../interfaces/interfaces';

export const competitionController = async (id: string) => {
    clearContentBody();
    renderPreloader(elements.contentBody);

    await apiRequest
        .getData(`competitions/${id}`)
        .then((response) => {
            const competition = new Competition(response);

            elements.pageTitle.textContent = competition.name;
            renderCompetition(competition);
            clearPreloader();

            loadStandings(competition.id.toString());
        })
        .catch(() => {
            loadPageNotFound();
            clearPreloader();
        });
};

const loadStandings = async (competitionID: string) => {
    const data: any = await apiRequest.getData(
        `competitions/${competitionID}/standings?standingType=TOTAL`
    );

    const standings: Standing[] = [];

    data.standings[0].table.forEach((team: Standing) => {
        standings.push(team);
    });

    renderCompetitionStandings(standings);
};
