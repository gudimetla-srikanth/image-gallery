


const reducer = (state, action) => {
    if (action.type === 'ADD') {
        return { toggle: state.toggle, showpopup: state.showpopup, data: action.payload }
    }
    if (action.type === 'TOGGEL_CHANGE')
        return { data: state.data, showpopup: state.showpopup, toggle: action.payload };
    if (action.type === 'SHOW_POPUP') {
        return {
            data: state.data, showpopup: action.payload, toggle: state.toggle
        }
    }
    return state;
}
export default reducer;
