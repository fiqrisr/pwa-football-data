import { elements } from '../base';
import { Competition } from '../models/Competition';

export const renderCompetition = (item: Competition) => {
    const markup = `
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image competition--logo valign-wrapper">
                    <img src="images/competitions/${item.id}.webp"/>
                    <a class="btn-floating halfway-fab waves-effect waves-light amber darken-1"><i class="material-icons">bookmark_border</i></a>
                </div>
                <div class="card-content competition--content">
                    <a href="#competitions/${item.id}" class="card-title blue-text">${item.name}</a>
                    <p>${item.area.name}</p>
                </div>
            </div>
        </div>
    `;

    elements.contentBody.insertAdjacentHTML('beforeend', markup);
};
