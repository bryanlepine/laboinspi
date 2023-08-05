import React, { useState } from "react";
import Modal from "react-modal";
import "../css-styles/MyFormModal.scss";

const MyFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Données du formulaire:", formData);
    closeModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="open-modal-button">
        Cliquez ici
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Formulaire"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="modal-title">Formulaire de contact</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              Choix de formule:
            </label>
            <input
              type="text"
              id="formule"
              name="formule"
              value="Formule personnalisé"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">Nom:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="firstname">Prénom:</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">
              Date du mariage:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="location">
              Lieu du mariage:
            </label>
            <input
              type="location"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="message-form">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-button">
            Envoyer
          </button>
        </form>
        <button onClick={closeModal} className="close-modal-button">
          X
        </button>
      </Modal>
    </div>
  );
};

export default MyFormModal;
