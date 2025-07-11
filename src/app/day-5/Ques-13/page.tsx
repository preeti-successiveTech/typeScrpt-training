'use client';

import { useState } from 'react';
import ModalPage from '@/components/ModalPage';
import { Button } from '@mui/material';

type ModalContentType = 'text' | 'image';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ModalContentType>('text');

  function openModal(type: ModalContentType) {
    setModalContent(type);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Reusable Modal Demo</h1>

      <Button variant="contained" onClick={() => openModal('text')} style={{ marginRight: 10 }}>
        Open Text Modal
      </Button>
      <Button variant="contained" onClick={() => openModal('image')} style={{ marginRight: 10 }}>
        Open Image Modal
      </Button>

      <ModalPage isOpen={modalOpen} onClose={closeModal}>
        {modalContent === 'text' && (
          <>
            <h2>Hello Modal</h2>
            <p>This is a customizable modal with text content.</p>
          </>
        )}

        {modalContent === 'image' && (
          <>
            <h2>Image Modal</h2>
            <img
              src="https://t3.ftcdn.net/jpg/01/04/40/06/360_F_104400672_zCaPIFbYT1dXdzN85jso7NV8M6uwpKtf.jpg"
              alt="Cute kitten"
              style={{ maxWidth: '100%', borderRadius: 8 }}
            />
          </>
        )}
      </ModalPage>
    </div>
  );
}
