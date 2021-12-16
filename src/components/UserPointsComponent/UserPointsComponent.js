import React, {Component} from "react";

export class UserPointsComponent extends Component{

    render(){
        return(
            <div className="flex-container user-points">
                <div className="points-amount">{this.props.amount}</div>
                <div className="points-icon">
                    {/* TODO: Add coins image */}
                    *
                </div>
            </div>
        )
    }
}