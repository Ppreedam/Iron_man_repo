import * as types from "./actionType";

const initialstate = {
    product: []
}

const reducer = (state = initialstate, action) => {
    // const {payload, type}=action;
    const { type, payload } = action

    switch (type) {
        case types.GET_RESPONSE:
            return {
                ...state,
                product: payload
            }


        default:
            return state
    }
}
export default reducer