import { useState, useEffect, ChangeEvent } from "react";
import React from "react";
import RegisterPage from "../pages/RegisterPage";
import LoginForm from "./LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Form.css"
import { FormattedMessage } from "react-intl";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { error } from "console";


const RegisterForm = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        rePassword: '',
        name: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormValues({
            ...formValues,
            [id]: value
        })
        validateEmail(formValues.email)
    }
    function validateEmail(value: string) {
        throw new Error("Function not implemented.");
    }

    const handleSave = () => {
        localStorage.setItem('userEmail', formValues.email)
        localStorage.setItem('userPassword', formValues.password)
        localStorage.setItem('userName', formValues.name)
    };

    // Validate Email
    const [errorEmail, setErrorEmail] = useState('')
    useEffect(() => {
        if (formValues.email) {
            const validateEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!validateEmail.test(formValues.email)) {
                setErrorEmail('Nhập đúng định dạng email');
            } else {
                setErrorEmail('')
            }
        } else {
            setErrorEmail('Vui lòng nhập email');
        }
    }, [formValues.email]);

    // Validate Password
    const [errorRePass, setErrorRePass] = useState('')
    useEffect(() => {
        if (formValues.rePassword) {
            if (formValues.rePassword.length < 8) {
                setErrorRePass('Vui lòng nhập đủ 8 kí tự');
            } else {
                setErrorRePass('');
            }
        } else {
            setErrorRePass('Vui lòng nhập mật khẩu');
        }
    }, [formValues.rePassword]);

    // Validate RePass
    const [errorPass, setErrorPass] = useState('')
    useEffect(() => {
        if (formValues.password) {
            if (formValues.rePassword !== formValues.password) {
                setErrorPass('Vui lòng nhập đúng mật khẩu');
            } else {
                setErrorPass('')
            }
        } else {
            setErrorPass('Vui lòng nhập lại mật khẩu');
        }
    }, [formValues.password]);

    // Validate Name
    const [errorName, setErrorName] = useState('')
    useEffect(() => {
        if (formValues.name) {
            const validateName = /^[a-zA-Z\s]+$/;
            if (!validateName.test(formValues.name)) {
                setErrorName('Nhập đúng định dạng họ và tên')
            } else {
                setErrorName('')
            }
        } else {
            setErrorName('Vui lòng nhập họ và tên')
        }
    })


    return (
        <form>
            {/* Email */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    <FormattedMessage id="email" />
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                ></input>
                {errorEmail && <p style={{ color: "red" }}>{errorEmail}</p>}
            </div>

            {/* Password */}
            <div className="mb-3">
                <label htmlFor="rePassword" className="form-label" id="rePassword">
                    <FormattedMessage id="password" />
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="rePassword"
                    value={formValues.rePassword}
                    onChange={handleInputChange}
                    required
                ></input>
                {errorRePass && <p style={{ color: "red" }}>{errorRePass}</p>}
            </div>

            {/* Repeat Password */}
            <div className="mb-3">
                <label htmlFor="password" className="form-label" id="password">
                    <FormattedMessage id="repeatPassword" />
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    required
                ></input>
                {errorPass && <p style={{ color: "red" }}>{errorPass}</p>}
            </div>

            {/* Name */}
            <div className="mb-3">
                <label htmlFor="name" className="form-label" id="name">
                    <FormattedMessage id="name" />
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                ></input>
                {errorName && <p style={{ color: "red" }}>{errorName}</p>}
            </div>

            {/* Gender */}
            <div className="mb-3">
                <label htmlFor="gender" className="form-label" id="gender">
                    <FormattedMessage id="gender" />
                </label>
                <select className="form-select form-select-sm" aria-label="Lagre select example">
                    <option selected>--select an option--</option>
                    <option value="1">Nam</option>
                    <option value="2">Nữ</option>
                    <option value="3">Khác</option>
                </select>
            </div>

            {/* Region */}
            <div className="mb-3">
                <label htmlFor="region" className="form-label" id="region">
                    <FormattedMessage id="region" />
                </label>
                <select className="form-select form-select-sm" aria-label="Large select example">
                    <option selected>--select an option--</option>
                    <option value="1">1</option>
                    <option value="2">12</option>
                    <option value="3">123</option>
                </select>
            </div>

            {/* State */}
            <div className="mb-3">
                <label htmlFor="state" className="form-label" id="state">
                    <FormattedMessage id="state" />
                </label>
                <select className="form-select form-select-sm" aria-label="Large select example">
                    <option selected>--select an option--</option>
                    <option value="1">3</option>
                    <option value="2">32</option>
                    <option value="3">321</option>

                </select>
            </div>

            <Link to='/dashboard'>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSave}
                ><FormattedMessage id="register" />
                </button>
            </Link>

            <Link to='/login'>
                <button
                    type="submit"
                    className="btn btn-secondary"
                ><FormattedMessage id="login" />
                </button>
                <Route path="/login" component={LoginForm} />
            </Link>
        </form>
    );
}


export default RegisterForm

