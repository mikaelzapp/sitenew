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
  CWidgetStatsC,
  CListGroup,
  CListGroupItem,
  CForm,
  CFormInput,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilChartLine, cilLightbulb, cilDollar, cilInfo } from '@coreui/icons';
import { CChartLine, CChartBar } from '@coreui/react-chartjs';

const CriptoInvestimento = () => {
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

  // Estado para a criptomoeda selecionada
  const [selectedCrypto, setSelectedCrypto] = useState(criptoData[0]);

  // Estado para o valor de compra/venda
  const [tradeValue, setTradeValue] = useState('');

  // Estado para o lucro do usuário
  const [userProfit, setUserProfit] = useState(0);

  // Função para buscar e selecionar a criptomoeda
  const handleSearch = (event) => {
    const selected = criptoData.find((crypto) => crypto.name === event.target.value);
    if (selected) {
      setSelectedCrypto(selected);
    }
  };

  // Recomendações de investimento
  const recommendations = [
    {
      name: 'Bitcoin',
      reason: 'Bitcoin é a criptomoeda mais consolidada e tem um histórico de valorização consistente.',
      performance: [29, 30, 28, 29.5, 30, 29.8, 29],
    },
    {
      name: 'Ethereum',
      reason: 'Ethereum é a principal plataforma para contratos inteligentes e tem um ecossistema em crescimento.',
      performance: [1.8, 1.85, 1.78, 1.82, 1.8, 1.79, 1.8],
    },
    {
      name: 'Binance Coin',
      reason: 'Binance Coin tem utilidade na maior exchange do mundo e oferece descontos em taxas.',
      performance: [250, 255, 245, 248, 250, 252, 250],
    },
  ];

  // Função para comprar/vender criptomoeda
  const handleTrade = (action) => {
    const value = parseFloat(tradeValue);
    if (!isNaN(value) && value > 0) {
      const profit = action === 'buy' ? -value : value * 1.1; // Exemplo de lucro de 10% na venda
      setUserProfit(userProfit + profit);
      setTradeValue('');
      alert(`${action === 'buy' ? 'Compra' : 'Venda'} realizada com sucesso!`);
    } else {
      alert('Insira um valor válido.');
    }
  };

  return (
    <CRow>
      {/* Área de Busca e Seleção de Criptomoedas */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Buscar Criptomoeda</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormInput
                type="text"
                list="cryptoList"
                placeholder="Digite o nome da criptomoeda..."
                onChange={handleSearch}
              />
              <datalist id="cryptoList">
                {criptoData.map((crypto, index) => (
                  <option key={index} value={crypto.name} />
                ))}
              </datalist>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Gráfico da Criptomoeda Selecionada */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Gráfico de Desempenho - {selectedCrypto.name}</strong>
          </CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
                datasets: [
                  {
                    label: 'Preço',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: selectedCrypto.change.includes('+') ? 'green' : 'red',
                    pointBackgroundColor: selectedCrypto.change.includes('+') ? 'green' : 'red',
                    pointBorderColor: '#fff',
                    data: selectedCrypto.chartData,
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
            <div className="mt-3">
              <CInputGroup>
                <CFormInput
                  type="number"
                  placeholder="Valor da ação"
                  value={tradeValue}
                  onChange={(e) => setTradeValue(e.target.value)}
                />
                <CButton color="success" onClick={() => handleTrade('buy')}>
                  Comprar
                </CButton>
                <CButton color="danger" onClick={() => handleTrade('sell')}>
                  Vender
                </CButton>
              </CInputGroup>
            </div>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Área de Informações Detalhadas */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Informações sobre {selectedCrypto.name}</strong>
          </CCardHeader>
          <CCardBody>
            <CTable striped hover responsive>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">Preço</CTableHeaderCell>
                  <CTableDataCell>{selectedCrypto.price}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">Variação (24h)</CTableHeaderCell>
                  <CTableDataCell>
                    <span
                      style={{
                        color: selectedCrypto.change.includes('+') ? 'green' : 'red',
                      }}
                    >
                      {selectedCrypto.change}
                    </span>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">Volume (24h)</CTableHeaderCell>
                  <CTableDataCell>{selectedCrypto.volume}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">Capitalização de Mercado</CTableHeaderCell>
                  <CTableDataCell>{selectedCrypto.marketCap}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">Lucro do Usuário</CTableHeaderCell>
                  <CTableDataCell>
                    <span style={{ color: userProfit >= 0 ? 'green' : 'red' }}>
                      ${userProfit.toFixed(2)}
                    </span>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Gráfico Comparativo das Criptomoedas Recomendadas */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Desempenho das Criptomoedas Recomendadas</strong>
          </CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: recommendations.map((crypto) => crypto.name),
                datasets: [
                  {
                    label: 'Rendimento (%)',
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    data: recommendations.map((crypto) => {
                      const initial = crypto.performance[0];
                      const final = crypto.performance[crypto.performance.length - 1];
                      return ((final - initial) / initial) * 100;
                    }),
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

      {/* Área de Recomendações de Investimento */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Recomendações de Investimento</strong>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              {recommendations.map((recommendation, index) => (
                <CListGroupItem key={index}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{recommendation.name}</span>
                    <CDropdown>
                      <CDropdownToggle color="primary" size="sm">
                        <CIcon icon={cilInfo} />
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem>{recommendation.reason}</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </div>
                </CListGroupItem>
              ))}
            </CListGroup>
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

export default CriptoInvestimento;