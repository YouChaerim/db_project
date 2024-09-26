import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../container.css'

function SignIn () {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        user_id: '',
        password: ''
    });

    const onClickPostData = () => {
        axios
            .post('http://localhost:8080/signin', {...userData})
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function userDataChange (e) {
        const { name, value } = e.target;
        setUserData(prev => (
            {
                ...prev,
                [name]: value
            }
        ));
    }

    return (
        <div className="container">
            <h1>로그인</h1>
            <input name="user_id" type="text" placeholder="학번을 입력하세요" onChange={userDataChange} /> <br />
            <input name="password" type="password" placeholder="비밀번호를 입력하세요" onChange={userDataChange} /> <br />
            <button onClick={onClickPostData} >로그인</button>
        </div>
    );
}

export default SignIn;