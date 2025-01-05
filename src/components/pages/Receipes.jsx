import '../css/Receipe.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';
export default function Receipe(props){
    return(
        <section arial-live="polite">
            <div className="content">
                <ReactMarkdown>{props.getReceipe}</ReactMarkdown>
            </div>
        </section>
    )
}