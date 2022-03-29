import {GET_MOVIES, MOVIES_ERROR} from '../types';
import axios from 'axios'
import { useState } from 'react';

export const getMovies = () => async dispatch => {
    
    try{
        return await axios.get(`http://www.omdbapi.com/?apikey=9d7cfdec&s=batman`).then(res => {
            dispatch( {
                type: GET_MOVIES,
                payload: res.data,
            })
            console.log(res.data)
        })
        
        
    }
    catch(e){
        dispatch( {
            type: MOVIES_ERROR,
            payload: console.log(e),
        })
    }

}