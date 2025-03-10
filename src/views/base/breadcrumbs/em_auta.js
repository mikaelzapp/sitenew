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
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilChartLine, cilArrowTop, cilArrowBottom, cilDollar, cilNewspaper, cilLightbulb } from '@coreui/icons';
import { CChartLine, CChartBar } from '@coreui/react-chartjs';

const CriptoEmAlta = () => {
  // Dados fictícios de criptomoedas
  const criptoData = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$29,000',
      change: '+2.5%',
      volume: '$15B',
      marketCap: '$550B',
      chartData: [29, 30, 28, 29.5, 30, 29.8, 29],
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$1,800',
      change: '-1.2%',
      volume: '$8B',
      marketCap: '$220B',
      chartData: [1.8, 1.85, 1.78, 1.82, 1.8, 1.79, 1.8],
    },
    {
      name: 'Binance Coin',
      symbol: 'BNB',
      price: '$250',
      change: '+3.8%',
      volume: '$2B',
      marketCap: '$40B',
      chartData: [250, 255, 245, 248, 250, 252, 250],
    },
    {
      name: 'Cardano',
      symbol: 'ADA',
      price: '$0.30',
      change: '+0.5%',
      volume: '$500M',
      marketCap: '$10B',
      chartData: [0.3, 0.31, 0.29, 0.3, 0.31, 0.3, 0.3],
    },
  ];

  // Notícias fictícias
  const newsData = [
    {
      title: 'Bitcoin atinge novo recorde em 2023',
      description: 'O preço do Bitcoin ultrapassou a marca de $30,000, alcançando um novo recorde para o ano.',
    },
    {
      title: 'Ethereum 2.0: O que esperar?',
      description: 'A atualização do Ethereum promete melhorar a escalabilidade e reduzir custos de transação.',
    },
    {
      title: 'Binance lança nova funcionalidade',
      description: 'A Binance introduziu uma nova ferramenta para facilitar a negociação de criptomoedas.',
    },
  ];

  return (
    <CRow>
      {/* Cards de Destaque */}
      <CCol xs={12} className="mb-4">
        <CRow>
          <CCol md={4}>
            <CWidgetStatsC
              icon={<CIcon icon={cilChartLine} height={36} />}
              value="$29,000"
              title="Bitcoin (BTC)"
              progress={{ color: 'success', value: 75 }}
            />
          </CCol>
          <CCol md={4}>
            <CWidgetStatsC
              icon={<CIcon icon={cilChartLine} height={36} />}
              value="$1,800"
              title="Ethereum (ETH)"
              progress={{ color: 'info', value: 60 }}
            />
          </CCol>
          <CCol md={4}>
            <CWidgetStatsC
              icon={<CIcon icon={cilChartLine} height={36} />}
              value="$250"
              title="Binance Coin (BNB)"
              progress={{ color: 'warning', value: 45 }}
            />
          </CCol>
        </CRow>
      </CCol>

      {/* Tabela de Criptomoedas */}
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Ranking de Criptomoedas</strong>
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
                  <CTableHeaderCell scope="col">Gráfico (7 dias)</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {criptoData.map((cripto, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{index + 1}</CTableDataCell>
                    <CTableDataCell>
                      <strong>{cripto.name}</strong> ({cripto.symbol})
                    </CTableDataCell>
                    <CTableDataCell>{cripto.price}</CTableDataCell>
                    <CTableDataCell>
                      <span
                        style={{
                          color: cripto.change.includes('+') ? 'green' : 'red',
                        }}
                      >
                        {cripto.change}
                      </span>
                    </CTableDataCell>
                    <CTableDataCell>{cripto.volume}</CTableDataCell>
                    <CTableDataCell>{cripto.marketCap}</CTableDataCell>
                    <CTableDataCell>
                      <div style={{ width: '100px', height: '40px' }}>
                        <CChartLine
                          data={{
                            labels: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
                            datasets: [
                              {
                                label: 'Preço',
                                backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                borderColor: cripto.change.includes('+') ? 'green' : 'red',
                                pointBackgroundColor: cripto.change.includes('+') ? 'green' : 'red',
                                pointBorderColor: '#fff',
                                data: cripto.chartData,
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
                                display: false,
                              },
                              y: {
                                display: false,
                              },
                            },
                          }}
                        />
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>

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

      {/* Análise de Mercado */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Análise de Mercado</strong>
          </CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Bitcoin', 'Ethereum', 'Binance Coin', 'Cardano'],
                datasets: [
                  {
                    label: 'Volume de Negociação (24h)',
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                    data: [15, 8, 2, 0.5],
                  },
                ],
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
                Invista apenas o que você pode perder.
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
        <br/>
      </CCol>
    </CRow>
  );
};

export default CriptoEmAlta;