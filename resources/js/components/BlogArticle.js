import React, { Component } from "react";
import axios from "axios";
import Blog from "./Blog";

class BlogArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
    }

    componentDidMount() {
        axios
            .get("/api/blog/" + this.props.match.id)
            .then((response) => {
                this.setState({ post: response.data[0] });
            })
            .catch((err) => console.log(err));
    }
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <h1>Hello!</h1>
            </div>
        );
    }
}

export default BlogArticle;
