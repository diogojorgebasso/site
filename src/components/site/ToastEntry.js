import React from "react";
import { useState } from "react";
import { Toast } from "react-bootstrap";
export default function ToastEntry() {
  const [ShowToast, setShowToast] = useState(true);

  const toggleShowToast = () => setShowToast(!ShowToast);

  return (
    <div aria-live="polite" aria-atomic="true">
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <Toast
          show={ShowToast}
          onClose={toggleShowToast}
          delay={15000}
          autohide
          animation={false}
        >
          <Toast.Header>
            <strong className="mr-auto">Bem-vindo!</strong>
            <small>Agora</small>
          </Toast.Header>
          <Toast.Body>
            Esperamos que tenha a melhor experiência por aqui!
          </Toast.Body>
        </Toast>
      </div>
    </div>
  );
}
