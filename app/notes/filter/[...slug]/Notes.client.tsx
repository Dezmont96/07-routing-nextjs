'use client';

import NoteList from '@/components/NoteList/NoteList';
import { Note } from '@/types/note';

interface FilteredNotesClientProps {
  notes: Note[];
}

export default function FilteredNotesClient({ notes }: FilteredNotesClientProps) {
  return (
    <>
      {notes && notes.length > 0 ? (
        <NoteList notes={notes} />
      ) : (
        <p>No notes found for this category.</p>
      )}
    </>
  );
}