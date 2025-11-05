// app/@modal/(.)notes/[id]/page.tsx
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import ModalNotePreviewClient from './NotePreview.client';
import Modal from '@/components/Modal/Modal';

type Props = { params: Promise<{ id: string }> };

export default async function NoteModalPage({ params }: Props) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Modal>
        <ModalNotePreviewClient />
      </Modal>
    </HydrationBoundary>
  );
}