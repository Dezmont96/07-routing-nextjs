'use client';

import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        router.back();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      router.back();
    }
  };

  const portalNode = typeof document !== 'undefined' 
    ? document.getElementById('root-modal') 
    : null;

  if (!portalNode) {
    return null;
  }

  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className={css.modal}>{children}</div>
    </div>,
    portalNode
  );
};

export default Modal;