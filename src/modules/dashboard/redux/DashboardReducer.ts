import { ActionType, createCustomAction, getType } from 'typesafe-actions';
import { IAlbum, initialState } from '../../../models/album';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface DashboardState {
    [x: string]: any;
    album?: IAlbum[];
}

export const setListAlbums = createCustomAction('auth/setListAlbums', (data: IAlbum[]) => ({
    data,
}));

const actions = { setListAlbums };
type Action = ActionType<typeof actions>;
const store = createStore(reducer, applyMiddleware(thunk));

export default function reducer(state: DashboardState = {}, action: Action) {
    switch (action.type) {
        case getType(setListAlbums):
            return {
                ...state,
                album: action.data,
            };
        default:
            return state;
    }
}

// Tạo slice
const albumSlice = createSlice({
    name: 'albumsData',
    initialState,
    reducers: {
        // Action để cập nhật album
        updateAlbum(state, action: PayloadAction<{ index: number; album: IAlbum }>) {
            const { index, album } = action.payload;
            if (state.albums[index]) {
                state.albums[index] = album;
            }
        },
        // Action để reset danh sách albums về trạng thái ban đầu
        resetAlbums(state, action: PayloadAction<IAlbum[]>) {
            state.albums = action.payload;
        },
    },
});

export const { updateAlbum, resetAlbums } = albumSlice.actions;


