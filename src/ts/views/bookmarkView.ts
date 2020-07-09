import { elements } from '../base';

export const renderBookmarkPage = () => {
    const markup = `
        <div class="section">
            <h5>Competitions</h5>
            <div class="row bookmark-container" id="bookmarks-competitions"></div>
        </div>
        <div class="divider"></div>
        <div class="section">
            <h5>Teams</h5>
            <div class="row bookmark-container" id="bookmarks-teams"></div>
        </div>
    `;

    elements.contentBody.insertAdjacentHTML('beforeend', markup);
};
