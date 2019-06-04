import axios from "axios";
import {
  getEpisodesRequest,
  getEpisodesSuccess,
  getEpisodesFail
} from './index'

const baseApiUrl = 'https://rickandmortyapi.com/api/episode/'

export const getEpisodes = (next) => {
  return async (dispatch, getState) => {
    dispatch(getEpisodesRequest())
    console.log(getState())
    try {
      if (next) {
        console.log(getState().episodes.nextPage)
        const response = await axios.get(getState().episodes.nextPage)
        dispatch(
            getEpisodesSuccess(response.data.results, response.data.info.next)
        )
      } else {
        const response = await axios.get(baseApiUrl)
        console.log('Else',response)
        dispatch(
            getEpisodesSuccess(response.data.results, response.data.info.next, response.data.info)
        )
      }

    } catch (e) {
      const error = new Error(e)

      dispatch(getEpisodesFail(error.toString()))
    }
  }
}

export const getEpisodesPage = () => {
  return async (dispatch, getState) => {
    dispatch(getEpisodesRequest())

    try {
      const response = await axios.get(baseApiUrl)

      dispatch(
        getEpisodesSuccess(response.data.results)
      )
    } catch (e) {
      const error = new Error(e)

      dispatch(getEpisodesFail(error.toString()))
    }
  }
}