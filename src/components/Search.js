import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    header {
        display:flex;
        height: 90px;
        background-color: black;
        justify-content: center;
        align-items: center
    }

    img{
        width: 125px;
        margin: 0 18%;
    }

    button{
        width: 220px;
        font-family: 'Titillium Web', sans-serif;
        padding: 10px 20px;
        border:3px solid black;
        box-sizing: border-box;
        text-decoration:none;
        text-transform:uppercase;
        color: white;
        text-align:center;
        transition: all 0.15s;
        background-color: black;
        }
    button:hover{
         color:#DDDDDD;
         border-color:white;
        background-color: black;
        }

    input {
        font-family: 'Titillium Web', sans-serif;
        width: 200px;
        margin-right: 15px;
        color: white;
        background-color: black;
        border: 1px solid white;
    }
`
const Search = (props) => {
    const { setSearchTerm } = props;

    const changeInput = event => {
        console.log("here is the search term" ,event.target.value);
        setSearchTerm(event.target.value);
    }

    return (
        <StyledHeader>
            <header>
                <nav>
                    <input type='text' placeholder='  Search Character' onChange={changeInput} ></input>
                </nav>
                <img src ='https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png'/>
                <button>Random Character</button>
            </header>
        
        </StyledHeader>
    )
}

export default Search; 