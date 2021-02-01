import styled from "styled-components";

export const Frame = styled.div`
border: 1px solid whitesmoke;
font-size: 1em;
`
export const Wrapper = styled.div`
background: whitesmoke;
min-height: 500px;
min-width: 300px;
display: flex;
justify-content: center;
align-items: flex-start;
border: 1px solid lightgrey;
box-shadow: 2px 2px 2px #eee;
`
export const CardHeader = styled.h1`
margin: 20px;
color: #2B5419;
background: #c9ada7;
padding: 4px;
border: 1px solid grey;
font-weight: normal;
`
export const Delete = styled.button`
float: right;
display: inline-block;
padding: 7px 7px;
color: white;
font-size: 14px;
font-weight: 700;
background-color: #2B5419;
border: 0px;
border-radius: 3px;
&:hover {
    background-color: grey;
  }
`
export const ListItem = styled.div`
margin: 5px 25px;
`
export const AddButton = styled.button`
font-family: 'Fira Mono', monospace;
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
padding: 10px;
border: 0;
background: #2B5419;
color: #D9D9EF;
font-size: 1em;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
export const Input = styled.input`
padding: 4px;
margin: 5px;
`