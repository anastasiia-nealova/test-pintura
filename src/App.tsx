import React, { useEffect, useState } from 'react';
import './App.css';
import '@pqina/pintura/pintura.css';
import { getEditorDefaults } from '@pqina/pintura';
import { PinturaEditor } from '@pqina/react-pintura';

const editorConfig = getEditorDefaults();

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
   

      useEffect(() => {
        async function fetchData() {

            const res = await fetch("https://suchchat-dev-uploads.s3.eu-central-1.amazonaws.com/31523a72-dd24-41ea-97f9-042184aca699.jpeg?Content-Type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASPJJEG2AJKLUJESQ%2F20240108%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20240108T141233Z&X-Amz-Expires=7200&X-Amz-Signature=df08656bca0057b8bec5607abf3b93425b29f364d8d89001a9b87af99fa37d30&X-Amz-SignedHeaders=host%3Bx-amz-acl&x-amz-acl=public-read", {
                method: 'PUT',
                headers: {
                  'Content-Type': 'image/jpeg',
                },
                body: selectedFile,
              });
              console.log('res-------------------', res);
        }
        if(selectedFile) {
            fetchData();
        }
      }, [selectedFile]);

      const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        setSelectedFile(file);
      };
      
    return (
        <div className="App" style={{ height: '600px' }}>
             <input type="file" onChange={handleFileChange} />
            <PinturaEditor
                {...editorConfig}
                src="mercedes.jpg"
                imageCropAspectRatio={1}
            ></PinturaEditor>
        </div>
    );
}
export default App;
