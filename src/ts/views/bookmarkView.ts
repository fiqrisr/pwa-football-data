import { db, elements } from '../base';

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

export const renderCompetitionsBookmark = (item: {
    id: number;
    name: string;
    area: string;
    emblemUrl: string;
}) => {
    const markup = `
        <div class="col s12 m6 l4" id="bookmark-${item.id}">
            <div class="card">
                <div class="card-image competition--logo valign-wrapper">
                    <img src="${item.emblemUrl}" alt="${item.name} logo"/>
                </div>
                <div class="card-content competition--content">
                    <a href="#competitions/${item.id}" class="card-title blue-text truncate">${item.name}</a>
                    <p>${item.area}</p>
                </div>
                <div class="card-action">
                    <a class="waves-effect waves-light btn-small red accent-3" id="remove-${item.id}">
                        <i class="material-icons left">delete</i>Delete
                    </a>
                </div>
            </div>
        </div>
    `;

    document.querySelector('#bookmarks-competitions').insertAdjacentHTML('beforeend', markup);
    document
        .querySelector(`#remove-${item.id}`)
        .addEventListener('click', async (e) => removeBookmarkDialog(item, 'competitions'));
};

export const renderTeamsBookmark = (item: {
    id: number;
    name: string;
    crestUrl: string;
    founded: number;
    website: string;
}) => {
    // prettier-ignore
    const markup = `
        <div class="col s12 m6 l3" id="bookmark-${item.id}">
            <div class="card">
                <div class="card-image team--logo valign-wrapper" id="crest-${item.id}">
                    <img src="${item.crestUrl}" alt="${item.name} logo"/>
                </div>
                <div class="card-content team--content">
                    <a href="${item.website}" class="card-title blue-text truncate" target="_blank">${item.name}</a>
                    <p class="">Founded: ${item.founded || '-'}</p>
                </div>
                <div class="card-action">
                    <a class="waves-effect waves-light btn-small red accent-3" id="remove-${item.id}">
                        <i class="material-icons left">delete</i>Delete
                    </a>
                </div>
            </div>
        </div>
    `

    document.querySelector('#bookmarks-teams').insertAdjacentHTML('beforeend', markup);
    document
        .querySelector(`#remove-${item.id}`)
        .addEventListener('click', async (e) => removeBookmarkDialog(item, 'teams'));
};

const removeBookmarkDialog = async (item: any, fromTable: string) => {
    const removeBookmark = confirm(`Remove ${item.name} from bookmarks?`);

    if (removeBookmark) {
        await db.remove(item, fromTable).then((response) => {
            document
                .querySelector(`#bookmarks-${fromTable}`)
                .removeChild(document.querySelector(`#bookmark-${item.id}`));
        });
        M.toast({ html: `${item.name} removed from bookmarks` });
    }
};
