export default (movies = [], action) => {
    switch (action.type) {
        case 'GET_ALL_MOVIES':
            return action.payload
        case 'GET_SINGLE':
            return action.payload;
        default:
            return movies;
    }
}