import React from 'react';
import { CFooter } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cibGithub, cibLinkedin } from '@coreui/icons'; // Ícones para redes sociais

const AppFooter = () => {
  return (
    <CFooter className="px-4 py-4 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/* Lado Esquerdo: Desenvolvedores e Data */}
          <div className="mb-3 mb-md-0 text-center text-md-start">
            <span className="d-block mb-1">Desenvolvido por</span>
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none fw-bold hover-effect"
            >
              Desenvolvedores
            </a>
            <span className="d-block mt-1">Data de desenvolvimento 2025.</span>
          </div>

          {/* Lado Direito: Créditos e Redes Sociais */}
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div className="mb-3 mb-md-0 me-md-4 text-center text-md-start">
              <span className="d-block mb-1">power</span>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none fw-bold hover-effect"
              >
                Dashboard Template
              </a>
            </div>

            {/* Redes Sociais */}
            <div className="d-flex justify-content-center">
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3 hover-effect"
              >
                <CIcon icon={cibGithub} size="lg" />
              </a>
              <a
                href="https://linkedin.com/in/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover-effect"
              >
                <CIcon icon={cibLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);