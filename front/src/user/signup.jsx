import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../container.css';

function SignUp () {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        user_id: '',
        password: '',
        confirmpassword: '',
        name: ''
    });

    const onClickSaveData = () => {
        const { password, confrimpassword } = userData;

        if (password != confrimpassword) {
            alert('비밀번호가 일치하지 않습니다');
            return;
        }
        axios
            .post('http://localhost:8080/signup', {...userData})
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
            <h1>회원가입</h1>
            <input name="user_id" type="text" placeholder="학번을 입력하세요" onChange={userDataChange} /> <br />
            <input name="password" type="password" placeholder="비밀번호를 입력하세요" onChange={userDataChange} /> <br />
            <input name="confirmpassword" type="password" placeholder="비밀번호를 재입력하세요" onChange={userDataChange} /> <br />
            <input name="name" type="text" placeholder="이름을 입력하세요" onChange={userDataChange} /> <br />
            <button onClick={onClickSaveData} >회원가입하기</button>
        </div>
    );
}

export default SignUp;