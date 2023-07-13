import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import useLocal from "../localHook/useLocal";

const Code=()=>{
    const[html,setHtml]=useLocal('html','');
    const[css,setCss]=useLocal('css','');
    const[js,setJs]=useLocal('js','');
    const[srcDoc,setSrcDoc]=useState('');

    useEffect(()=>{
        const timeout=setTimeout(()=>{

            setSrcDoc(`
                 <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                </html>`
            )
        },250)
        return ()=>clearTimeout(timeout);
    },[html,css,js])
    // const srcDoc=`
    // <html>
    //     <body>${html}</body>
    //     <style>${css}</style>
    //     <script>${js}</script>
    // </html>`
    return(
        <>
            <div className="code">

            <Editor language="xml"
             hData="html"
             icon="/"
             color="red"
             value={html}
             onChange={setHtml}/>

            <Editor language="css"
             hData="cSS"
             icon="*"
             color="green"
             value={css}
             onChange={setCss}/>

            <Editor language="javascript"
             hData="js"
             icon="{}"
             color="yellow"
             value={js}
             onChange={setJs}/> 

            </div>

            <div className="display">
                <iframe srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts" 
                width="100%"
                height="100%"
                frameborder="0"/>
            </div>
        </>
    )
}
export default Code;