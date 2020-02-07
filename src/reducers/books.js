import {
    SHOW_BOOKS
} from "../actions/products/books";

const initialState = {
    list: []
}

const setBookData = (payload) => {
    return payload.map(book => {
        return {
            id: book.rank,
            title: book.title.toLowerCase(),
            author: book.author,
            image: book.book_image
        }
    })
}

export function bookReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_BOOKS:
            return Object.assign({}, state, { list: setBookData(action.payload) });
        default:
            return state;
    }
}