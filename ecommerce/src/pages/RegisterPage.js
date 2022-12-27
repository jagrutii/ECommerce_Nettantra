import React from 'react'
import { Link } from 'react-router-dom'

function RegisterPage() {
    return (
        <div className="container-fluid registerPage">
            <div className="left__side">
                <div className="loginImage">
                    <img src="https://res.cloudinary.com/dt5fhcozs/image/upload/v1671613279/New_Project_highzh.png" alt="" />
                </div>
            </div>
            <div className="right__side">
                <div className="text-center m-5-auto">
                    <h2>Join us</h2>
                    <h5>Create your personal account</h5>
                    <form>
                        <p>
                            <label>Username</label><br />
                            <input type="text" name="first_name" required />
                        </p>
                        <p>
                            <label>Email address</label><br />
                            <input type="email" name="email" required />
                        </p>
                        <p>
                            <label>Password</label><br />
                            <input type="password" name="password" requiredc />
                        </p>
                        <p>
                            <button id="sub_btn" type="submit">Register</button>
                        </p>
                    </form>
                    <footer>
                        <p><Link to="/">Back to Products</Link>.</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
