const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST'
const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS'
const GET_CHARACTERS_FAIL = 'GET_CHARACTERS_FAIL'

export const getCharactersRequest = () => ({ type: GET_CHARACTERS_REQUEST })

export const getCharactersSuccess = (characters, nextPage, info) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: {
    characters,
    nextPage,
    info
  }
})

export const getCharactersFail = (error) => ({
  type: GET_CHARACTERS_FAIL,
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
    case GET_CHARACTERS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case GET_CHARACTERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        entities: [
          ...state.entities,
          ...action.payload.characters,
        ],
        nextPage: action.payload.nextPage,
      }
    }

    case GET_CHARACTERS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    }

    default: return state
  }
}