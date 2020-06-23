import React, { Component } from "react";
import './hello.css'
/*import { Hello } from "./compnents/hello";*/

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        fetch('http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=63977ed5d2af4d09bf0f976835151533')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({
                articles : myJson.articles
            });
        });
    }
    render() {
        console.log(this.state);
        
        return (
            
            <div className="container">
                
                {this.state.articles.map((item, index) => {
                    return(
                        <div>
                          <h2>{item.title}</h2>
                           <img src={item.urlToImage} />
                           <p>{item.content}</p>
                           <a href={item.url}>Read more</a>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default App
