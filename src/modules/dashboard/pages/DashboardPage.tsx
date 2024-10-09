import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import AlbumList from "./AlbumList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DashboardState, setListAlbums } from "../redux/DashboardReducer";



const DashboardPage = () => {
    const [albums, setAlbums] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos?&_start=1&_end=10');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAlbums(data);

            } finally {
                setLoading(false);
            }
        };
        fetchAlbums();
    }, []);

    return (
        <div>
            < AlbumList />
        </div>
    )

}
export default DashboardPage;

