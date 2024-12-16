import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Context } from '../../Context/Context'

const Navbar = () => {

    const [navbarVisible, setNavbarVisible] = useState(false)
    const {setCategory} = useContext(Context)

    window.addEventListener("scroll", () => {
        window.scrollY > 200 ? setNavbarVisible(true) : setNavbarVisible(false)
    })
    return (
        <div>
            <nav class={` fixed-top navbar navbar-expand-lg ${navbarVisible ? "Colored" : ""}`}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <span class="nav-link active" aria-current="page" href="#" onClick={(e) => {setCategory(e.target.innerText)}}>Home</span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link" href="#" onClick={(e) => {setCategory(e.target.innerText)}}>Business</span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link" href="#" onClick={(e) => {setCategory(e.target.innerText)}}>science</span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link" href="#" onClick={(e) => {setCategory(e.target.innerText)}}>entertainment</span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link" href="#" onClick={(e) => {setCategory(e.target.innerText)}}>sports</span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link" href="#" onClick={(e) => {setCategory(e.target.innerText)}}>technology</span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link" href="#" onClick={(e) => {setCategory(e.target.innerText)}}>general</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
