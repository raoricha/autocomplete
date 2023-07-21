const reducer = (state, action) => {
    switch (action.type) {
        case "GET_LIST":
            return {
                ...state,
                list: state.query ? action.payload.list.filter(item => item.name.match(new RegExp(`${state.query}`, "gi"))) : []
            }
        case "SEARCH_QUERY":
            return {
                ...state,
                query: action.payload,
            }
        case "UPDATE_QUERY":
            return {
                query: action.payloadQuery,
                list: []
            }
    }
    return state
}

export default reducer