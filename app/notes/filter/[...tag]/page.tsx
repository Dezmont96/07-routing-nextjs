import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

type Props = { params: Promise<{ tag: string[] }> };

export default async function FilteredNotesPage({ params }: Props) {
  const { tag } = await params;
  const currentTag = tag?.[0] === 'all' ? undefined : tag?.[0];
  const { notes } = await fetchNotes({ tag: currentTag });

  return (
    <>
      {notes && notes.length > 0 ? (
        <NoteList notes={notes} />
      ) : (
        <p>No notes found for this tag.</p>
      )}
    </>
  );
}