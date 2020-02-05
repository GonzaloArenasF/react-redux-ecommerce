import { SHOW_BOOKS } from "../actions";

const initialState = {
    list: []
}

const setBookData = (payload) => {
    return payload.map(book => {
        return {
            id: book.rank,
            title: book.title,
            author: book.author,
            image: book.book_image
        }
    })
}

export function getBooks(state = initialState, action) {
    switch (action.type) {
        case SHOW_BOOKS:
            return Object.assign({}, state, { list: setBookData(action.payload) });
        default:
            return state;
    }
}