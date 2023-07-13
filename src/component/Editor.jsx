import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import {Controlled as ControlledEditor} from 'react-codemirror2'
import "./App.css"

const Editor=(props)=>{
    const{language,hData,icon,color,value,onChange }=props;

    const handleChange=(editor,data,value)=>{

        onChange(value)

    }
    return(
        <>
        <div className="editor">
            <div className="editor_head">
                <div className="head_data">
                    {/* <span style={{backgroundColor:{color}}}>{icon}</span> */}
                    {hData}
                </div>
                <div className="head_config">
                    <button>⚙️</button>
                    <button>^</button>
                </div>
            </div>
            <ControlledEditor className='controlled-editor'
            onBeforeChange={handleChange}
            value={value}
            options={{
                lineWrapping:true,
                theme: 'material',
                lineNumbers: true,
                mode:language
              }}/>
        </div>
            
        </>
    )
}
export default Editor;