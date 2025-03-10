import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CProgress,
  CButton,
  CWidgetStatsC,
  CListGroup,
  CListGroupItem,
  CFormInput,
  CForm,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilChartLine, cilArrowTop, cilArrowBottom, cilDollar, cilNewspaper, cilLightbulb, cilFile, cilCheckCircle } from '@coreui/icons';
import { CChartLine, CChartBar, CChartDoughnut } from '@coreui/react-chartjs';

const BolsaEmAlta = () => {
  // Dados fictícios de ações
  const acoesData = [
    {
      name: 'Apple Inc.',
      symbol: 'AAPL',
      price: '$150',
      change: '+1.5%',
      volume: '$10B',
      marketCap: '$2.5T',
      chartData: [148, 149, 150, 149.5, 150, 150.5, 150],
      dividendYield: '0.6%',
      peRatio: '28.5',
      documents: [
        { title: 'Relatório Anual 2022', link: '#' },
        { title: 'Relatório de Dividendos', link: '#' },
        { title: 'Compliance Report', link: '#' },
      ],
    },
    {
      name: 'Tesla Inc.',
      symbol: 'TSLA',
      price: '$700',
      change: '-0.8%',
      volume: '$5B',
      marketCap: '$700B',
      chartData: [710, 705, 700, 702, 700, 698, 700],
      dividendYield: '0%',
      peRatio: '75.3',
      documents: [
        { title: 'Relatório Anual 2022', link: '#' },
        { title: 'Relatório de Sustentabilidade', link: '#' },
      ],
    },
    {
      name: 'Amazon.com Inc.',
      symbol: 'AMZN',
      price: '$3300',
      change: '+2.2%',
      volume: '$3B',
      marketCap: '$1.6T',
      chartData: [3250, 3280, 3300, 3290, 3300, 3310, 3300],
      dividendYield: '0%',
      peRatio: '60.2',
      documents: [
        { title: 'Relatório Anual 2022', link: '#' },
        { title: 'Relatório de Lucros', link: '#' },
      ],
    },
    {
      name: 'Microsoft Corp.',
      symbol: 'MSFT',
      price: '$300',
      change: '+0.9%',
      volume: '$4B',
      marketCap: '$2.2T',
      chartData: [295, 298, 300, 299, 300, 301, 300],
      dividendYield: '0.8%',
      peRatio: '32.1',
      documents: [
        { title: 'Relatório Anual 2022', link: '#' },
        { title: 'Relatório de Dividendos', link: '#' },
      ],
    },
  ];

  // Notícias fictícias
  const newsData = [
    {
      title: 'Apple atinge novo recorde de valor de mercado',
      description: 'A Apple ultrapassou a marca de $2.5 trilhões em valor de mercado.',
    },
    {
      title: 'Tesla anuncia novo modelo de carro elétrico',
      description: 'A Tesla revelou seu novo modelo de carro elétrico com maior autonomia.',
    },
    {
      title: 'Amazon expande operações na Europa',
      description: 'A Amazon anunciou a expansão de seus centros de distribuição na Europa.',
    },
  ];

  // Estado para controlar o modal de documentação
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [selectedCompany, setSelectedCompany] = React.useState(null);

  // Função para abrir o modal de documentação
  const openDocumentModal = (company) => {
    setSelectedCompany(company);
    setVisibleModal(true);
  };

  return (
    <CRow>
      {/* Cards de Destaque */}
      <CCol xs={12} className="mb-4">
        <CRow>
          <CCol md={4}>
            <CWidgetStatsC
              icon={<CIcon icon={cilChartLine} height={36} />}
              value="$150"
              title="Apple Inc. (AAPL)"
              progress={{ color: 'success', value: 75 }}
            />
          </CCol>
          <CCol md={4}>
            <CWidgetStatsC
              icon={<CIcon icon={cilChartLine} height={36} />}
              value="$700"
              title="Tesla Inc. (TSLA)"
              progress={{ color: 'info', value: 60 }}
            />
          </CCol>
          <CCol md={4}>
            <CWidgetStatsC
              icon={<CIcon icon={cilChartLine} height={36} />}
              value="$3300"
              title="Amazon.com Inc. (AMZN)"
              progress={{ color: 'warning', value: 45 }}
            />
          </CCol>
        </CRow>
      </CCol>

      {/* Tabela de Ações com Documentos */}
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Ranking de Ações</strong>
          </CCardHeader>
          <CCardBody>
            <CTable striped hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Preço</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Variação (24h)</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Volume (24h)</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Capitalização de Mercado</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Documentos</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {acoesData.map((acao, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{index + 1}</CTableDataCell>
                    <CTableDataCell>
                      <strong>{acao.name}</strong> ({acao.symbol})
                    </CTableDataCell>
                    <CTableDataCell>{acao.price}</CTableDataCell>
                    <CTableDataCell>
                      <span
                        style={{
                          color: acao.change.includes('+') ? 'green' : 'red',
                        }}
                      >
                        {acao.change}
                      </span>
                    </CTableDataCell>
                    <CTableDataCell>{acao.volume}</CTableDataCell>
                    <CTableDataCell>{acao.marketCap}</CTableDataCell>
                    <CTableDataCell>
                      <CButton color="info" onClick={() => openDocumentModal(acao)}>
                        <CIcon icon={cilFile} /> Ver Documentos
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Gráfico Comparativo */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Comparativo de Desempenho</strong>
          </CCardHeader>
          <CCardBody>
            <div style={{ height: '300px' }}>
              <CChartLine
                data={{
                  labels: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
                  datasets: acoesData.map((acao, index) => ({
                    label: acao.name,
                    borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
                    data: acao.chartData,
                  })),
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                  },
                }}
              />
            </div>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Modal de Documentação */}
      <CModal visible={visibleModal} onClose={() => setVisibleModal(false)} size="lg">
        <CModalHeader>
          <CModalTitle>Documentação da Empresa</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {selectedCompany && (
            <CRow>
              <CCol md={6}>
                <h5>{selectedCompany.name} ({selectedCompany.symbol})</h5>
                <p>Dividend Yield: {selectedCompany.dividendYield}</p>
                <p>P/E Ratio: {selectedCompany.peRatio}</p>
                <h6>Documentos Disponíveis:</h6>
                <CListGroup>
                  {selectedCompany.documents.map((doc, index) => (
                    <CListGroupItem key={index}>
                      <a href={doc.link} target="_blank" rel="noopener noreferrer">
                        {doc.title}
                      </a>
                    </CListGroupItem>
                  ))}
                </CListGroup>
              </CCol>
              <CCol md={6}>
                <div style={{ height: '300px' }}>
                  <CChartLine
                    data={{
                      labels: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
                      datasets: [
                        {
                          label: 'Preço',
                          backgroundColor: 'rgba(151, 187, 205, 0.2)',
                          borderColor: selectedCompany.change.includes('+') ? 'green' : 'red',
                          pointBackgroundColor: selectedCompany.change.includes('+') ? 'green' : 'red',
                          pointBorderColor: '#fff',
                          data: selectedCompany.chartData,
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
                    }}
                  />
                </div>
              </CCol>
            </CRow>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisibleModal(false)}>
            Fechar
          </CButton>
        </CModalFooter>
      </CModal>

      {/* Notícias e Atualizações */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Últimas Notícias</strong>
          </CCardHeader>
          <CCardBody>
            <CCarousel indicators>
              {newsData.map((news, index) => (
                <CCarouselItem key={index}>
                  <div className="d-flex flex-column p-4">
                    <div className="mb-3">
                      <h5>{news.title}</h5>
                      <p>{news.description}</p>
                    </div>
                    <div className="d-flex justify-content-start w-100 text-aline-center">
                      <CButton color="primary">Leia Mais</CButton>
                    </div>
                  </div>
                </CCarouselItem>
              ))}
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Dicas e Insights */}
      <CCol xs={12}>
        <CCard>
          <CCardHeader>
            <strong>Dicas e Insights</strong>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>
                <CIcon icon={cilLightbulb} className="me-2" />
                Diversifique sua carteira para reduzir riscos.
              </CListGroupItem>
              <CListGroupItem>
                <CIcon icon={cilLightbulb} className="me-2" />
                Acompanhe as tendências do mercado regularmente.
              </CListGroupItem>
              <CListGroupItem>
                <CIcon icon={cilLightbulb} className="me-2" />
                Verifique os relatórios financeiros antes de investir.
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
        <br/>
      </CCol>
    </CRow>
  );
};

export default BolsaEmAlta;