import apiUrl from '../apiConfig'
import axios from 'axios'

// READ => INDEX
export const getAllHeroes = () => {
    return axios(`${apiUrl}/heroes`)
}