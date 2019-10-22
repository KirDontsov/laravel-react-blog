import React, { Component } from "react";
import axios from "axios";

class BlogArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
    }

    componentDidMount() {
        axios
            .get("api/blog/" + this.props.match.params.id)
            .then((response) => {
                this.setState({ post: response.data[0] });
            })
            .catch((err) => console.log(err));
    }
    render() {
        if (this.state) {
            console.log(this.state);
            return (
                <div className="container">
                    <h1>{this.state.post.name}</h1>
                    <p>{this.state.post.body}</p>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default BlogArticle;
