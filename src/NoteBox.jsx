import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';


const BoxContainer = styled.div`
position: relative;
width: 20%;
height: 10rem;

display: flex;
/* justify-content: center; */
align-items: flex-start;
/* background-color:blue; */
flex-direction: column;
border: 2px solid #fff;
border-radius: 15px;
box-shadow: 5px 5px 15px -5px rgba(0,0,0,0.7);
margin: 1rem;

.MuiButton-root{
  width: 30px;
  height: 50px;
  position: absolute;
  bottom: -28px;
  right: 0px;
  cursor: pointer;
  background-color: #fff !important;
  border-radius: 50% !important;
  box-shadow: 5px 5px 15px -5px rgba(0,0,0,0.7);
  font-size: 45px !important;
  font-weight: 900;
  color: #f4b400;

  /* background: transparent; */

}
.MuiButton-root:hover{
  background-color: #f4b400 !important ;
  color:#fff !important;
}

`

const Title = styled.h2`
  font-weight: 700;
  margin: 0.5rem;
`
const Paragraph= styled.p`
margin: 0.5rem;
height: auto;
`

const NoteBox = (props) => {

const deleteNote = () => {
  props.ondelete(props.id);
}

  return (
    <BoxContainer>
    <Title>{props.title}</Title>
    <Paragraph>{props.content}</Paragraph>
   

    <Button onClick={deleteNote} text='outlined'><DeleteIcon /></Button>
   
   </BoxContainer>
  )
}

export default NoteBox