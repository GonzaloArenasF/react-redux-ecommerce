import axios from 'axios';

export const SHOW_BOOKS = 'SHOW_BOOKS';

export function getBooks() {

    const apiKey = 'rkSH9nXm4vAlU43CP1IVBNwMSns9GsgS';
    const urlService = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=' + apiKey;

    return (dispatch, getState) => {
        axios.get(urlService)
            .then((response) => {
                dispatch({ type: SHOW_BOOKS, payload: response.data.results.books })
            })
    }
}