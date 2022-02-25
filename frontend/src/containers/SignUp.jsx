import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../reducks/users/operations';
import CrossX from '../assets/img/cross.png';
import Home from '../containers/Home';
import { push } from 'connected-react-router';

const SignUp = () => {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };
    const [user_name, setUserName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState('');
    const inputUserName = event => {
        setUserName(event.target.value);
    };
    const inputEmail = event => {
        setEmail(event.target.value);
    };
    const inputPassword = event => {
        setPassword(event.target.value);
    };
    const signUpButton = () => {
        dispatch(signUp(user_name, email, password));
        setUserName('');
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <Home />
            <section class="popup">
                <div class="popup-inner">
                    <div class="popup-preview">
                        <span onClick={closeButton}>
                            <a href="/">
                                <img src={CrossX} class="close" />{' '}
                            </a>
                        </span>
                        <div class="input">
                            <h2>PotatoCorner</h2>
                            <h1>SIGN UP</h1>
                            <input
                                type="text"
                                class="form-control"
                                onChange={inputUserName}
                                placeholder="Enter User Name"
                                value={user_name}
                                required
                            />
                            <br />
                            <br />
                            <input
                                type="email"
                                class="form-control"
                                onChange={inputEmail}
                                placeholder="Enter email"
                                value={email}
                                required
                            />
                            <br />
                            <br />
                            <input
                                type="password"
                                class="form-control"
                                onChange={inputPassword}
                                placeholder="Password"
                                value={password}
                                required
                            />
                        </div>
                        <br />

                        <button class="button" onClick={signUpButton}>
                            SIGN UP
                        </button>
                        <p class="bottom">
                            Already a Member?{' '}
                            <a href="/signin">
                                <u>Sign In.</u>
                            </a>{' '}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;
