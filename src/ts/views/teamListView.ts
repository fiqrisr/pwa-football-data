import { elements, toggleBookmark } from '../base';
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
        const option = `<option value="${competition.id}" data-icon="assets/images/competitions/${competition.id}.webp">${competition.name}</option>`;
        teamSelectElement.insertAdjacentHTML('beforeend', option);
    });

    M.FormSelect.init(teamSelectElement);
};

export const renderTeam = (item: Team) => {
    // prettier-ignore
    const markup = `
            <div class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image team--logo valign-wrapper" id="crest-${item.id}">
                        <a
                            class="btn-floating halfway-fab waves-effect waves-light red accent-3"
                            id="bookmark-button-${item.id}">
                                <i class="material-icons">bookmark_border</i>
                        </a>
                    </div>
                    <div class="card-content team--content">
                        <a href="${
                            item.website
                        }" class="card-title blue-text truncate" target="_blank">${item.name}</a>
                        <p class="">Founded: ${item.founded || '-'}</p>
                    </div>
                </div>
            </div>
        `;

    // Append team card into team list container
    document.querySelector('#team-list-container').insertAdjacentHTML('beforeend', markup);

    document
        .querySelector(`#bookmark-button-${item.id}`)
        .addEventListener('click', (e) => toggleBookmark(item));

    // Team crest image element
    let crestImg = document.createElement('img');
    crestImg.src = item.crestUrl;
    crestImg.onerror = function () {
        this.onerror = null;
        this.src = 'assets/images/blank-badge.svg';
        item.setCrestUrl('assets/images/blank-badge.svg');
    };

    // Append crest image element to team card
    document.querySelector(`#crest-${item.id}`).insertAdjacentElement('afterbegin', crestImg);
};
