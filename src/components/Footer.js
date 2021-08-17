import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return(
            <footer className="app__footer">
                <p><a class="app__footer-link" href="https://newsapi.org/">Powered by News API</a></p>
            </footer>
        );
    }
}