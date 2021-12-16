import React, {Component} from "react";

export class ShortNewsCoponent extends Component {


    render(){
        return (
            <article className="short-news flex-container">
                <div className="short-news-image-container">
                    {/* TODO: Add news Image */}
                </div>
                <div className="short-news-text">
                    <header>News Header</header>            
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                    </p>
                </div>
            </article>
        )
    }
}