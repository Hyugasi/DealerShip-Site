import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            This is home
            <Link to="/manage">
                <button>Login</button>
            </Link>
        </div>
    )
}

export default Home