import React from 'react';
import {render} from 'react-dom';
import * as $ from 'jquery'
import Post from '@models/Post';
import './styles/style.css';
import './styles/less.less';
import './styles/sass.scss';
import webpackLog from './assets/webpack-logo.png';
import './babel';
import json from './assets/json';
import xml from './assets/data.xml'
import csv from './assets/data.csv';

const post = new Post('Webpack Post Title', webpackLog);

// $('pre').html(post.toString());

console.log(post.toString());
// console.log('JSON', json);
// console.log('XML', xml);
// console.log('CSV', csv);

const App = () => (
    <div className="container">
        <h1>Webpack Intro</h1>
        <hr/>
        <div className="logo"></div>
        <pre className="code"></pre>
        <div className="less sass">
            <h2>Less</h2>
        </div>
    </div>
);

render(<App/>, document.getElementById('root'))