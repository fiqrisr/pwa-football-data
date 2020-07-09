import { clearContentBody, clearPreloader, elements, renderPreloader } from '../base';
import { renderBookmarkPage } from '../views/bookmarkView';

export const bookmarkController = () => {
    clearContentBody();
    elements.pageTitle.textContent = 'Bookmarks';
    renderPreloader(elements.contentBody);

    renderBookmarkPage();

    clearPreloader();
};
