import React, { useEffect, useState } from 'react';
import './App.css';
import '@pqina/pintura/pintura.css';
import { getEditorDefaults } from '@pqina/pintura';
import { PinturaEditor } from '@pqina/react-pintura';

const editorConfig = getEditorDefaults();

function App() {
    return (
        <div className="App" style={{ height: '600px' }}>
            <PinturaEditor
                {...editorConfig}
                src="mercedes.jpg"
                imageCropAspectRatio={1}
            ></PinturaEditor>
        </div>
    );
}
export default App;
