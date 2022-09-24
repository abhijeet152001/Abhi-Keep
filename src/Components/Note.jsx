import React from 'react'
import styled from 'styled-components'
import NoteBox from '../NoteBox'



const Section = styled.section`
max-width: 100vw;
min-height: ${props => `calc(45vh - ${props.theme.navHeight})`};
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
margin-bottom: 3rem;
margin-left: 2rem;

`




const Note = (props) => {
const deleteItm =(id) =>{
  props.deleteItem(id)
}
 

  return (
    <Section>
   {  props.array.map((val,index) => {
    return( 
     
        <NoteBox 
        key = {index}
        id = {index}
        title = {val.title}
        content = {val.content}
        ondelete = {deleteItm}
    />
    );
})}

    </Section>
  )
}

export default Note