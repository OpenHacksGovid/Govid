import React from 'react';

class News extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            url: '',
            published: ''
           
        }
    }

    componentDidMount() {
        this.getNews(); 
    }

    getNews() {
            const url = "https://covid19-us-api.herokuapp.com/news"
            fetch(url)
                .then(res => res.json())
                .then(res => this.setState({ title: res.message[0].data,
                    url: res.message[0].data,
                    published: res.message[0].data}))
                .catch(err => console.log(err));
    }
    
    render() {
        const { title, url, published } = this.state;
        return (
        <div>
            <p>Hello</p>
            <p>{title}</p>
            <p>{url}</p>
            <p>{published}</p>
         </div>
        )
    }
}

export default News;