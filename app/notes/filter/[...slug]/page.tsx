import { fetchNotes } from '@/lib/api';
import FilteredNotesClient from './Notes.client'; 

type Props = { params: Promise<{ slug: string[] }> };

export default async function NotesByCategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryId = slug?.[0] === 'all' ? undefined : slug?.[0];
  const { notes } = await fetchNotes({ tag: categoryId });

  return <FilteredNotesClient notes={notes || []} />;
}