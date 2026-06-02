"use client";

import { useContext } from 'react';
import { AppContext } from '@/provider/AppProvider';

export default function CartOffcanvas() {
  const context = useContext(AppContext);

  if (!context?.openCartOffcanvas) {
    return null;
  }

  return (
    <div
      className="position-fixed top-0 end-0 bg-white shadow-lg"
      style={{ width: 360, height: '100vh', zIndex: 1055, padding: '1.25rem' }}
      role="dialog"
      aria-label="Cart offcanvas"
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="h5 mb-0">Cart</h3>
        <button className="btn btn-sm btn-outline-secondary" onClick={() => context.setOpenCartOffcanvas(false)}>
          Close
        </button>
      </div>
      <p className="mb-0">Cart UI restored for deployment. Connect your product data here.</p>
    </div>
  );
}