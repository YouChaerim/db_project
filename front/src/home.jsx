import React, { useEffect, useState } from "react";
import axios from "axios";
import './container.css';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState([]);

    useEffect(() => {
        (
            async () => {
                const response = await axios.get('http://localhost:8080');
                setUserId(response.data.user_id);
            }
        )()
    }, []);

    const onClickLogout = () => {
        axios
            .get('http://localhost:8080/logout')
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        window.location.reload();
    }

    return (
        <div className="container">
            <h1>Home</h1>
            <p>안녕하세요 {userId}</p>
            <button onClick={onClickLogout}>로그아웃</button>
        </div>
    );
}

export default Home;