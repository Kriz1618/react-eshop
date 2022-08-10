
export const initialState = {
    basket: [],
    logged: false,
    user: 'Guest'
}

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product(id: ${action.id}) as its not in the basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }

        case "LOGIN_STATUS": {
            return {
                ...state,
                logged: action.login,
                user: action.login ? action.user : initialState.user,
            }
        }

        case "USER_NAME": {
            return {
                ...state,
                user: action.user
            }
        }
        default:
            return state;
    }
};

export const getBasketTotal = (basket) => {
    return (basket?.reduce((amount, item) => item.price + amount, 0));
}

export default reducer;