import {FETCH_RECIPE_BY_ID,FETCH_ALL_RECIPES} from '../actions/types'
const initialState={
    recipes:[],
    recipe:{},
};

export default function (state=initialState, action) {
    switch (action.type) {
        case FETCH_RECIPE_BY_ID:{
            return{
                recipe: action.payload
            };
        }
        case FETCH_ALL_RECIPES:{
            return{
                ...state,
                recipes: action.payload
            };
        }
        default :
            return state;
    }
}
