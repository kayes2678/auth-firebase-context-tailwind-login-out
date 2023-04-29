// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link, useActionData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);


    const handleLogin = event => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                from.reset();
            })
            .catch(error => {
                console.log(error)
            })

    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error)
        })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Login!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='mb-4 ml-8'>
                            <Link to="/register" className="label-text-alt link link-hover">
                                New to auth master ? Please Register
                            </Link>
                        </p>
                        <div>
                            <button onClick={handleGoogleSignIn} className="btn btn-active btn-primary">Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;