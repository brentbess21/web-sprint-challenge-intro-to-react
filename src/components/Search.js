import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    header {
        display:flex;
    }
    img{
        width: 75px;
    }
`
const Search = (props) => {

    return (
        <StyledHeader>
            <header>
                <img src ='https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png'/>
                <nav>
                    <input type='text' placeholder='Search Character'></input>
                    <button>Random Character</button>
                </nav>
            </header>
        
        </StyledHeader>
    )
}

export default Search; 