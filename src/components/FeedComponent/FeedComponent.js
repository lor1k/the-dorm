import React, {Component} from "react";

import { ShortNewsCoponent } from "../ShortNewsCoponent/ShortNewsCoponent";

export class FeedComponent extends Component {

    render(){
        return (
           <div className="feed main-component card">
               <header className="feed-header">
                   <h1>Новости</h1>
               </header>
               <div className="news-list">
                   <ShortNewsCoponent/>
                   <ShortNewsCoponent/>
                   <ShortNewsCoponent/>
                   <ShortNewsCoponent/>
               </div>
               
           </div>
        )
    }
}