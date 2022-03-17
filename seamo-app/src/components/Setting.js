import './Setting.css';
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useSelector } from 'react-redux';

function Setting(props){
    const users = useSelector(state => state.users);
    
    const onChecked = (e) => {
        const originalInp =  document.getElementById("originalInput");
        const lightInp = document.getElementById("lightInput");
        const darkInp = document.getElementById("darkInput");

        if(e.target.innerText === "Light"){
            originalInp.defaultChecked = false;
            darkInp.defaultChecked = false;
            lightInp.defaultChecked = true;

        } else if(e.target.innerText === "Original"){
            lightInp.defaultChecked = false;
            darkInp.defaultChecked = false;
            originalInp.defaultChecked = true;

        } else if(e.target.innerText === "Dark"){
            originalInp.defaultChecked = false;
            lightInp.defaultChecked = false;
            darkInp.defaultChecked = true;
        }
    }

    return(
        <div id="main-element">
            <Header />
            <div className="background">
                <div className="container setting-container">
                    {users.map(user => (
                        <section key={user._id} className="avatar">
                            <img src={user.image} className="" />
                            <h3 className='yellow title center'>{user.name}</h3>
                        </section>
                    ))}

                    <section className="user-info">
                        <div className="account">
                            <h1 className="yellow title border">Account</h1>
                            <Link to="/password" className="yellow">Update password</Link>
                        </div>

                        <div className="theme">
                            <h1 className="yellow title border">Themes</h1>
                            <label htmlFor="original" className="yellow">
                                <input id="originalInput" type="radio" name="original" value="select"  />
                                <span onClick={(e) => onChecked(e)}>Original</span>
                            </label>
                            <label htmlFor="light" className="yellow">
                                <input id="lightInput" type="radio" name="light" value="no-select" />
                                <span onClick={(e) => onChecked(e)}>Light</span>
                            </label>
                            <label htmlFor="dark" className="yellow">
                                <input id="darkInput" type="radio" name="dark" value="no-select" />
                                <span onClick={(e) => onChecked(e)}>Dark</span>
                            </label>
                        </div>

                        <div className="payment">
                            <h1 className="yellow title border">Payments</h1>
                            <Link to="paySub/" className="yellow">Pay subscription</Link>
                            <Link to="gift/" className="yellow">Gift</Link>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Setting;