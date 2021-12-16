import React, {Component} from "react";
import { UserPointsComponent } from "../UserPointsComponent/UserPointsComponent";


export class HeaderUserInfo extends Component {


    render(){
        return (
            <div className="flex-container header-user-info">
                <div className="user-name">John Doe</div>  
                <UserPointsComponent amount={228} />
            </div>
        )
    }
}