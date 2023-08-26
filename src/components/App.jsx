import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import NoteData from '../notes.js'
import CreateArea from './CreateArea.jsx'
import { useState } from "react";

function App() {


    const[inputTitle, setTitle] = useState("");
    const[inputContent, setContent] = useState("");
    const[noteLists, setNoteList] = useState(NoteData.map(function(note_) {
        return {key: note_.key, 
                title: note_.title, 
                content:note_.content}
    })); 

    function updateTitle(event) {
        setTitle(event.target.value);
    }
    
    function updateContent(event) {
        setContent(event.target.value);
    }

    function UpdateList(event) {
        setNoteList(function(prevList) {
            //console.log("aa", {inputTitle, inputContent, prevList})
            return [...prevList, {key:prevList.length + 1, title:inputTitle, content:inputContent}];

        });

        event.preventDefault();

        setTitle("");
        setContent("");
    }

    function deleteNote(index) {
        setNoteList(function(prevList) {
            return prevList.filter(function(item, idx) {
                return idx !== index;
            })
        });
    }


    return(<div>
                <Header />
                <CreateArea  methodAddNote={UpdateList} methodUpdateTitle={updateTitle} methodUpdateContent={updateContent} titleVal={inputTitle} contentVal={inputContent}/>
                {noteLists.map((note, index) => <Note methodDeleteNote={deleteNote} key={note.key} noteIndex={index} title={note.title} content={note.content}  />)}
                <Footer />
           </div>);
};

export default App;
