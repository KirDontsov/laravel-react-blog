import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            blogs: []
        };
    }

    componentDidMount() {
        axios.get("api/blog").then((response) => {
            this.setState({
                blogs: response.data
            });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">Blog</div>

                            <div className="card-body">
                                <ul>
                                    {this.state.blogs.map((blog) => (
                                        <li key={blog.id}>
                                            <Link to={"/blog/" + blog.id}>
                                                {blog.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
