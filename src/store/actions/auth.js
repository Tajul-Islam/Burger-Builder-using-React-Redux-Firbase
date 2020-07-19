import * as actionTypes from './actionTypes';
import axios from  'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken,userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId:userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const authLogout =() =>{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    return{
        type:actionTypes.AUTH_LOGOUT
    }
};

export const auth = (email, password,isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData ={
           email: email,
           password: password,
           returnSecureToken: true
        };
        let url ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDV1eEohKOQSGRT0BsjMNMTsuOqA9HxPlg';
        if(!isSignup){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDV1eEohKOQSGRT0BsjMNMTsuOqA9HxPlg';
        }
        axios.post(url,authData)
            .then(response =>{
                localStorage.setItem('token',response.data.idToken);
                localStorage.setItem('userId',response.data.localId);
                dispatch(authSuccess(response.data.idToken,response.data.localId));
            })
            .catch(err=>{
                dispatch(authFail(err.response.data.error));
            })
    };
};

export const autoLogin = () =>{
    return dispatch =>{
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if(!token && !userId){
            dispatch (authLogout());
        }else{
            dispatch(authSuccess(token,userId));
        }
    }
};
