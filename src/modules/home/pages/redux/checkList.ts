
import { IAlbum } from './../../../../models/album';
import { createCustomAction, ActionType, getType } from "typesafe-actions";


export interface List {
    album?: IAlbum[];
}
export const setCheckList = createCustomAction('home/setCheckList', (data: IAlbum[]) => ({
    data,
}));

const actions = { setCheckList };

type Action = ActionType<typeof actions>
export default function reducer(state: List = {}, action: Action) {
    switch (action.type) {
        case getType(setCheckList):
            return { ...state, album: action.data };
        default:
            return state;
    }
}
