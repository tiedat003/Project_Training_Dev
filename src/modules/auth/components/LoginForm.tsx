import { useState, useEffect, useCallback, useRef, ChangeEvent } from "react";
import React from "react";
import LoginPage from "../pages/LoginPage";
import RegisterForm from "./RegisterForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormattedMessage } from "react-intl";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Form.css"
import InputComponent from "../../common/components/InputComponent";

export interface LoginParams {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface LoginValidation {
    email: string;
    password: string;
}
// interface Props {
//     onLogin(values: LoginParams): void;
//     loading: boolean;
//     errorMessage: string;
// }

const LoginForm = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormValues({
            ...formValues,
            [id]: value
        })
    }

    const handleSave = () => {
        localStorage.setItem('userEmail', JSON.stringify(formValues.email))
        localStorage.setItem('userPassword', JSON.stringify(formValues.password))
    };
    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail')
        if (!userEmail) {
            return
        }
        setFormValues({
            email: userEmail,
            password: ''
        })
        console.log(userEmail)

    }, [])

    const rememberCheck = useRef<HTMLInputElement>(null)
    const [email, setEmail] = useState(localStorage.getItem("userEmail") || "");
    const [password, setPassword] = useState(localStorage.getItem("userPassword") || "");
    function remember() {
        if (rememberCheck.current && rememberCheck.current.checked) {
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password)
        }
        else {
            localStorage.setItem("userEmail", "");
            localStorage.setItem("userPassword", "")
        }
    }

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
            setErrorEmail('');
        }
    }, [formValues.email]);

    // Validate Password
    const [errorPass, setErrorPass] = useState('')
    useEffect(() => {
        if (formValues.password) {
            if (formValues.password.length < 8) {
                setErrorPass('Vui lòng nhập đủ 8 kí tự');
            } else {
                setErrorPass('');
            }
        } else {
            setErrorPass('');
        }
    }, [formValues.password]);

    // Validate Form
    const [errors, setErrors] = useState({})
    const validateForm = () => {
        const newError: any = {};
        if (!formValues.email) newError.email = "Vui lòng nhập email"
        if (!formValues.password) newError.password = "Vui lòng nhập mật khẩu"
        setErrors(newError)
        return Object.keys(newError).length === 0;
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        debugger
        if (validateForm()) {
            console.log('Form submitted', formValues);
        }
    }

    return (

        <form>
            {/* Email */}
            <InputComponent
                type='text'
                value={formValues.email}
                id='email'
                inputChange={handleInputChange}
                error={errorEmail}
            />

            {/* Password */}
            <InputComponent
                type='password'
                value={formValues.password}
                id='password'
                inputChange={handleInputChange}
                error={errorPass}
            />

            {/* RememberMe */}
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="invalidCheck"
                    ref={rememberCheck}
                    onChange={remember}
                ></input>
                <label
                    className="form-check-label"
                    htmlFor="invalidCheck">
                    <FormattedMessage id="rememberMe" />
                </label>
            </div>

            {/* Button */}
            <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSave}
                onSubmit={handleSubmit}
                disabled={!formValues.email || !formValues.password}
            ><FormattedMessage id="login" />
            </button>

            <Link to="/register">
                <button
                    type="submit"
                    className="btn btn-secondary"
                ><FormattedMessage id="register" />
                </button>
                <Route path="/register" component={RegisterForm} />
            </Link>
        </form>
    );
}

export default LoginForm;