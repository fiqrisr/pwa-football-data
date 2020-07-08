import { elements } from '../base';
import { Competition } from '../models/competition';
import { Standing } from '../interfaces/interfaces';

export const renderCompetition = (item: Competition) => {
    const markup = `
        <div class="col s12 center" style="margin-bottom: 40px;">
            <div>
                <img width="250" src="images/competitions/${item.id}.webp" alt="${item.name} logo">
            </div>
        </div>
        <div class="col s12">
            <ul class="collapsible">
                <li>
                    <div class="collapsible-header">
                        Current Season Standings
                        <span class="collapsible-arrow valign-wrapper"><i class="material-icons">keyboard_arrow_down</i></span>
                    </div>
                    <div class="collapsible-body">
                        <table class="highlight responsive-table centered">
                            <thead>
                                <th>Position</th>
                                <th>Emblem</th>
                                <th>Team</th>
                                <th>Played</th>
                                <th>Won</th>
                                <th>Draw</th>
                                <th>Lost</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>Points</th>
                            </thead>
                            <tbody id="competition-standings-table"></tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </div>
    `;

    elements.contentBody.insertAdjacentHTML('beforeend', markup);
    M.Collapsible.init(document.querySelector('.collapsible'), { accordion: false });
};

export const renderCompetitionStandings = (standingList: Standing[]) => {
    const standingsTable = document.querySelector('#competition-standings-table');

    for (const standing of standingList) {
        const markup = `
        <tr>
            <td>${standing.position}</td>
            <td>
                <img src="${standing.team.crestUrl}" alt="${standing.team.name}" width="30">
            </td>
            <td>${standing.team.name}</td>
            <td>${standing.playedGames}</td>
            <td>${standing.won}</td>
            <td>${standing.draw}</td>
            <td>${standing.lost}</td>
            <td>${standing.goalsFor}</td>
            <td>${standing.goalsAgainst}</td>
            <td>${standing.goalDifference}</td>
            <td>${standing.points}</td>
        </tr>
        `;

        standingsTable.insertAdjacentHTML('beforeend', markup);
    }
};

// export const renderUpcomingMatches = (competitionID: number) => {
//     const upcomingMatchesTable
// }
