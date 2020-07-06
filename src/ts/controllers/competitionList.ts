import { elements, apiRequest } from '../base';
import { Competition } from '../models/Competition';

export const competitionListController = (idList: string[]) => {
    const title = `<h2 class="center title">Competitions</h2>`;

    elements.contentBody.insertAdjacentHTML('beforeend', title);

    idList.forEach(async (id) => {
        const data: any = await apiRequest.getData(`competitions/${id}`);
        const competition = new Competition(data);

        const markup = `
            <div class="col s12 m6 l4">
                <div class="card hoverable">
                    <div class="card-image">
                        <img src="https://via.placeholder.com/350">
                    </div>
                    <div class="card-content">
                        <span class="card-title blue-text">${competition.name}</span>
                        <p>${competition.area.name}</p>
                    </div>
                </div>
            </div>
        `;

        elements.contentBody.insertAdjacentHTML('beforeend', markup);
    });
};
