import React, { Component } from 'react';
import './NewBook.css';
import { Redirect } from 'react-router-dom';

class NewBook extends Component {
    state = {
        title: '',
        author: '',
        url_img: '',
        description: ''
        //submitted: false

    }

    postDataHandler = (e) => {
        e.preventDefault();
        const book = this.state;
        this.props.addBook(book);
        this.setState({
            title: '',
            author: '',
            url_img: '',
            description: ''
        }) 
        console.log(this.state)
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        // let redirect = null;
        // if (this.state.submitted){
        //     redirect = <Redirect to="/books" />
        // }
        return(
            <div className="NewBook">
                {/* {redirect} */}
                <h1>Add a Book</h1>
                <form onSubmit={this.postDataHandler}>
                    <label>Title</label>
                    <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                    <label>Author</label>
                    <input type="text" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
                    <label>URL Image</label>
                    <input type="text" value={this.state.url_img} onChange={(event) => this.setState({url_img: event.target.value})}/>
                    <label>Description</label>
                    <input type="text" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})}/>
                    <button type="submit">Add Book</button>
                </form>
            </div>
        );
    }
};

export default NewBook;