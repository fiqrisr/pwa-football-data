import { toggleBookmark, elements, toggleBookmarkButton } from '../base';
import { Competition } from '../models/competition';

export const renderCompetitionList = (item: Competition) => {
    // prettier-ignore
    const markup = `
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image competition--logo valign-wrapper">
                    <img src="${item.emblemUrl}" alt="${item.name} logo"/>
                    <a 
                        class="btn-floating halfway-fab waves-effect waves-light red accent-3"
                        id="bookmark-button-${item.id}">
                            <i class="material-icons">bookmark_border</i>
                    </a>
                </div>
                <div class="card-content competition--content">
                    <a href="#competitions/${item.id}" class="card-title blue-text truncate">${item.name}</a>
                    <p>${item.area.name}</p>
                </div>
            </div>
        </div>
    `;

    elements.contentBody.insertAdjacentHTML('beforeend', markup);

    document
        .querySelector(`#bookmark-button-${item.id}`)
        .addEventListener('click', (e) => toggleBookmark(item, 'competitions'));

    // Toggle bookmark button
    toggleBookmarkButton(item, 'competitions');
};
