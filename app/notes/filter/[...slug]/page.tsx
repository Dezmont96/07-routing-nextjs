// app/notes/filter/[...slug]/page.tsx
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import FilteredNotesClient from './Notes.client';

type Props = { params: Promise<{ slug: string[] }> };

export default async function NotesPage({ params }: Props) {
  const { slug } = await params;
  const categoryId = slug?.[0] === 'all' ? undefined : slug?.[0];

  const queryClient = new QueryClient();
  
  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, '', categoryId],
    queryFn: () => fetchNotes({ page: 1, search: '', tag: categoryId }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FilteredNotesClient initialTag={categoryId || 'all'} />
    </HydrationBoundary>
  );
}