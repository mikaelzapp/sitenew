import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormSelect,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from '@coreui/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import CIcon from '@coreui/icons-react';
import { cilArrowCircleBottom, cilArrowCircleTop, cilChartLine, cilInfo, cilFilter } from '@coreui/icons';

// Dados de exemplo para crescimento do site e usuários cadastrados
const growthData = [
  { name: 'Jan', visitas: 4000, cadastros: 2400 },
  { name: 'Fev', visitas: 3000, cadastros: 1398 },
  { name: 'Mar', visitas: 2000, cadastros: 9800 },
  { name: 'Abr', visitas: 2780, cadastros: 3908 },
  { name: 'Mai', visitas: 1890, cadastros: 4800 },
  { name: 'Jun', visitas: 2390, cadastros: 3800 },
  { name: 'Jul', visitas: 3490, cadastros: 4300 },
];

// Dados para o gráfico de barras
const barData = [
  { name: 'Visitas', value: 3490 },
  { name: 'Cadastros', value: 4300 },
];

// Dados para o gráfico de doughnut
const doughnutData = [
  { name: 'Visitas', value: 3490 },
  { name: 'Cadastros', value: 4300 },
];
const COLORS = ['#8884d8', '#82ca9d'];

// Dados de exemplo para o modal
const modalData = {
  progresso: [
    { name: 'Jan', visitas: 4000, cadastros: 2400 },
    { name: 'Fev', visitas: 3000, cadastros: 1398 },
    { name: 'Mar', visitas: 2000, cadastros: 9800 },
    { name: 'Abr', visitas: 2780, cadastros: 3908 },
    { name: 'Mai', visitas: 1890, cadastros: 4800 },
    { name: 'Jun', visitas: 2390, cadastros: 3800 },
    { name: 'Jul', visitas: 3490, cadastros: 4300 },
  ],
  investimentos: [
    { name: 'Bolsa', valor: 50000 },
    { name: 'Imobiliário', valor: 30000 },
    { name: 'Criptomoedas', valor: 20000 },
  ],
};

// Novos dados para evolução por tópico
const topicData = {
  criptomoedas: [
    { name: 'Jan', valor: 10000 },
    { name: 'Fev', valor: 15000 },
    { name: 'Mar', valor: 20000 },
    { name: 'Abr', valor: 25000 },
    { name: 'Mai', valor: 30000 },
    { name: 'Jun', valor: 35000 },
    { name: 'Jul', valor: 40000 },
  ],
  bolsa: [
    { name: 'Jan', valor: 50000 },
    { name: 'Fev', valor: 55000 },
    { name: 'Mar', valor: 60000 },
    { name: 'Abr', valor: 65000 },
    { name: 'Mai', valor: 70000 },
    { name: 'Jun', valor: 75000 },
    { name: 'Jul', valor: 80000 },
  ],
  fundosImobiliarios: [
    { name: 'Jan', valor: 20000 },
    { name: 'Fev', valor: 25000 },
    { name: 'Mar', valor: 30000 },
    { name: 'Abr', valor: 35000 },
    { name: 'Mai', valor: 40000 },
    { name: 'Jun', valor: 45000 },
    { name: 'Jul', valor: 50000 },
  ],
};

// Componente reutilizável para gráficos de crescimento
const GrowthChart = ({ data, width = '100%', height = 400, type = 'line' }) => {
  switch (type) {
    case 'area':
      return (
        <ResponsiveContainer width={width} height={height}>
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="visitas" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="cadastros" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      );
    case 'bar':
      return (
        <ResponsiveContainer width={width} height={height}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      );
    default:
      return (
        <ResponsiveContainer width={width} height={height}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="visitas" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="cadastros" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      );
  }
};

// Componente reutilizável para cartões de métricas
const MetricCard = ({ icon, title, value, description, color, onDetailsClick }) => (
  <CCard className="h-100 shadow-sm">
    <CCardBody className="text-center">
      <CIcon icon={icon} size="xxl" className={`mb-3 text-${color}`} />
      <h5 className="fw-bold">{title}</h5>
      <p className="text-body-secondary">{description}</p>
      <CButton color={color} onClick={onDetailsClick}>
        Ver Detalhes
      </CButton>
    </CCardBody>
  </CCard>
);

