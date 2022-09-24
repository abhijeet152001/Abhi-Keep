import React, {useState} from "react";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import { light } from "./styles/Themes";
import Navigation from './Components/Navigation'
import CreateNote from './Components/CreateNote'
import Note from './Components/Note'
import Fotter from './Components/Fotter'


function App() {
    const [addItem, setAddItem] = useState([]);
    const addNote = (note) => {
        setAddItem((prevData)=>{
            return[
                ...prevData,
                note,
            ]
        })
    }
    const onDelete = (id) => {
        setAddItem((oldData) =>
            oldData.filter((currdata,indx) => {
                return indx !== id;
            })
        )
    }
    return(
        <>
            <GlobalStyles />
            <ThemeProvider theme={light}>
                <Navigation />
                <CreateNote passNote={addNote} />
                <Note array = {addItem} deleteItem = {onDelete}  />
     {/* {   console.log(addItem)} */}
                
                <Fotter />
            </ThemeProvider>
        </>
    )
}

export default App;