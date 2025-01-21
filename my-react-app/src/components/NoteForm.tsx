import React, { useState } from 'react';

const NoteForm: React.FC<{ onSubmit: (note: string) => void }> = ({ onSubmit }) => {
    const [noteContent, setNoteContent] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNoteContent(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(noteContent);
        setNoteContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={noteContent}
                onChange={handleChange}
                placeholder="Write your note here..."
                required
            />
            <button type="submit">Create Note</button>
        </form>
    );
};

export default NoteForm;