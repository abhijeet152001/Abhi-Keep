import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const Section = styled.section`
max-width: 100vw;
min-height: ${props => `calc(45vh - ${props.theme.navHeight})`};
display: flex;
justify-content: center;
align-items: center;

`
const FormContainer = styled.div`
position: relative;
width: 30%;
height: auto;

display: flex;
/* justify-content: center; */
align-items: flex-start;
/* background-color:blue; */
flex-direction: column;
border: 2px solid #fff;
border-radius: 15px;
box-shadow: 5px 5px 15px -5px rgba(0,0,0,0.7);

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


form{display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 1rem;
margin-left: 1rem;
width: 95%;
}
input, textarea{
  border: none;
background-color: transparent;
/* resize: none; */
outline: none;
margin: 0.5rem;
width: 100%;
}
textarea{
  height: 5rem;

}
 

input{
  font-weight: 700;
  margin-bottom: 1rem;
  /* line-height: 1rem; */
}
`


const CreateNote = (props) => {
 
  const [note, setNote]  = useState({
    title: '',
    content: '',
  })

  const [expand, setExpand] = useState(false);

  const InputEvent = (event) =>{
    // event.preventDefault();
    const {name, value} = event.target;
    setNote((prevData)=> {
      return {
        ...prevData,
        [name]: value,
        
      }
    })
  }


  const addEvent = () => {
    props.passNote(note);
    setNote(
      { title: '',
       content: '',}
     )
    
  }

  return (
    <Section>
    <FormContainer onDoubleClick={()=>setExpand(false)}>

      <form>
        <input type = 'text' 
        name="title"
        value={note.title} onChange={InputEvent} onClick={()=>setExpand(true)} placeholder='Title' />

  {expand ? <textarea value={note.content} name="content" onChange={InputEvent} placeholder='Write a note...'></textarea> : null}
      </form>
     {/* <ButtonContainer> */}
      <Button variant="outlined" onClick={addEvent}> <AddIcon /></Button>
      
     {/* </ButtonContainer> */}
    </FormContainer>
    </Section>
  )
}

export default CreateNote;