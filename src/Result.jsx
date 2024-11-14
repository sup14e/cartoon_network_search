import "./Result.css";
import "./Char.css";
import { useState } from "react";
import logo from "./assets/picture/logo.png"

function Result() {
    // const [currentPage, setcurrentPage] = useState(1)
    // const [postPerPage, setpostPerPage] = useState(10)
    
    // const lastPostIndex = currentPage * postPerPage;
    // const firstPostIndex = lastPostIndex - postPerPage;
    // const currentPost = coinsData.slice(firstPostIndex,lastPostIndex);

    return (<>
        <div className="BG">
            <div className="navbar">
                <a href="/"><img src={logo} alt="Logo"/></a>
                <div className="search-nav">
                    <input type="text" placeholder="Search" className="search-bar"/>
                </div>
            </div>

            <h1 className="return">Characters Found: #</h1>

            <div className="charList">
                {/* first row */}
                <a href="/character"><img/> <p>Name</p></a>
                <a href="/character"><img/> <p>Name</p></a>
                <a href="/character"><img/> <p>Name</p></a>
                <a href="/character"><img/> <p>Name</p></a>
                <a href="/character"><img/> <p>Name</p></a>
                {/* second row */}
                <a href="/character"><img/> <p>Name</p></a>
                <a href="/character"><img/> <p>Name</p></a>
                <a href="/character"><img/> <p>Name</p></a>
                <a href="/character"><img/> <p>Name</p></a>
                <a href="/character"><img/> <p>Name</p></a>
            </div>


        </div>
    </>)
}

export default Result;