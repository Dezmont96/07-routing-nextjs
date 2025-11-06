import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import { fetchNoteById } from '@/lib/api';
import ModalNotePreviewClient from './NotePreview.client';

// 1. Змінюємо тип, щоб вказати, що params - це Promise
type Props = { params: Promise<{ id: string }> };

export default async function NoteModalPage({ params }: Props) {
  // 2. Додаємо `await` для отримання значення з Promise
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