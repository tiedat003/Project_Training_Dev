import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import DashboardState from "../component/DashboardState";
import AlbumList from "./AlbumList";

const DashboardPage = () => {
    const [albums, setAlbums] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    const dispatch = useDispatch<ThunkDispatch<typeof DashboardState, null, Action<string>>>();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setAlbums(data);  // Lưu dữ liệu vào state
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [dispatch]);

    // Hiển thị dữ liệu ảnh sau khi fetch thành công


    // const [title, setTitle] = useState("");
    // const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    // // Handle title change
    // const handleAlbumChanged = (e: { target: { value: any; }; }) => {
    //     const newTitle = e.target.value;
    //     setTitle(newTitle);
    //     setIsButtonDisabled(newTitle.trim() === ""); // Disable if title is empty
    //     console.log(newTitle);
    // };

    return (
        <> {AlbumList} </>

    )

}
export default DashboardPage;

