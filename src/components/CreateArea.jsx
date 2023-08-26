import React, {useState} from "react";
import AddCircleOutlineIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    
    const[toTakeNote, setToTakeNote] = useState(false);

    function expand() {
      setToTakeNote(true);
    }

    function collapse() {
      setToTakeNote(false);
    }

    function addNote(event) {
      props.methodAddNote(event);
      collapse();
    }
    

    return (
        <div>
          <form className="create-note" >
            <input name="title" 
                   id="txtTitle"
                   placeholder="Title" 
                   onChange={props.methodUpdateTitle} 
                   value={props.titleVal}
                   style={{display:toTakeNote ? "block" : "none"}}
                   autoFocus />
            <textarea name="content" 
                      placeholder="Take a note..." 
                      rows={toTakeNote? "3" : "1" } 
                      onChange={props.methodUpdateContent} 
                      onClick={expand}
                      value={props.contentVal}
                      />
            <Zoom in={toTakeNote}>
              <Fab onClick={addNote}>
                <AddCircleOutlineIcon />
              </Fab>
            </Zoom>
          </form>
        </div>
      );
}

export default CreateArea;