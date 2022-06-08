import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContainds';

//selectors

export const getFilteredCards = ({ cards, searchString }, columnId) =>
    cards.filter(card => card.columnId === columnId && strContains(card.title, searchString)),

    getAllColumns = state => state.columns,

    getListById = ({ lists }, listId) => lists.find(list => list.id === listId),

    getAllLists = state => state.lists,

    getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload }),

    addCard = payload => ({ type: 'ADD_CARD', payload }),

    addSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload })

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
        case 'UPDATE_SEARCHSTRING':
            return { ...state, searchString: action.payload.searchString, };
        default:
            return state;
    };
};


const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;