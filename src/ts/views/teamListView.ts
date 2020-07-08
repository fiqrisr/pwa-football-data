import { elements } from '../base';
import { Competition } from '../models/competition';

export const renderTeamSelect = (competitionList: Array<Competition>) => {
    const markup = `
        <div class="input-field">
            <select class="icons" id="team-select">
                <option value="" disabled selected>Choose team</option>
            </select>
            <label>Select team</label>
        </div>
    `;

    elements.contentBody.insertAdjacentHTML('beforeend', markup);

    const teamSelectElement = document.querySelector('#team-select');

    competitionList.forEach((competition) => {
        const option = `<option value="${competition.id}" data-icon="images/competitions/${competition.id}.webp">${competition.name}</option>`;
        teamSelectElement.insertAdjacentHTML('beforeend', option);
    });

    M.FormSelect.init(document.querySelector('#team-select'));
};

export const renderTeam = (teamID: string) => {};
