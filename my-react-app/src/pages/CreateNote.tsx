import React from 'react';
import NoteForm from '../components/NoteForm';

const CreateNote: React.FC = () => {
    const handleNoteCreation = (noteContent: string) => {
        // Logic for handling note creation, e.g., API call
        console.log('Note created:', noteContent);
    };

    return (
        <div>
            <h1>Create a New Note</h1>
            <NoteForm onSubmit={handleNoteCreation} />
        </div>
    );
};

export default CreateNote;