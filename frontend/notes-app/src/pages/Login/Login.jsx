import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/Input/PasswordInput';
import { validateEmail, validatePassword } from '../../utils/helper';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [passwordSuccess, setPasswordSuccess] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        // clear previous messages
        setError('');
        setPasswordError('');
        setPasswordSuccess('');

        // validate email
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // check if password is empty
        if(!password) {
            setPasswordError('Please enter the password');
            return;
        }

        // validate password strength
        if(!validatePassword(password)) {
            setPasswordError('Please choose a stronger password with at least 6 characters, including uppercase, lowercase, number, and symbols.');
        } 

        // if password if valid
        if(validatePassword(password)){
            setPasswordSuccess('Your password meets the strength requirements!');

            // Make success message disapper after 2 seconds
            setTimeout(() => {
                setPasswordSuccess("");
            }, 2000);
        }

        // setError("");

        //Login API call
    };

    return (
        <>
            <Navbar />

            <div className='flex items-center justify-center mt-28'>
                <div className='w-96 border rounded bg-white px-7 py-10'>
                    <form onSubmit={handleLogin}>
                        <h4 className='text-2xl mb-7'>Login</h4>

                        <input type='text' placeholder='Email' className='input-box' 
                            value={email}
                            onChange={(e) => {
                                setError('');
                                setEmail(e.target.value)
                            }}
                        />

                        <PasswordInput value={password}
                            onChange={(e) => {
                                setPasswordError('');
                                setPassword(e.target.value)
                            }}
                        />

                        {/* General Error */}
                        {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}
                
                        { /* Password Error and Success */}
                        {passwordError && <p className='text-red-500 text-xs pb-1'>{passwordError}</p>}

                        {passwordSuccess && <p className='text-green-500 text-xs pb-1'>{passwordSuccess}</p>}

                        <button type='submit' className='btn-primary'>
                            Login
                        </button>

                        <p className='text-sm text-center mt-4'>
                            Not registered yet?{" "}
                            <Link to='/signup' className='font-medium text-primary underline'>
                                Create an Account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
        
    );
}

export default Login;