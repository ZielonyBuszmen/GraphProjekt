
// przykładowy action creator

import { INCREMENT_LIKES } from '../reducers/likesReducer';

export function increment(ktory, info) {
  return {
    type: INCREMENT_LIKES,
    ktory,
    info,
    dodatkowe: 'jakies inne dane',
  };
}
