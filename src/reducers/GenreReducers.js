export default (genres = [], action) => {
    switch (action.type) {
        case 'GET_ALL_GENRES':
            return action.payload
        case 'GET_SINGLE':
            return action.payload;
        case 'CREATE':
            return genres;
        case 'UPDATE':
            return genres;
        case 'DELETE':
            return genres;
        default:
            return genres;
    }
}