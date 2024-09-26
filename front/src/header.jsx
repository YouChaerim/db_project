import React from "react";
import { Link } from "react-router-dom";
import './container.css';

function Header() {

    return (
        <div className="container">
            <div>
                <Link to="/">Home</Link>
                <Link to="/signup">회원가입</Link>
                <Link to="/signin">로그인</Link>
            </div>
        </div>
    );
}

export default Header;