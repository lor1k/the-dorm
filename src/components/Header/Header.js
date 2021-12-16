import React, {Component} from "react";
import { HeaderUserInfo } from "../HeaderUserInfo/HeaderUserInfo";


export class Header extends Component {


    render(){
        return (
            <header className="page-header">
                <div className="flex-container justify-between">
                    <div className="logo-container">TheDorm</div>
                    <HeaderUserInfo/>
                </div>
            </header>
        )
    }
}