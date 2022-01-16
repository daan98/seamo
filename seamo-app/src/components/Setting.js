import React from "react";
import { Link } from "react-router-dom";
import { getUserInfo } from "./Data";
import Footer from "./Footer";
import Header from "./Header";

function Setting(){
    const { img } = getUserInfo;
    return(
        <div>
            <Header />
            <div className="background">
                <div className="container setting-container">
                    <section className="avatar">
                        <img src={img} className="" />
                    </section>

                    <section className="user-info">
                        <div className="account">
                            <h1 className="yellow title border">Account</h1>
                            <Link to="/password" className="yellow">Update password</Link>
                        </div>

                        <div className="theme">
                            <h1 className="yellow title border">Themes</h1>
                            <input type="radio" name="original" />
                            <label htmlFor="original" className="yellow">Original</label>
                            <input type="radio" name="light" />
                            <label htmlFor="light" className="yellow">Light</label>
                            <input type="radio" name="dark" />
                            <label htmlFor="dark" className="yellow">Dark</label>
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