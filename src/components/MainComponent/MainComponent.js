import React, {Component} from "react";
import { FeedComponent } from "../FeedComponent/FeedComponent";
import { LeaderBoardComponent } from "../LeaderBoardComponent/LeaderBoardComponent";


export class MainComponent extends Component {


    render(){
        return (
        <main className="flex-container">
            <FeedComponent/>
            <LeaderBoardComponent/>
        </main>
        )
    }
}