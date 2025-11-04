import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

type Props = { params: Promise<{ slug: string[] }> };

export default async function NotesByCategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryId = slug?.[0] === 'all' ? undefined : slug?.[0];

  const { notes } = await fetchNotes({ tag: categoryId });

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