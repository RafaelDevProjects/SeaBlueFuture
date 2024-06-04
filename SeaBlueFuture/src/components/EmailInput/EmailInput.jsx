import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './EmailInput.scss';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsAccepted(event.target.checked);
  };

  const handleSubmit = async () => {
    setError('');
    setSuccess('');
    if (!isAccepted) {
      setError('Você precisa aceitar receber e-mails do SeaBlueOcean.');
      return;
    }
    try {
      const data = { email };
      const response = await axios.post('http://localhost:5000/api/enviar-email', data);
      setSuccess('Email recebido e salvo com sucesso!');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('O e-mail já está cadastrado.');
      }
    }
  };

  return (
    <div className="email-input-container">
      <div className="email-input-content">
        <label htmlFor="emailInput">Email:</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Digite seu email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="acceptEmails"
            required
            checked={isAccepted}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="acceptEmails">
            Aceito receber e-mails do SeaBlueFuture
          </label>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary mt-3">
          Enviar
        </button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
    </div>
  );
};

export default EmailInput;