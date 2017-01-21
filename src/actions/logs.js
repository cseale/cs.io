import 'whatwg-fetch';

import {
  LOGS_FETCH,
  LOGS_RECEIVE
} from '../constants/logs';

const generateUrl = (page = 0) => `https://api.github.com/users/cseale/events/public?page=${page}`;

export const fetchLogs = () => (dispatch, getState) => {
  dispatch({ type: LOGS_FETCH });

  const url = generateUrl(0);

  fetch(url)
    .then(result => result.json())
    .then(json => {
      dispatch({
        type: LOGS_RECEIVE,
        payload: {
          list: json
        }
      })
    })
}
