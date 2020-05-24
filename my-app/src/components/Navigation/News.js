import React from 'react';

class News extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articles: [], 
        }
    }

    async componentDidMount() {
        const url = "https://covid19-us-api.herokuapp.com/news";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({articles: data.message})
        console.log(data.message)
    }

    render() {
        this.componentDidMount();
        return (
        <div>
            {this.state.articles.map(article => (
                <div key={article.id}>
                    <p>{article.title}</p>
                    <a href={article.url} target="_blank" 
                    rel="noopener noreferrer">{article.url}</a>
                    <p>{article.published}</p> 
                </div>
            ))} 
         </div>
        );
    }
}

export default News;