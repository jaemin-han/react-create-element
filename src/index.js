// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';

// const title = React.createElement('h1', {}, 'My First React Code');
// const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');
// const container = React.createElement('div', {}, [title, paragraph]);
// passing down sibling from container


const list = 
    React.createElement('div', {}, 
    React.createElement('h1', {}, 'My favorite ice cream flavor'),
    React.createElement('ul', {},
        [
            React.createElement('li', { className: 'brown'}, 'Chocolate'),
            React.createElement('li', { className: 'white' }, 'Vanila'),
            React.createElement('li', { className: 'yellow' }, 'Banana')
        ]
    )
);





ReactDOM.render(
    list,
    document.getElementById('global')
)