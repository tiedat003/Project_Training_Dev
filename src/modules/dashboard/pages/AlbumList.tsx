import { title } from "process";
import DashboardState, { Album } from "../component/DashboardState";
import { DashboardState as AlbumState, resetAlbums, updateAlbum } from "../redux/DashboardReducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../component/dashboard.css"

const AlbumList: React.FC = () => {
    const [albums] = useState([])
    const dispatch = useDispatch();
    const albumsData = useSelector((state: dashboardState) => state.albumsData.albums);

    const handleAlbumChanged = (album: { id: any; }) => {
        const albumToEdit = albums.find((item: { id: any; }) => item.id === album.id);

        if (albumToEdit) {
            console.log('Album đang được chỉnh sửa:', albumToEdit);
            // Thực hiện các logic khác như cập nhật album hoặc hiển thị form chỉnh sửa
        } else {
            console.log('Không tìm thấy album với id:', album.id);
        }
    };

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
                className="btn btn-secondary"
            >
            </button>
            <div className="input-group mb-3">
                <div className="input-group mb-3">
                    <DashboardState
                        type='text'
                        value={title}
                        onChange={handleAlbumChanged}
                    />
                </div>
                <div className="input-group mb-3">
                    <DashboardState
                        type='text'
                        value={title}
                        onChange={handleAlbumChanged}
                    />
                </div>
                <div className="input-group mb-3">
                    <DashboardState
                        type='t'
                        value={title}
                        onChange={handleAlbumChanged}
                    />
                </div>
                <div>
                    <ul>
                        {albums.map((album: any, index) => (
                            <li key={album.id}>
                                {editIndex === index ? (
                                    <div>
                                        <input
                                            type="text"
                                            value={newTitle}
                                            onChange={(e) => setNewTitle(e.target.value)}
                                        />
                                        <button onClick={handleConfirm}>Confirm</button>
                                    </div>
                                ) : (
                                    <div>
                                        {album.title}

                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    )
}
export default AlbumList;