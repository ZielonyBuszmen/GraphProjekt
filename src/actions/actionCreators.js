
// przykładowy action creator

import { INCREMENT_LIKES } from '../reducers/posts';

export function increment(index, info) {
  return {
    type: INCREMENT_LIKES,
    index,
    info,
    dodatkowe: 'jakies inne dane',
  };
}
