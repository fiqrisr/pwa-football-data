import { APIRequest } from './api';
import { Bookmarks } from './database/bookmarks';
import { IBookmark } from './interfaces/interfaces';

const URI: string = 'https://api.football-data.org/v2/';
const API_TOKEN: string = '321f62aebd5c4bce8a97f2c39a19a455';

export const db = new Bookmarks();

export const elements = {
    contentBody: document.querySelector('#content-body'),
    pageTitle: document.querySelector('#page-title'),
};

export const apiRequest = new APIRequest(URI);
apiRequest.headers = { 'X-Auth-Token': API_TOKEN };

export const renderPreloader = (parent: Element) => {
    const loader = `
        <div class="preloader-container center col s12" id="preloader">
            <div class="preloader-wrapper active">
                <div class="spinner-layer spinner-red-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div><div class="gap-patch">
                        <div class="circle"></div>
                    </div><div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    parent.insertAdjacentHTML('beforeend', loader);
};

export const loadPageNotFound = () => {
    elements.pageTitle.textContent = '404 not found';
    elements.contentBody.innerHTML = '';
};

export const clearPreloader = () => {
    const loader = document.querySelector('#preloader');
    if (loader) loader.parentElement.removeChild(loader);
};

export const clearContentBody = () => {
    elements.contentBody.innerHTML = '';
};

export const toggleBookmark = async (bookmarkItem: IBookmark, table: string) => {
    if (!(await db.isBookmarked(bookmarkItem, table))) {
        bookmarkItem.saveToBookmarks();
        changeBookmarkButton(true, bookmarkItem);
        M.toast({ html: `${bookmarkItem.name} added to bookmarks` });
    } else {
        bookmarkItem.deleteFromBookmarks();
        changeBookmarkButton(false, bookmarkItem);
        M.toast({ html: `${bookmarkItem.name} removed from bookmarks` });
    }
};

export const toggleBookmarkButton = async (item: IBookmark, table: string) => {
    if (await db.isBookmarked(item, table)) {
        changeBookmarkButton(true, item);
    } else {
        changeBookmarkButton(false, item);
    }
};

const changeBookmarkButton = (isBookmarked: boolean, bookmarkItem: IBookmark) => {
    const bookmarkButton = document.querySelector(`#bookmark-button-${bookmarkItem.id}`);
    bookmarkButton.classList.toggle('saved');
    bookmarkButton.querySelector('i').textContent = isBookmarked ? 'bookmark' : 'bookmark_border';
};

export const urlBase64ToUint8Array = (base64String: string) => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
};
