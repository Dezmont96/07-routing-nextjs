'use client';

import Modal from '@/components/Modal/Modal';
import ModalNotePreview from './NotePreview.client';

// Тепер цей компонент взагалі не приймає пропсів
export default function NoteModalPage() {
  return (
    <Modal>
      {/* Він просто рендерить клієнтський компонент */}
      <ModalNotePreview />
    </Modal>
  );
}