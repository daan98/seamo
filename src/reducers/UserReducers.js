export default (users = [], action) => {
    switch (action.type) {
        case 'GET_ALL_USERS':
            return action.payload
        case 'GET_SINGLE':
            return action.payload;
        case 'CREATE':
            return users;
        case 'UPDATE':
            return users;
        case 'DELETE':
            return users;
        default:
            return users;
    }
}