import React from 'react';
import './App.css';
import '@pqina/pintura/pintura.css';
import { getEditorDefaults } from '@pqina/pintura';
import { PinturaEditor } from '@pqina/react-pintura';
import TelegramLoginWidget from './TelegramLoginWidget';

const editorConfig = getEditorDefaults();

function App() {
    return (
        <div className="App" style={{ height: '600px' }}>
            <PinturaEditor
                {...editorConfig}
                src="mercedes.jpg"
                imageCropAspectRatio={1}
            ></PinturaEditor>
            <TelegramLoginWidget />
        </div>
    );
}
export default App;
