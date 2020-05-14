import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Home() {
    return (
        <div className="home">
            <form>
                <input type="text" placeholder="Username" /><br />
                <input type="text" placeholder="Password" />
            </form>
            <Link to="/manage">
                <button>Login</button>
            </Link>
        </div>
    )
}

export default Home