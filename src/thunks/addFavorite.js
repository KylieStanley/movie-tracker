import { addFavorite, hasErrored } from '../actions';

export const postFavorite = (movie, uid) => {
  const url = 'http://localhost:3000/api/users/favorites/new';
  return async (dispatch) => {
    try {
      const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...movie, user_id: uid})
    })
    if (!response.ok) {
      throw Error(response.statusText)
    }
    dispatch(addFavorite(movie));
  } catch (err) {
    dispatch(hasErrored(err.message))
    }
  }
}