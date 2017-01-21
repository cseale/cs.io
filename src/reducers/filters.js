import Immutable from 'immutable';

import {
  FILTERS_TOGGLE,
  FILTERS_CLEAR
} from '../constants/filters';

const FILTERS = [
  { label: 'Github', source: 'GITHUB', className: 'github', active: false }
];

const initialState = new Immutable.fromJS(FILTERS);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERS_TOGGLE:
      const index = state.findIndex(item => item.get('source') === action.filter.source);
      return state.setIn([index, 'active'], !action.filter.active);;
    case FILTERS_CLEAR:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
