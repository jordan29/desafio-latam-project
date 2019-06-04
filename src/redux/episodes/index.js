const GET_EPISODES_REQUEST = 'GET_EPISODE_REQUEST'
const GET_EPISODES_SUCCESS = 'GET_EPISODES_SUCCESS'
const GET_EPISODES_FAIL = 'GET_EPISODES_FAIL'

export const getEpisodesRequest = () => ({ type: GET_EPISODES_REQUEST })

export const getEpisodesSuccess = (episodes, nextPage, info) => ({
  type: GET_EPISODES_SUCCESS,
  payload: {
    episodes,
    nextPage,
    info
  }
})

export const getEpisodesFail = (error) => ({
  type: GET_EPISODES_FAIL,
  payload: {
    error
  }
})

const initialState = {
  entities: [],
  loading: false,
  nextPage: null,
  backPage: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EPISODES_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case GET_EPISODES_SUCCESS: {
      return {
        loading: false,
        entities: [
          ...state.entities,
          ...action.payload.episodes,
        ],
        nextPage: action.payload.nextPage,
      }
    }

    case GET_EPISODES_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    }

    default: return state
  }
}