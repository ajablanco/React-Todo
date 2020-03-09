import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Aja's Todo List</h1>
        </header>
    )
}

const headerStyle = {
    background: 'purple',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

export default Header;