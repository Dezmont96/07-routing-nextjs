'use client';

import { useRouter, useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';
import Loader from '@/components/Loader/Loader';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

export default function NoteModalPage() {
  const router = useRouter();
  const params = useParams();
  
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const {
    data: note,
    status,
  } = useQuery({
    queryKey: ['notes', id],
    queryFn: () => fetchNoteById(id!), 
    enabled: !!id,
    refetchOnMount: false,
  });

  let content: React.ReactNode;

  if (status === 'pending') {
    content = <Loader />;
  }

  if (status === 'error') {
    content = <ErrorMessage>Could not fetch note details.</ErrorMessage>;
  }

  if (status === 'success' && note) {
    content = <NotePreview note={note} />;
  }

  return <Modal>{content}</Modal>;
}