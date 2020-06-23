import React, { Component } from 'react'
import './hello.css'

export class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles : []
        }
    }
    componentDidMount() {
        fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=63977ed5d2af4d09bf0f976835151533')
        .then((response)=> {
            return response.json();
        })
        .then((data) => {
            this.setState({
                articles : data.articles
            })
        })
    }
    render() {
        console.log(this.state)
        return (
            <div className='top container'>
                {this.state.articles.map((item, index) => {
                    return(
                        
                        <div>
                             <img src={item.urlToImage}/>
                            <h2>{item.title}</h2>
                           
                            <p>{item.content}</p>
                            <a href={item.url}>Read more..</a>
                        </div>
                        
                    )
                })}
            </div>
        
        )
    }
}

export default Hello
