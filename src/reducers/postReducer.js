import {FETCH_RECIPE_BY_ID,FETCH_ALL_RECIPES,CREATE_RECIPE} from '../actions/types'
const initialState={
    recipes:[],
    recipe:{},
    creation:{}
};

export default function (state=initialState, action) {
    switch (action.type) {
        case FETCH_RECIPE_BY_ID:{
            return{
                ...state,
                recipe: action.payload
            };
        }
        case FETCH_ALL_RECIPES:{
            return{
                ...state,
                recipes: action.payload
            };
        }
        case CREATE_RECIPE:{
            return{
                ...state,
                creation:action.payload
            }
        }
        default :
            return state;
    }
}
