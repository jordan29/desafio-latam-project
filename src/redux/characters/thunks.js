import axios from "axios";
import {
  getCharactersRequest,
  getCharactersSuccess,
  getCharactersFail
} from './index'

const baseApiUrl = 'https://rickandmortyapi.com/api/character/'

export const getCharacters = (next) => {
  return async (dispatch, getState) => {
    dispatch(getCharactersRequest())
    console.log(getState())
    try {
      if (next) {
        console.log(getState().characters.nextPage)
        const response = await axios.get(getState().characters.nextPage)
        

        dispatch(
          getCharactersSuccess(response.data.results, response.data.info.next)
        )
      } else {
        const response = await axios.get(baseApiUrl)
        console.log(response)
        dispatch(
          getCharactersSuccess(response.data.results, response.data.info.next, response.data.info)
        )
      }

    } catch (e) {
      const error = new Error(e)

      dispatch(getCharactersFail(error.toString()))
    }
  }
}

export const getCharactersPage = () => {
  return async (dispatch, getState) => {
    dispatch(getCharactersRequest())

    try {
      const response = await axios.get(baseApiUrl)

      dispatch(
        getCharactersSuccess(response.data.results)
      )
    } catch (e) {
      const error = new Error(e)

      dispatch(getCharactersFail(error.toString()))
    }
  }
}