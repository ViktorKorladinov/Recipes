import { FETCH_ALL_RECIPES, FETCH_RECIPE_BY_ID} from './types'

let baseUrl = 'http://192.168.1.3:6996';
// let baseUrl = '';
export const fetchRecipeById = (id) => dispatch => {
    fetch(baseUrl + '/recipe/id/' + id)
        .then(recipe => recipe.json()).then(recipe => dispatch({
        type: FETCH_RECIPE_BY_ID,
        payload: recipe

    }))
};
export const fetchAllRecipes = () => dispatch => {
    fetch(baseUrl + '/recipe')
        .then(res => res.json())
        .then(recipes => dispatch({
            type: FETCH_ALL_RECIPES,
            payload: recipes
        }));

};
export const createRecipe = (postData) => () => {
    fetch(baseUrl + '/recipe', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    }).catch(err=>{
        console.log(err);
    })

};