import { title } from "process";
import DashboardState, { Album } from "../component/DashboardState";
import { DashboardState as AlbumState, resetAlbums, updateAlbum } from "../redux/DashboardReducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../component/dashboard.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const AlbumList = () => {

    const albumsData = useSelector((state: AlbumState) => state.albums.album) || [];
    useEffect(() => {
        console.log(albumsData);
    }, []);


    // State để quản lý album đang chỉnh sửa
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [newTitle, setNewTitle] = useState('');

    const handleSubmit = () => { alert('Submit success') }

    return (
        <div className="list-group">
            <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}> Submit </button>
            <button
                type="reset"
                className="btn btn-secondary"> Reset </button>
            <div>
                <ul>
                    {albumsData.map((album: any, index: number | null) => (
                        <li key={album.id}>
                            {editIndex === index ? (
                                <div>
                                    <input
                                        type="text"
                                        value={newTitle}
                                        onChange={(e) => setNewTitle(e.target.value)}
                                    />
                                </div>
                            ) : (
                                <div>
                                    {album.title}
                                    {album.thumbnailUrl}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default AlbumList;

function submitData(inputData: any): any {
    throw new Error("Function not implemented.");
}