const GrowthCharts = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [activeTab, setActiveTab] = useState('progresso');
  const [selectedChartType, setSelectedChartType] = useState('line');

  // Função para abrir o modal
  const openModal = () => {
    setVisibleModal(true);
  };

  return (
    <CRow>
      {/* Introdução Detalhada */}
      <CCol xs={12} className="mb-4">
        <CCard className="shadow-sm">
          <CCardBody>
            <h1 className="fw-bold mb-4">Bem-vindo à Plataforma de Investimentos</h1>
            <p className="text-body-secondary">
              Nossa plataforma foi projetada para ajudá-lo a acompanhar e gerenciar seus investimentos de forma eficiente.
              Aqui, você pode monitorar o desempenho de criptomoedas, ações da bolsa de valores e fundos imobiliários,
              tudo em um só lugar.
            </p>
            <p className="text-body-secondary">
              Com ferramentas avançadas de análise e gráficos interativos, você terá insights valiosos para tomar decisões
              informadas e maximizar seus retornos.
            </p>
            <CButton color="primary" onClick={openModal}>
              Saiba Mais
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Seção de Benefícios */}
      <CCol xs={12} className="mb-4">
        <CCard className="shadow-sm">
          <CCardBody>
            <h3 className="fw-bold mb-4">Por que Escolher Nossa Plataforma?</h3>
            <CRow>
              <CCol md={4}>
                <h5>Análise em Tempo Real</h5>
                <p>
                  Acompanhe o desempenho de seus investimentos com dados atualizados em tempo real.
                </p>
              </CCol>
              <CCol md={4}>
                <h5>Gráficos Interativos</h5>
                <p>
                  Visualize tendências e padrões com gráficos fáceis de entender e altamente customizáveis.
                </p>
              </CCol>
              <CCol md={4}>
                <h5>Segurança e Confiabilidade</h5>
                <p>
                  Suas informações estão seguras conosco. Utilizamos as melhores práticas de segurança de dados.
                </p>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Gráfico de Crescimento */}
      <CCol xs={12} className="mb-4">
        <CCard className="shadow-sm">
          <CCardHeader>
            <h5 className="fw-bold mb-0">Gráfico de Crescimento</h5>
            <CFormSelect
              value={selectedChartType}
              onChange={(e) => setSelectedChartType(e.target.value)}
              className="mt-2"
            >
              <option value="line">Linha</option>
              <option value="area">Área</option>
              <option value="bar">Barras</option>
            </CFormSelect>
          </CCardHeader>
          <CCardBody>
            <GrowthChart data={growthData} type={selectedChartType} />
          </CCardBody>
        </CCard>
      </CCol>

      {/* Métricas de Crescimento */}
      <CCol xs={12} className="mb-4">
        <CRow>
          <CCol md={6} className="mb-4">
            <MetricCard
              icon={cilArrowCircleTop}
              title="Crescimento de Visitas"
              value="+25%"
              description="O número de visitas ao site aumentou 25% no último mês."
              color="success"
              onDetailsClick={openModal}
            />
          </CCol>
          <CCol md={6} className="mb-4">
            <MetricCard
              icon={cilArrowCircleBottom}
              title="Crescimento de Cadastros"
              value="+40%"
              description="O número de usuários cadastrados aumentou 40% no último mês."
              color="primary"
              onDetailsClick={openModal}
            />
          </CCol>
        </CRow>
      </CCol>

      {/* Dicas e Insights */}
      <CCol xs={12} className="mb-4">
        <CCard className="shadow-sm">
          <CCardBody>
            <h3 className="fw-bold mb-4">Dicas e Insights para Investidores</h3>
            <ul>
              <li>
                <strong>Diversificação:</strong> Invista em diferentes classes de ativos para reduzir riscos.
              </li>
              <li>
                <strong>Longo Prazo:</strong> Mantenha um horizonte de investimento de longo prazo para maximizar retornos.
              </li>
              <li>
                <strong>Educação Financeira:</strong> Aprenda continuamente sobre o mercado para tomar decisões informadas.
              </li>
            </ul>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Rodapé Informativo */}
      <CCol xs={12} className="mb-4">
        <CCard className="shadow-sm">
          <CCardBody className="text-center">
            <h5 className="fw-bold mb-3">Entre em Contato</h5>
            <p className="text-body-secondary">
              Precisa de ajuda? Entre em contato conosco através do email: suporte@plataforma.com
            </p>
            <div className="d-flex justify-content-center gap-3">
              <CButton color="primary">Facebook</CButton>
              <CButton color="info">Twitter</CButton>
              <CButton color="danger">Instagram</CButton>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default GrowthCharts;