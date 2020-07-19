import * as actionTypes from './actionTypes';
import Axios from "../../axios-orders";
export const addingredient = (name) =>{
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};

export const removeingredient = (name) =>{
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

export const setIngredients = (ingredients) =>{
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
};

export const initIngredients =() =>{
    return dispatch =>{
        Axios.get('https://burger-builder-2557b.firebaseio.com/ingredients.json')
        .then(response=>{
           dispatch(setIngredients(response.data));
        })
    }
};
