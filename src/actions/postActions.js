import {FETCH_RECIPE_BY_ID,FETCH_ALL_RECIPES,CREATE_RECIPE} from './types'

export const fetchRecipeById = (id) => dispatch =>{
    console.log(id);
    fetch('http://192.168.1.3:6996/recipe/id/'+id)
        .then(recipe=>recipe.json()).then(recipe => dispatch({
        type: FETCH_RECIPE_BY_ID,
        payload: recipe

    }))
};
export const fetchAllRecipes = () => dispatch => {
    fetch('http://192.168.1.3:6996/recipe')
        .then(res => res.json())
        .then(recipes => dispatch({
            type: FETCH_ALL_RECIPES,
            payload: recipes
        }));

};
export const createPost = (postData) => dispatch => {
    fetch('http://192.168.1.3:6996/recipe', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    }).then(res => res.json()).then(recipe => dispatch({
        type: CREATE_RECIPE,
        payload: recipe
    }))

};