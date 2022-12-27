import React from 'react'
import {Link} from 'react-router-dom'


function LoginPage() {
    return (
        <div className="container-fluid loginPage">
            <div className="left__side">
                <div className="loginImage">
                    <img src="https://res.cloudinary.com/dt5fhcozs/image/upload/v1671613279/New_Project_highzh.png" alt="" />
                </div>
            </div>
            <div className="right__side">
                <div className="text-center">
                    <h2>Sign in to us</h2>
                    <form>
                        <p>
                            <label>Username or email address</label><br />
                            <input type="text" name="first_name" required />
                        </p>
                        <p>
                            <label>Password</label>
                            <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                            <br />
                            <input type="password" name="password" required />
                        </p>
                        <p>
                            <button id="sub_btn" type="submit">Login</button>
                        </p>
                    </form>
                    <footer>
                        <p>First time? <Link to="/register">Create an account</Link>.</p>
                        <p><Link to="/">Back to Products</Link>.</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
