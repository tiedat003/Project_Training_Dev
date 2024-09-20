export interface IAlbum {
    albums: string,
    albumId: Number,
    id: Number,
    title: string,
    url: string,
    thumbnailUrl: string
}

// Định nghĩa kiểu cho state albumsData
export interface IAlbumsState {
    albums: IAlbum[];
    loading: boolean;
    error: string | null;
}

// Khởi tạo state ban đầu
export const initialState: IAlbumsState = {
    albums: [],
    loading: false,
    error: null,
};