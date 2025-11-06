import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import { fetchNoteById } from '@/lib/api';
import ModalNotePreviewClient from './NotePreview.client';

type Props = { params: Promise<{ id: string }> };

export default async function NoteModalPage({ params }: Props) {
  const { id } = await params;
  
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey: ['note', id],
      queryFn: () => fetchNoteById(id),
    });
  } catch (error) {
    notFound();
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ModalNotePreviewClient noteId={id} />
    </HydrationBoundary>
  );
}