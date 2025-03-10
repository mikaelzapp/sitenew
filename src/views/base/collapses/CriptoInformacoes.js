import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CListGroup,
  CListGroupItem,
  CProgress,
  CImage,
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
} from '@coreui/react';
import { CChartLine, CChartBar } from '@coreui/react-chartjs';
import CIcon from '@coreui/icons-react';
import { cilNewspaper, cilChartLine, cilArrowRight } from '@coreui/icons';

const CriptoInformacoes = () => {
  // Dados fictícios de criptomoedas
  const cryptoData = [
    {
      name: 'Bitcoin (BTC)',
      price: '$29,000',
      change: '+2.5%',
      chartData: [29, 30, 28, 29.5, 30, 29.8, 29],
    },
    {
      name: 'Ethereum (ETH)',
      price: '$1,800',
      change: '-1.2%',
      chartData: [1.8, 1.85, 1.78, 1.82, 1.8, 1.79, 1.8],
    },
    {
      name: 'Binance Coin (BNB)',
      price: '$250',
      change: '+3.8%',
      chartData: [250, 255, 245, 248, 250, 252, 250],
    },
  ];

  // Dados fictícios de notícias
  const newsData = [
    {
      title: 'Bitcoin atinge novo recorde em 2023',
      description: 'O preço do Bitcoin ultrapassou a marca de $30,000, alcançando um novo recorde para o ano.',
      image: 'https://via.placeholder.com/800x400',
      link: '#',
    },
    {
      title: 'Ethereum 2.0: O que esperar?',
      description: 'A atualização do Ethereum promete melhorar a escalabilidade e reduzir custos de transação.',
      image: 'https://via.placeholder.com/800x400',
      link: '#',
    },
    {
      title: 'Binance lança nova funcionalidade',
      description: 'A Binance introduziu uma nova ferramenta para facilitar a negociação de criptomoedas.',
      image: 'https://via.placeholder.com/800x400',
      link: '#',
    },
  ];

  return (
    <CRow>
      {/* Destaques do Mercado */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Destaques do Mercado</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              {cryptoData.map((crypto, index) => (
                <CCol md={4} key={index} className="mb-4">
                  <CCard className="h-100">
                    <CCardBody>
                      <h5>{crypto.name}</h5>
                      <p className="text-body-secondary">Preço: {crypto.price}</p>
                      <p
                        style={{
                          color: crypto.change.includes('+') ? 'green' : 'red',
                        }}
                      >
                        Variação: {crypto.change}
                      </p>
                      <div style={{ height: '100px' }}>
                        <CChartLine
                          data={{
                            labels: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
                            datasets: [
                              {
                                label: 'Preço',
                                backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                borderColor: crypto.change.includes('+') ? 'green' : 'red',
                                pointBackgroundColor: crypto.change.includes('+') ? 'green' : 'red',
                                pointBorderColor: '#fff',
                                data: crypto.chartData,
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
                    </CCardBody>
                  </CCard>
                </CCol>
              ))}
            </CRow>
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
                 </div>
               </CCarouselItem>
             ))}
           </CCarousel>
         </CCardBody>
       </CCard>
     </CCol>

      {/* Tendências e Análises */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Tendências e Análises</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md={6}>
                <h5>Desempenho das Principais Criptomoedas</h5>
                <div style={{ height: '300px' }}>
                  <CChartBar
                    data={{
                      labels: cryptoData.map((crypto) => crypto.name),
                      datasets: [
                        {
                          label: 'Variação (%)',
                          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                          data: cryptoData.map((crypto) =>
                            parseFloat(crypto.change.replace('%', ''))
                          ),
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
                        y: {
                          beginAtZero: true,
                        },
                      },
                    }}
                  />
                </div>
              </CCol>
              <CCol md={6}>
                <h5>Análises de Especialistas</h5>
                <CListGroup>
                  <CListGroupItem>
                    <CIcon icon={cilNewspaper} className="me-2" />
                    Bitcoin deve continuar em alta nos próximos meses.
                  </CListGroupItem>
                  <CListGroupItem>
                    <CIcon icon={cilNewspaper} className="me-2" />
                    Ethereum 2.0 pode revolucionar o mercado de criptomoedas.
                  </CListGroupItem>
                  <CListGroupItem>
                    <CIcon icon={cilNewspaper} className="me-2" />
                    Altcoins como Binance Coin e Cardano ganham destaque.
                  </CListGroupItem>
                </CListGroup>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CriptoInformacoes;