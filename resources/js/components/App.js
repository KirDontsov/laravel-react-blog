import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";
import BlogArticle from "./BlogArticle";
import Logo from "./Logo";

import styled from "styled-components";

const Button = styled.a`
    display: inline-block;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: #5ed2f1;
    font-weight: bold;
    font-size: 20px;
    border: 2px solid #5ed2f1;
    text-align: center;
    text-decoration: none;

    &:hover {
        text-decoration: none;
        background: #5ed2f1;
        color: #fff;
        transition: 0.3s;
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid black;
`;

function App() {
    return (
        <div>
            <Nav>
                <Logo />
                <Button as={Link} to="/blog">
                    Blog
                </Button>
            </Nav>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/blog/:id" component={BlogArticle} />
            </Switch>
        </div>
    );
}

export default App;
