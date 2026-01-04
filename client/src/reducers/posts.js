
const reducer = (posts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...posts, action.payload];
        default:
            return posts; // ensure state is never undefined
    }
};

export default reducer;