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
import { cilCopy, cilMagnifyingGlass, cilUser } from '@coreui/icons';
import { getStyle } from '@coreui/utils';

const investorsData = [

// Dados fictícios de investidores/traders

  {
    id: 1,
    name: 'João Silva',
    photo: 'https://via.placeholder.com/150',
    description: 'Especialista em criptomoedas e fundos imobiliários.',
    performance: '+25%',
    portfolio: {
      cryptocurrencies: ['BTC', 'ETH', 'ADA'],
      stocks: ['AAPL', 'TSLA', 'AMZN'],
      realEstateFunds: ['HGLG11', 'XPML11'],
      internationalCurrencies: ['USD', 'EUR'],
    },
    investments: [
      { asset: 'BTC', percentage: 20 },
      { asset: 'ETH', percentage: 15 },
      { asset: 'AAPL', percentage: 10 },
      { asset: 'TSLA', percentage: 10 },
      { asset: 'HGLG11', percentage: 15 },
      { asset: 'USD', percentage: 30 },
    ],
  },
  {
    id: 2,
    name: 'Maria Souza',
    photo: 'https://via.placeholder.com/150',
    description: 'Trader experiente em bolsa de valores e moedas internacionais.',
    performance: '+18%',
    portfolio: {
      cryptocurrencies: ['BNB', 'XRP'],
      stocks: ['GOOGL', 'MSFT'],
      realEstateFunds: ['VISC11'],
      internationalCurrencies: ['GBP', 'JPY'],
    },
    investments: [
      { asset: 'BNB', percentage: 25 },
      { asset: 'XRP', percentage: 10 },
      { asset: 'GOOGL', percentage: 20 },
      { asset: 'MSFT', percentage: 15 },
      { asset: 'VISC11', percentage: 10 },
      { asset: 'GBP', percentage: 20 },
    ],
  },
  {
    id: 3,
    name: 'Carlos Oliveira',
    photo: 'https://via.placeholder.com/150',
    description: 'Focado em criptomoedas e ações de tecnologia.',
    performance: '+30%',
    portfolio: {
      cryptocurrencies: ['SOL', 'DOT'],
      stocks: ['NVDA', 'AMD'],
      realEstateFunds: [],
      internationalCurrencies: ['CAD'],
    },
    investments: [
      { asset: 'SOL', percentage: 30 },
      { asset: 'DOT', percentage: 20 },
      { asset: 'NVDA', percentage: 25 },
      { asset: 'AMD', percentage: 15 },
      { asset: 'CAD', percentage: 10 },
    ],
  },
];

const InvestorCard = ({ investor, onSelect }) => (
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
      <CButton color="primary" onClick={() => onSelect(investor)}>
        Ver Perfil
      </CButton>
    </CCardBody>
  </CCard>
);

const ModelosRecomendados = () => {
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const normalizeString = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  const filteredInvestors = investorsData.filter((investor) =>
    normalizeString(investor.name).includes(normalizeString(searchTerm))
  );

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <CRow>
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardBody>
            <div className="d-flex align-items-center">
              <CIcon icon={cilMagnifyingGlass} className="me-2" />
              <CFormInput
                type="text"
                placeholder="Buscar investidor/trader..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Investidores/Traders Recomendados</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              {filteredInvestors.map((investor) => (
                <CCol md={4} key={investor.id} className="mb-4">
                  <InvestorCard investor={investor} onSelect={setSelectedInvestor} />
                </CCol>
              ))}
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>

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
                  <h5>Carteira de Investimentos</h5>
                  <CTable striped hover responsive>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell>Tipo</CTableHeaderCell>
                        <CTableHeaderCell>Ativos</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableDataCell>Criptomoedas</CTableDataCell>
                        <CTableDataCell>
                          {selectedInvestor.portfolio.cryptocurrencies.join(', ')}
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell>Ações</CTableDataCell>
                        <CTableDataCell>
                          {selectedInvestor.portfolio.stocks.join(', ')}
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell>Fundos Imobiliários</CTableDataCell>
                        <CTableDataCell>
                          {selectedInvestor.portfolio.realEstateFunds.join(', ') || 'Nenhum'}
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell>Moedas Internacionais</CTableDataCell>
                        <CTableDataCell>
                          {selectedInvestor.portfolio.internationalCurrencies.join(', ')}
                        </CTableDataCell>
                      </CTableRow>
                    </CTableBody>
                  </CTable>

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
          <br />
        </CCol>
      )}
    </CRow>
  );
};

export default ModelosRecomendados;