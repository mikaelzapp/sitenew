import React, { useState } from 'react';
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
  CBadge,
  CFormInput,
} from '@coreui/react';
import { CChartLine } from '@coreui/react-chartjs'; // Gráfico de linhas
import CIcon from '@coreui/icons-react';
import { cilArrowRight, cilSearch, cilBell } from '@coreui/icons';

const BolsaValores = () => {
  // Dados fictícios de ações
  const stockData = [
    {
      name: 'PETR4',
      fullName: 'Petrobras',
      price: 'R$ 32,50',
      change: '+1.8%',
      chartData: [32, 32.5, 31.8, 32.2, 32.6, 32.4, 32.5],
      volume: '15M',
      sector: 'Energia',
    },
    {
      name: 'VALE3',
      fullName: 'Vale S.A.',
      price: 'R$ 68,90',
      change: '-0.5%',
      chartData: [69, 68.5, 68.8, 69.2, 68.7, 68.9, 68.9],
      volume: '10M',
      sector: 'Mineração',
    },
    {
      name: 'ITUB4',
      fullName: 'Itaú Unibanco',
      price: 'R$ 26,70',
      change: '+2.3%',
      chartData: [26, 26.5, 26.2, 26.8, 26.7, 26.6, 26.7],
      volume: '8M',
      sector: 'Bancos',
    },
  ];

  // Dados fictícios de notícias
  const newsData = [
    {
      title: 'Petrobras anuncia novo aumento no preço dos combustíveis',
      description: 'A Petrobras informou que reajustará os preços da gasolina e do diesel a partir da próxima semana.',
      image: 'https://via.placeholder.com/800x400',
      link: '#',
      tags: ['Energia', 'Petróleo'],
    },
    {
      title: 'Vale investe em mineração sustentável',
      description: 'A Vale anunciou um novo projeto de mineração sustentável na Amazônia, com foco em reduzir o impacto ambiental.',
      image: 'https://via.placeholder.com/800x400',
      link: '#',
      tags: ['Mineração', 'Sustentabilidade'],
    },
    {
      title: 'Itaú Unibanco lança nova plataforma digital',
      description: 'O Itaú Unibanco apresentou uma nova plataforma digital para facilitar investimentos e operações bancárias.',
      image: 'https://via.placeholder.com/800x400',
      link: '#',
      tags: ['Bancos', 'Tecnologia'],
    },
  ];

  // Dados fictícios para gráfico de linhas (três linhas)
  const sectorData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'], // Rótulos do eixo X
    datasets: [
      {
        label: 'Energia',
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Vermelho
        borderColor: '#FF6384',
        pointBackgroundColor: '#FF6384',
        pointBorderColor: '#fff',
        data: [30, 25, 35, 40, 45, 50, 55], // Dados da linha 1
      },
      {
        label: 'Mineração',
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Azul
        borderColor: '#36A2EB',
        pointBackgroundColor: '#36A2EB',
        pointBorderColor: '#fff',
        data: [20, 22, 28, 30, 32, 35, 40], // Dados da linha 2
      },
      {
        label: 'Bancos',
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Verde
        borderColor: '#4BC0C0',
        pointBackgroundColor: '#4BC0C0',
        pointBorderColor: '#fff',
        data: [10, 15, 20, 25, 30, 35, 40], // Dados da linha 3
      },
    ],
  };

  // Estado para busca
  const [searchTerm, setSearchTerm] = useState('');

  // Função para filtrar ações e notícias
  const filteredStocks = stockData.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stock.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredNews = newsData.filter((news) =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div style={{ paddingBottom: '100px' }}> {/* Adicionado padding-bottom para evitar sobreposição do footer */}
      <CRow>
        {/* Barra de Pesquisa e Alertas */}
        <CCol xs={12} className="mb-4">
          <CRow className="align-items-center">
            <CCol md={8}>
              <CFormInput
                placeholder="Pesquisar ações, notícias ou análises..."
                className="w-100"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                append={<CIcon icon={cilSearch} className="text-secondary" />}
              />
            </CCol>
            <CCol md={4} className="text-end">
              <CButton color="warning" className="me-2">
                <CIcon icon={cilBell} /> Alertas
              </CButton>
            </CCol>
          </CRow>
        </CCol>

        {/* Destaques do Mercado */}
        <CCol xs={12} className="mb-4">
          <CCard className="shadow-sm">
            <CCardHeader color="primary">
              <strong>Destaques do Mercado</strong>
            </CCardHeader>
            <CCardBody>
              <CRow>
                {filteredStocks.map((stock, index) => (
                  <CCol md={4} key={index} className="mb-4">
                    <CCard className="h-100 hover-effect">
                      <CCardBody>
                        <div className="d-flex justify-content-between align-items-center">
                          <h5>{stock.name}</h5>
                          <CBadge color={stock.change.includes('+') ? 'success' : 'danger'}>
                            {stock.change}
                          </CBadge>
                        </div>
                        <p className="text-muted">{stock.fullName}</p>
                        <p className="fs-4">{stock.price}</p>
                        <div style={{ height: '100px' }}>
                          <CChartLine
                            data={{
                              labels: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
                              datasets: [
                                {
                                  label: 'Preço',
                                  backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                  borderColor: stock.change.includes('+') ? '#28a745' : '#dc3545',
                                  pointBackgroundColor: stock.change.includes('+') ? '#28a745' : '#dc3545',
                                  pointBorderColor: '#fff',
                                  data: stock.chartData,
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
                        <div className="mt-3">
                          <small className="text-muted">Volume: {stock.volume}</small>
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
          <CCard className="shadow-sm">
            <CCardHeader color="info">
              <strong>Últimas Notícias</strong>
            </CCardHeader>
            <CCardBody>
              <CRow>
                {filteredNews.map((news, index) => (
                  <CCol md={4} key={index} className="mb-4">
                    <CCard className="h-100 hover-effect">
                      <CImage src={news.image} alt={news.title} className="card-img-top" />
                      <CCardBody>
                        <h5>{news.title}</h5>
                        <p>{news.description}</p>
                        <div>
                          {news.tags.map((tag, idx) => (
                            <CBadge color="secondary" key={idx} className="me-1">
                              {tag}
                            </CBadge>
                          ))}
                        </div>
                        <CButton color="link" className="mt-2 p-0">
                          Leia mais <CIcon icon={cilArrowRight} />
                        </CButton>
                      </CCardBody>
                    </CCard>
                  </CCol>
                ))}
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>

        {/* Análises e Insights */}
        <CCol xs={12} className="mb-4">
          <CCard className="shadow-sm">
            <CCardHeader color="success">
              <strong>Análises e Insights</strong>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol md={6}>
                  <h5>Desempenho por Setor</h5>
                  <div style={{ height: '30px', position: 'relative' }}>
                    <CChartLine
                      data={sectorData}
                      options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: {
                          legend: {
                            display: true,
                            position: 'top',
                          },
                        },
                        scales: {
                          x: {
                            display: true,
                            title: {
                              display: true,
                              text: 'Meses',
                            },
                          },
                          y: {
                            display: true,
                            title: {
                              display: true,
                              text: 'Porcentagem',
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </CCol>
                <CCol md={6}>
                  <h5>Top Ações do Dia</h5>
                  <CListGroup>
                    {stockData.map((stock, index) => (
                      <CListGroupItem key={index} className="d-flex justify-content-between align-items-center">
                        <div>
                          <strong>{stock.name}</strong>
                          <small className="text-muted d-block">{stock.fullName}</small>
                        </div>
                        <CBadge color={stock.change.includes('+') ? 'success' : 'danger'}>
                          {stock.change}
                        </CBadge>
                      </CListGroupItem>
                    ))}
                  </CListGroup>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default BolsaValores;