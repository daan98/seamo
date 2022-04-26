import './Setting.css';
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useSelector } from 'react-redux';
import { ThemeContext } from '../App';

function Setting(props){
    const users = useSelector(state => state.users);
    const theme = useContext(ThemeContext);

    const onLoad = (e) => {
        const originalInp =  document.getElementById("originalInput");
        const lightInp = document.getElementById("lightInput");
        const darkInp = document.getElementById("darkInput");

        if(theme.theme === "light"){
            originalInp.defaultChecked = false;
            darkInp.defaultChecked = false;
            lightInp.defaultChecked = true;

        } else if(theme.theme === "original"){
            lightInp.defaultChecked = false;
            darkInp.defaultChecked = false;
            originalInp.defaultChecked = true;

        } else if(theme.theme === "dark"){
            originalInp.defaultChecked = false;
            lightInp.defaultChecked = false;
            darkInp.defaultChecked = true;
        }
    }

    const onMouseEnter = (e) => {
        e.target.style.color = theme.btnForeground;
        e.target.style.backgroundColor = theme.btnBackground;
        e.target.style.borderColor = theme.btnForeground;

    };

    const onMouseLeave = (e) => {
        e.target.style.color = theme.secondColor;
        e.target.style.borderColor = theme.secondColor;
        e.target.style.backgroundColor = theme.initialBtnBackground;
    };

    const onClick = (e) => {
        switch (e.target.innerText) {
            case "Original":
                theme.theme = "original";
                console.log(theme.theme);
                break;

            case "Light":
                theme.theme = "light";
                console.log(theme.theme);
                break;

            case "Dark":
                theme.theme = "dark";
                console.log(theme.theme);
                break;
            default:
                break;
        }
    };

    return(
        <div id="main-element" onLoad={onLoad}>
            <Header page="Setting" />
            <div className="background" style={{ background: theme.strongBackground }}>
                <div className="container setting-container">
                    {users.map(user => (
                        <section key={user._id} className="avatar">
                            <img src={user.image} alt={user.name} style={{ borderColor: theme.secondColor }} />
                            <h3 className='title center' style={{ color: theme.secondColor }}>{user.name}</h3>
                        </section>
                    ))}

                    <section className="user-info">
                        <div className="account">
                            <h1 className="title border" style={{ color: theme.secondColor, borderColor: theme.secondColor }}>Account</h1>
                            <Link to="/password" style={{ color: theme.secondColor, borderColor: theme.secondColor }} onMouseEnter={(e) => onMouseEnter(e)} onMouseLeave={(e) => onMouseLeave(e)} >Update password</Link>
                        </div>

                        <div className="theme">
                            <h1 className="title border" style={{ color:theme.secondColor, borderColor: theme.secondColor  }}>Themes</h1>
                            <label htmlFor="original" style={{ color: theme.secondColor}}>
                                <input id="originalInput" type="radio" name="original" value="select"/>
                                <span id='originalInput' onClick={(e) => onClick(e)}>Original</span>
                            </label>
                            <label htmlFor="light" style={{ color: theme.secondColor }}>
                                <input id="lightInput" type="radio" name="light"/>
                                <span id='lightInput' onClick={(e) => onClick(e)}>Light</span>
                            </label>
                            <label htmlFor="dark" style={{ color: theme.secondColor }}>
                                <input id="darkInput" type="radio" name="dark"/>
                                <span id='darkInput' onClick={(e) => onClick(e)}>Dark</span>
                            </label>
                        </div>
                        <div className="payment">
                            <h1 className="title border" style={{ color: theme.secondColor, borderColor: theme.secondColor }}>Payments</h1>
                            <Link to="paySub/" style={{ color: theme.secondColor, borderColor: theme.secondColor }} onMouseEnter={(e) => onMouseEnter(e)} onMouseLeave={(e) => onMouseLeave(e)} >Pay subscription</Link>
                            <Link to="gift/" style={{ color: theme.secondColor, borderColor: theme.secondColor }} onMouseEnter={(e) => onMouseEnter(e)} onMouseLeave={(e) => onMouseLeave(e)} >Gift</Link>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Setting;