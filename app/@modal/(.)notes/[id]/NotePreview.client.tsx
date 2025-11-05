'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation'; // <-- Імпортуємо useParams
import { fetchNoteById } from '@/lib/api';
import NotePreview from '@/components/NotePreview/NotePreview';
import Loader from '@/components/Loader/Loader';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

// Тепер цей компонент не приймає 'id' як пропс
export default function ModalNotePreview() {
  const params = useParams(); // <-- Використовуємо хук
  const id = Array.isArray(params.id) ? params.id[0] : params.id as string | undefined;

  const {
    data: note,
    status,
  } = useQuery({
    queryKey: ['notes', id],
    queryFn: () => fetchNoteById(id!),
    enabled: !!id,
    refetchOnMount: false,
  });

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'error') {
    return <ErrorMessage>Could not fetch note details.</ErrorMessage>;
  }

  if (status === 'success' && note) {
    return <NotePreview note={note} />;
  }
  
  return null;
}