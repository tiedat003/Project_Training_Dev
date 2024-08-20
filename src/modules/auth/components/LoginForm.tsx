import { useState, useEffect, useCallback, useRef, ChangeEvent } from "react";
import React from "react";
import LoginPage from "../pages/LoginPage";
import RegisterForm from "./RegisterForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormattedMessage } from "react-intl";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Form.css"
import { validateLogin, validLogin } from "../utils";
import { log } from "console";

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
    // const { onLogin, loading, errorMessage } = props;
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
    useEffect(() => {

        console.log(formValues.email)
    }, [formValues.email])

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

    return (

        <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label" id="email">
                    <FormattedMessage id="email" />
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                ></input>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label" id="password">
                    <FormattedMessage id="password" />
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                ></input>
            </div>

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

            <Link to='/dashboard'>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSave}
                ><FormattedMessage id="login" />
                </button>
                {/* <Route path="/dashboard" component={DashboardForm} /> */}
            </Link>


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