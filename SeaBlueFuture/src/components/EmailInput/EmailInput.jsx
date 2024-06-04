import React, { useState } from 'react';
import './EmailInput.css';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email digitado: ${email}`);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Endereço de Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Digite seu email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Cadastrar</button>
    </form>
  );
};

export default EmailInput;