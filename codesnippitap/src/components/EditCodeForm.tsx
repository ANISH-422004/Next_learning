"use client";
import * as actions from "@/action/index"
import { Editor } from '@monaco-editor/react';
import React, { useState } from 'react';
import { Button } from "./ui/button";

type Snippet = {
    id: number;
    title: string;
    code: string;
};

type Props = {
    snippet: Snippet;
};



const EditCodeForm = ({ snippet }: Props) => {
    const [code, setcode] = useState(snippet.code);
    const saveSnippet = actions.saveSnippet.bind(null, snippet.id) // bind the id to the function to avoid passing it in the function call

    const handleEditorChange = (value: string | undefined) => {
        if (value) {
            setcode(value);
        }
    }


    const handleSave = () => {
        actions.saveSnippet(snippet.id, code);
      };

    return (
        <div>


            <div className='flex items-center justify-between w-full h-full p-2 '>
                <h1 className='text-2xl'>{snippet.title}</h1>
                <Button onClick={handleSave}>Save</Button>
            </div>

            <Editor
                theme="vs-dark"
                height="90vh"
                defaultLanguage="javascript"
                defaultValue={code}
                onChange={handleEditorChange}
            />
        </div>
    );
};

export default EditCodeForm;
