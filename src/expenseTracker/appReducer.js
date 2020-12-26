const TransectionReducer = ((state, action) => {
    switch (action.type) {
        case "ADD_TRANSECTION": {
            return [...state, action.payload]
        }
        default:
            return state;
    }
});

export default TransectionReducer;