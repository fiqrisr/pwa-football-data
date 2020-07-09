import { elements } from '../base';
import { Competition } from '../models/competition';
import { Team } from '../models/team';

export const renderTeamSelect = (competitionList: Array<Competition>) => {
    const markup = `
        <div class="input-field">
            <select class="icons" id="team-select">
                <option value="" disabled selected>Choose competition</option>
            </select>
            <label>Select competition</label>
        </div>
    `;

    elements.contentBody.insertAdjacentHTML('beforeend', markup);
    elements.contentBody.insertAdjacentHTML(
        'beforeend',
        '<div id="team-list-container" style="margin-top: 50px;"></div>'
    );

    const teamSelectElement = document.querySelector('#team-select');

    competitionList.forEach((competition) => {
        const option = `<option value="${competition.id}" data-icon="images/competitions/${competition.id}.webp">${competition.name}</option>`;
        teamSelectElement.insertAdjacentHTML('beforeend', option);
    });

    M.FormSelect.init(teamSelectElement);
};

export const renderTeam = (team: Team) => {
    // prettier-ignore
    const markup = `
            <div class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image team--logo valign-wrapper">
                        <img src="${team.crestUrl.replace(/^http:\/\//i, 'https://')}" alt="${team.name} logo" onerror="this.onerror=null; this.src='images/blank-badge.svg'"/>
                        <a class="btn-floating halfway-fab waves-effect waves-light red accent-3"><i class="material-icons">bookmark_border</i></a>
                    </div>
                    <div class="card-content team--content">
                        <a href="${
                            team.website
                        }" class="card-title blue-text truncate" target="_blank">${team.name}</a>
                        <p class="">Founded: ${team.founded || '-'}</p>
                    </div>
                </div>
            </div>
        `;

    document.querySelector('#team-list-container').insertAdjacentHTML('beforeend', markup);
};
