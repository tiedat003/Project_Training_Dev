import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { AppState } from "../../../../redux/reducer";

const ListPage = () => {
    const [photos, setPhotos] = useState([])
    const { album } = useSelector((state: AppState) => ({
        album: state.home.album,
    })) || [];
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setPhotos(data)
            })
    }, []);
}

export default ListPage;