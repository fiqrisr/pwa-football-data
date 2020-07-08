import { elements, apiRequest, renderPreloader, clearPreloader, clearContentBody } from '../base';
import { Competition } from '../models/competition';
import { renderCompetition, renderCompetitionStandings } from '../views/competitionView';
import { Standing } from '../interfaces/interfaces';

export const competitionController = async (id: string) => {
    clearContentBody();
    renderPreloader(elements.contentBody);

    const data: any = await apiRequest.getData(`competitions/${id}`);
    const competition = new Competition(data);

    elements.pageTitle.textContent = competition.name;
    renderCompetition(competition);
    clearPreloader();

    loadStandings(competition.id.toString());
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
