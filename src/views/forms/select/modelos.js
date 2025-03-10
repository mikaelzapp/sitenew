import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CFormInput,
  CListGroup,
  CListGroupItem,
  CProgress,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CImage,
} from '@coreui/react';
import { CChartBar } from '@coreui/react-chartjs';
import CIcon from '@coreui/icons-react';
import { cilChartLine, cilCopy, cilMagnifyingGlass, cilUser } from '@coreui/icons';
import { getStyle } from '@coreui/utils';

// Dados fictícios de traders/investidores de criptomoedas
const cryptoInvestorsData = [
  {
    id: 1,
    name: 'João Silva',
    photo: 'https://via.placeholder.com/150',
    description: 'Especialista em criptomoedas com foco em Bitcoin e Ethereum.',
    performance: '+35%',
    portfolio: {
      cryptocurrencies: ['BTC', 'ETH', 'ADA', 'SOL'],
    },
    investments: [
      { asset: 'BTC', percentage: 40 },
      { asset: 'ETH', percentage: 30 },
      { asset: 'ADA', percentage: 15 },
      { asset: 'SOL', percentage: 15 },
    ],
  },
  {
    id: 2,
    name: 'Maria Souza',
    photo: 'https://via.placeholder.com/150',
    description: 'Trader experiente em altcoins e criptomoedas emergentes.',
    performance: '+28%',
    portfolio: {
      cryptocurrencies: ['BNB', 'XRP', 'DOT', 'AVAX'],
    },
    investments: [
      { asset: 'BNB', percentage: 35 },
      { asset: 'XRP', percentage: 25 },
      { asset: 'DOT', percentage: 20 },
      { asset: 'AVAX', percentage: 20 },
    ],
  },
  {
    id: 3,
    name: 'Carlos Oliveira',
    photo: 'https://via.placeholder.com/150',
    description: 'Focado em criptomoedas de alta tecnologia e blockchain.',
    performance: '+42%',
    portfolio: {
      cryptocurrencies: ['SOL', 'DOT', 'MATIC', 'LINK'],
    },
    investments: [
      { asset: 'SOL', percentage: 30 },
      { asset: 'DOT', percentage: 25 },
      { asset: 'MATIC', percentage: 25 },
      { asset: 'LINK', percentage: 20 },
    ],
  },
];

const MelhoresCriptomoedas = () => {
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Função para filtrar traders/investidores
  const filteredInvestors = cryptoInvestorsData.filter((investor) =>
    investor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Função para gerar números aleatórios (usada no gráfico)
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <CRow>
      {/* Barra de Busca */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardBody>
            <div className="d-flex align-items-center">
              <CIcon icon={cilMagnifyingGlass} className="me-2" />
              <CFormInput
                type="text"
                placeholder="Buscar trader/investidor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Lista de Traders/Investidores de Criptomoedas */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Melhores Traders/Investidores de Criptomoedas</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              {filteredInvestors.map((investor) => (
                <CCol md={4} key={investor.id} className="mb-4">
                  <CCard className="h-100">
                    <CCardBody className="text-center">
                      <CImage
                        src={investor.photo}
                        alt={investor.name}
                        rounded
                        className="mb-3"
                        width={100}
                        height={100}
                      />
                      <h5>{investor.name}</h5>
                      <p className="text-body-secondary">{investor.description}</p>
                      <CProgress
                        value={parseInt(investor.performance)}
                        className="mb-3"
                        color={parseInt(investor.performance) > 0 ? 'success' : 'danger'}
                      />
                      <CButton
                        color="primary"
                        onClick={() => setSelectedInvestor(investor)}
                      >
                        Ver Perfil
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCol>
              ))}
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Perfil do Trader/Investidor Selecionado */}
      {selectedInvestor && (
        <CCol xs={12}>
          <CCard>
            <CCardHeader>
              <strong>Perfil de {selectedInvestor.name}</strong>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol md={4} className="text-center">
                  <CImage
                    src={selectedInvestor.photo}
                    alt={selectedInvestor.name}
                    rounded
                    className="mb-3"
                    width={150}
                    height={150}
                  />
                  <h5>{selectedInvestor.name}</h5>
                  <p className="text-body-secondary">{selectedInvestor.description}</p>
                  <CButton color="success" className="me-2">
                    <CIcon icon={cilCopy} className="me-2" />
                    Copiar Carteira
                  </CButton>
                  <CButton color="info">
                    <CIcon icon={cilUser} className="me-2" />
                    Seguir
                  </CButton>
                </CCol>
                <CCol md={8}>
                  <h5>Carteira de Criptomoedas</h5>
                  <CTable striped hover responsive>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell>Criptomoeda</CTableHeaderCell>
                        <CTableHeaderCell>Porcentagem</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {selectedInvestor.investments.map((investment, index) => (
                        <CTableRow key={index}>
                          <CTableDataCell>{investment.asset}</CTableDataCell>
                          <CTableDataCell>{investment.percentage}%</CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>

                  {/* Gráfico de Desempenho Recente */}
                  <h5 className="mt-4">Desempenho Recente</h5>
                  <div style={{ width: '90%', margin: '0 auto' }}>
                    <CChartBar
                      data={{
                        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                        datasets: [
                          {
                            label: 'Desempenho',
                            backgroundColor: getStyle('--cui-primary'),
                            borderColor: 'transparent',
                            borderWidth: 1,
                            data: [
                              random(40, 100),
                              random(40, 100),
                              random(40, 100),
                              random(40, 100),
                              random(40, 100),
                              random(40, 100),
                              random(40, 100),
                            ],
                          },
                        ],
                      }}
                      options={{
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                        scales: {
                          x: {
                            display: true,
                          },
                          y: {
                            display: true,
                          },
                        },
                      }}
                    />
                  </div>

                  {/* Descrição dos Investimentos */}
                  <h5 className="mt-4">Distribuição dos Investimentos</h5>
                  <CListGroup>
                    {selectedInvestor.investments.map((investment, index) => (
                      <CListGroupItem key={index}>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>{investment.asset}</span>
                          <span>{investment.percentage}%</span>
                        </div>
                        <CProgress
                          value={investment.percentage}
                          color={index % 2 === 0 ? 'primary' : 'success'}
                          className="mt-2"
                        />
                      </CListGroupItem>
                    ))}
                  </CListGroup>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      )}
    </CRow>
  );
};

export default MelhoresCriptomoedas;