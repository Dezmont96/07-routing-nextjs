'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { fetchNoteById } from '@/lib/api';
import NotePreview from '@/components/NotePreview/NotePreview';
import Modal from '@/components/Modal/Modal';
import Loader from '@/components/Loader/Loader';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

interface ModalNotePreviewClientProps {
  noteId: string;
}

export default function ModalNotePreviewClient({ noteId }: ModalNotePreviewClientProps) {
  const router = useRouter();

  const {
    data: note,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['note', noteId],
    queryFn: () => fetchNoteById(noteId),
    enabled: !!noteId,
    refetchOnMount: false,
  });

  const handleClose = () => {
    router.back();
  };

  let content: React.ReactNode;

  if (isLoading && !note) {
    content = <Loader />;
  } else if (isError) {
    content = <ErrorMessage>{error.message}</ErrorMessage>;
  } else if (note) {
    content = <NotePreview note={note} />;
  } else {
    content = <ErrorMessage>Note not found.</ErrorMessage>;
  }

  const buttonStyles: React.CSSProperties = {
    padding: '8px 16px',
    marginTop: '20px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f0f0f0',
    display: 'block',
    marginLeft: 'auto'
  };

  return (
    <Modal onClose={handleClose}>
      {content}
      <button style={buttonStyles} onClick={handleClose}>
        Close
      </button>
    </Modal>
  );
}