import { ActionType, createCustomAction, getType } from 'typesafe-actions';
import { IAlbum } from '../../../../models/album';

export interface HomeState {
  album?: IAlbum[];
}

export const setAlbums = createCustomAction('home/setAlbums', (data: IAlbum[]) => ({
  data,
}));

const actions = { setAlbums };

type Action = ActionType<typeof actions>;

export default function reducer(state: HomeState = {}, action: Action) {
  switch (action.type) {
    case getType(setAlbums):
      return { ...state, album: action.data };
    default:
      return state;
  }
}
