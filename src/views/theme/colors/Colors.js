import React, { useEffect, useState, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react';
import { rgbToHex } from '@coreui/utils';
import { DocsLink } from 'src/components';

// Componente para exibir os valores HEX e RGB de uma cor
const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)'); // Estado para armazenar a cor
  const ref = createRef(); // Referência para o elemento atual

  // Efeito para capturar a cor de fundo do elemento pai
  useEffect(() => {
    const el = ref.current.parentNode.firstChild; // Acessa o elemento pai (quadrado colorido)
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color'); // Captura a cor de fundo
    setColor(varColor); // Atualiza o estado com a cor capturada
  }, [ref]);

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr>
          <td className="text-body-secondary">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td> {/* Exibe o valor HEX */}
        </tr>
        <tr>
          <td className="text-body-secondary">RGB:</td>
          <td className="font-weight-bold">{color}</td> {/* Exibe o valor RGB */}
        </tr>
      </tbody>
    </table>
  );
};

// Componente para renderizar um quadrado colorido e exibir seus valores HEX/RGB
const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3'); // Classes CSS para o quadrado colorido
  return (
    <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
      <div className={classes} style={{ paddingTop: '75%' }}></div> {/* Quadrado colorido */}
      {children} {/* Nome da cor (ex: "Brand Primary Color") */}
      <ThemeView /> {/* Exibe os valores HEX e RGB */}
    </CCol>
  );
};

// Validação das props do componente ThemeColor
ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// Componente principal que renderiza todas as cores do tema
const Colors = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Theme colors
          <DocsLink href="https://coreui.io/docs/utilities/colors/" /> {/* Link para a documentação */}
        </CCardHeader>
        <CCardBody>
          <CRow>
            {/* Renderiza cada cor do tema */}
            <ThemeColor className="bg-primary">
              <h6>Brand Primary Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-secondary">
              <h6>Brand Secondary Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-success">
              <h6>Brand Success Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-danger">
              <h6>Brand Danger Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-warning">
              <h6>Brand Warning Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-info">
              <h6>Brand Info Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-light">
              <h6>Brand Light Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-dark">
              <h6>Brand Dark Color</h6>
            </ThemeColor>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Colors;