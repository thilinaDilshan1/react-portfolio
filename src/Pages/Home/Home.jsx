import React from 'react'

export default function Home() {
  return (
    <div>
        <header class="header">
        <a href="#" class="logo">Portfolio</a>

        <nav class="navbar">
            <a href="#" style="--i:1" class="active">Home</a>
            <a href="about.html" style="--i:2">About</a>
            <a href="skills.html" style="--i:3">Skills</a>
            <a href="#" style="--i:4">Projects</a>
            <a href="contact.html" style="--i:5">Contact</a>
        </nav>

        <div class="mob-nav">

            <input type="checkbox" id="active" />
            <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>

            <div class="wrapper">
                <ul>
                    <li><a class="mob-nav-item" href="#" style="--i:1" class="active">Home</a></li>
                    <li><a class="mob-nav-item" href="about.html" style="--i:2">About</a></li>
                    <li><a class="mob-nav-item" href="skills.html" style="--i:3">Skills</a></li>
                    <li><a class="mob-nav-item" href="#" style="--i:4">Projects</a></li>
                    <li><a class="mob-nav-item" href="contact.html" style="--i:5">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>
    </div>
  )
}
