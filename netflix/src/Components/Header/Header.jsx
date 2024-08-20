import React from 'react'

function Header() {
  return (
    <header>
        <div class="logoDiv" data-aos="flip-right">
            <a href="index.html">
                <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol.jpg" alt="" id="logo"/>
            </a>
        </div>
        <form action="">
            <div class="inputsDiv">
                <input type="text" placeholder="Search..." id="searchInput"/>
                <ion-icon name="search-circle-outline" class="ionIcons"></ion-icon>
            </div>
        </form>
    </header>
  )
}

export default Header