import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css"

class Nav extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={style.Nave}> 
                
                <div  className={style.Links}>
                <button className={style.button}>
                <Link  className={style.Link} to="/about">
                About
                </Link>,
                </button>
                <button className={style.button}>
                <Link  className={style.Link} to="/home">
                    Home
                    </Link>
                    </button>
                <button className={style.button}>
                <Link  className={style.Link} to="/favorites"> Favorites</Link>
                </button>
                </div>
                
                <SearchBar onSearch={this.props.onSearch} />
                <button className={style.button}>
                <Link  className={style.Link} to="/"> Logout</Link>
                </button>
            </div>
            

        )
    }
}

export default Nav;