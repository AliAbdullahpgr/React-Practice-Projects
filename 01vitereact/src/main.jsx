import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const anotherUser = " Chai aur React"
const ReactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'click me to visit google',
    anotherUser
)
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)
ReactDOM.createRoot(document.getElementById('root'))
.render(

    ReactElement
)
