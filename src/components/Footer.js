import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { FaBehance } from 'react-icons/fa';

export function Footer() {

  return (
    <footer className="bg-light text-center py-5">
      <a className="btn" href="https://www.linkedin.com/in/sanderson-soares-marinho-da-costa-654773115/?locale=pt_BR">
        <FiLinkedin size={20} />
      </a>
      <a className="btn" href="https://www.behance.net/sandersonc0c03">
        <FaBehance size={20} />
      </a>
      <p className="text-muted fs-12 py-3">
        Copyright © {new Date().getFullYear} - Sanderson Soares
      </p>
    </footer>
  );
}