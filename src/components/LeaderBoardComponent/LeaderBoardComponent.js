import React, {Component} from "react";
import { UserPointsComponent } from "../UserPointsComponent/UserPointsComponent";


export class LeaderBoardComponent extends Component {


    render(){
        return (
        <sidebar className="leader-board sidebar card">   
            <header> <h2 className="text-ceneter">ТОП ПРИКОЛИСТОВ</h2> </header> 
            <div className="leader-board-user-list">
                <div className="leader-board-user flex-container">
                    <div className="leader-board-user-place">
                        1.
                    </div>
                    <div className="leader-board-user-name">
                        John Doe
                    </div>
                    <div className="leader-board-user-points">
                        <UserPointsComponent amount={228} />
                    </div>
                </div>
            </div>
        </sidebar>
        )
    }
}