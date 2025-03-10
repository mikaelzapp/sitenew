import React, { useState } from 'react';
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
  CButton,
  CListGroup,
  CListGroupItem,
  CFormInput,
  CFormSelect,
  CBadge,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilFile, cilLightbulb } from '@coreui/icons';
import { CChartLine, CChartDoughnut } from '@coreui/react-chartjs';

const BolsaInvestimento = () => {
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
        recommendation: 'Investir', // Recomendação fictícia
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
        recommendation: 'Neutro', // Recomendação fictícia
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
        recommendation: 'Não Investir', // Recomendação fictícia
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
        recommendation: 'Investir', // Recomendação fictícia
        documents: [
          { title: 'Relatório Anual 2022', link: '#' },
          { title: 'Relatório de Dividendos', link: '#' },
        ],
      },
  ];

  // Dados fictícios dos investimentos do usuário
  const userInvestments = [
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
      recommendation: 'Investir',
      investedAmount: '$5000', // Valor investido pelo usuário
      profitLoss: '+$250', // Lucro ou prejuízo do investimento
      documents: [
        { title: 'Relatório Anual 2022', link: '#' },
        { title: 'Relatório de Dividendos', link: '#' },
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
      recommendation: 'Neutro',
      investedAmount: '$3000', // Valor investido pelo usuário
      profitLoss: '-$150', // Lucro ou prejuízo do investimento
      documents: [
        { title: 'Relatório Anual 2022', link: '#' },
        { title: 'Relatório de Sustentabilidade', link: '#' },
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
      recommendation: 'Investir',
      investedAmount: '$2000', // Valor investido pelo usuário
      profitLoss: '+$100', // Lucro ou prejuízo do investimento
      documents: [
        { title: 'Relatório Anual 2022', link: '#' },
        { title: 'Relatório de Dividendos', link: '#' },
      ],
    },
  ];

  // Estado para controlar o modal de documentação
  const [visibleModal, setVisibleModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Estado para filtros
  const [filterSector, setFilterSector] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Estado para controlar a opção selecionada no gráfico
  const [selectedChartOption, setSelectedChartOption] = useState('rendimento');

  // Função para abrir o modal de documentação
  const openDocumentModal = (company) => {
    setSelectedCompany(company);
    setVisibleModal(true);
  };

  // Função para comprar ação
  const handleBuy = () => {
    alert(`Você comprou ações da ${selectedCompany.name} (${selectedCompany.symbol})`);
  };

  // Função para vender ação
  const handleSell = () => {
    alert(`Você vendeu ações da ${selectedCompany.name} (${selectedCompany.symbol})`);
  };

  // Função para filtrar ações
  const filteredAcoes = acoesData.filter((acao) => {
    const matchesSector = filterSector === 'Todos' || acao.sector === filterSector;
    const matchesSearch = acao.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSector && matchesSearch;
  });

  // Calcular o valor total investido
  const totalInvested = userInvestments.reduce((total, investment) => {
    const amount = parseFloat(investment.investedAmount.replace('$', '').replace(',', ''));
    return total + amount;
  }, 0);

  // Preparar dados para o gráfico de rosca
  const doughnutData = {
    labels: userInvestments.map((investment) => investment.name),
    datasets: [
      {
        label: 'Valor Investido',
        backgroundColor: [
          '#36A2EB', // Azul
          '#FF6384', // Rosa
          '#FFCE56', // Amarelo
          '#4BC0C0', // Verde-água
          '#9966FF', // Roxo
        ],
        data: userInvestments.map((investment) => {
          const amount = parseFloat(investment.investedAmount.replace('$', '').replace(',', ''));
          return ((amount / totalInvested) * 100).toFixed(2); // Porcentagem do total
        }),
      },
    ],
  };

  // Preparar dados para o gráfico de linha com base na opção selecionada
  const getLineChartData = () => {
    const labels = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'];

    switch (selectedChartOption) {
      case 'rendimento':
        return {
          labels,
          datasets: userInvestments.map((investment) => ({
            label: investment.name,
            borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
            data: investment.chartData,
          })),
        };
      case 'queda/subida':
        return {
          labels,
          datasets: userInvestments.map((investment) => ({
            label: investment.name,
            borderColor: investment.change.includes('+') ? 'green' : 'red',
            data: investment.chartData,
          })),
        };
      case 'prospecção':
        return {
          labels,
          datasets: userInvestments.map((investment) => ({
            label: investment.name,
            borderColor: '#FFCE56', // Amarelo
            data: investment.chartData.map((value) => value * 1.1), // Aumento de 10% para simular prospecção
          })),
        };
      case 'variação':
        return {
          labels,
          datasets: userInvestments.map((investment) => ({
            label: investment.name,
            borderColor: '#36A2EB', // Azul
            data: investment.chartData.map((value, index, array) => {
              if (index === 0) return 0;
              return ((value - array[index - 1]) / array[index - 1]) * 100; // Variação percentual
            }),
          })),
        };
      default:
        return {
          labels,
          datasets: [],
        };
    }
  };

  return (
    <CRow>
      {/* Filtros e Pesquisa */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardBody>
            <CRow>
              <CCol md={4}>
                <CFormSelect
                  value={filterSector}
                  onChange={(e) => setFilterSector(e.target.value)}
                >
                  <option value="Todos">Todos os Setores</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Automotivo">Automotivo</option>
                  <option value="Varejo">Varejo</option>
                </CFormSelect>
              </CCol>
              <CCol md={8}>
                <CFormInput
                  type="text"
                  placeholder="Pesquisar ações..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Tabela de Ações com Recomendações */}
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
                  <CTableHeaderCell scope="col">Recomendação</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Documentos</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredAcoes.map((acao, index) => (
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
                      <CBadge
                        color={
                          acao.recommendation === 'Investir'
                            ? 'success'
                            : acao.recommendation === 'Neutro'
                            ? 'warning'
                            : 'danger'
                        }
                      >
                        {acao.recommendation}
                      </CBadge>
                    </CTableDataCell>
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
            <div style={{ height: '200px' }}>
              <CChartLine
                data={{
                  labels: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
                  datasets: filteredAcoes.map((acao, index) => ({
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

      {/* Meus Investimentos */}
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Meus Investimentos</strong>
          </CCardHeader>
          <CCardBody>
            <CTable striped hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Preço</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Variação (24h)</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Valor Investido</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Lucro/Prejuízo</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Recomendação</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Documentos</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {userInvestments.map((investment, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{index + 1}</CTableDataCell>
                    <CTableDataCell>
                      <strong>{investment.name}</strong> ({investment.symbol})
                    </CTableDataCell>
                    <CTableDataCell>{investment.price}</CTableDataCell>
                    <CTableDataCell>
                      <span
                        style={{
                          color: investment.change.includes('+') ? 'green' : 'red',
                        }}
                      >
                        {investment.change}
                      </span>
                    </CTableDataCell>
                    <CTableDataCell>{investment.investedAmount}</CTableDataCell>
                    <CTableDataCell>
                      <span
                        style={{
                          color: investment.profitLoss.includes('+') ? 'green' : 'red',
                        }}
                      >
                        {investment.profitLoss}
                      </span>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge
                        color={
                          investment.recommendation === 'Investir'
                            ? 'success'
                            : investment.recommendation === 'Neutro'
                            ? 'warning'
                            : 'danger'
                        }
                      >
                        {investment.recommendation}
                      </CBadge>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CButton color="info" onClick={() => openDocumentModal(investment)}>
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

      {/* Gráficos de Investimentos */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Gráficos de Investimentos</strong>
          </CCardHeader>
          <CCardBody>
            {/* Menu de Opções */}
            <CFormSelect
              value={selectedChartOption}
              onChange={(e) => setSelectedChartOption(e.target.value)}
              className="mb-3"
            >
              <option value="rendimento">Rendimento</option>
              <option value="queda/subida">Queda/Subida</option>
              <option value="prospecção">Prospecção</option>
              <option value="variação">Variação</option>
            </CFormSelect>

            {/* Gráfico de Linha */}
            <div style={{ height: '200px' }}>
              <CChartLine
                data={getLineChartData()}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: selectedChartOption !== 'variação', // Começa do zero, exceto para variação
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
            <>
              {/* Conteúdo da Documentação e Gráfico */}
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

              {/* Botões Comprar e Vender na parte inferior esquerda */}
              <CRow className="mt-3">
                <CCol md={12}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <CButton color="success" onClick={handleBuy}>
                      Comprar Ação
                    </CButton>
                    <CButton color="danger" onClick={handleSell}>
                      Vender Ação
                    </CButton>
                  </div>
                </CCol>
              </CRow>
            </>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisibleModal(false)}>
            Fechar
          </CButton>
        </CModalFooter>
      </CModal>

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

export default BolsaInvestimento;