import React from "react";
import LoginPage from "../pages/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginForm = () => {
    return (
        <form
            style={{
                padding: 20,
                maxWidth: "500px",
                border: "2px solid #8bb1e9",
                margin: "50px",
            }}>
            <div className="mb-3">
                <label htmlFor="loginFormEmail" className="form-label">Địa chỉ Email</label>
                <input type="email" className="form-control" id="loginFormEmail" aria-describedby="emailHelp"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="loginFormPassword" className="form-label">Mật khẩu</label>
                <input type="password" className="form-control" id="loginFormPassword"></input>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="loginCheck"></input>
                <label className="form-check-label" htmlFor="loginCheck">Lưu thông tin đăng nhập</label>
            </div>
            <button type="submit" className="btn btn-primary">Đăng nhập</button>
        </form>
    );
}

export default LoginForm;