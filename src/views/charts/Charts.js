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
      {/* Título e Descrição */}
      <CCol xs={12} className="mb-4">
        <CCard className="shadow-sm">
          <CCardBody>
            <h3 className="fw-bold mb-3">Crescimento da Plataforma</h3>
            <p className="text-body-secondary">
              Acompanhe o crescimento do site e o número de usuários cadastrados ao longo do tempo.
            </p>
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

      {/* Gráfico de Doughnut */}
      <CCol xs={12} md={6} className="mb-4">
        <CCard className="shadow-sm">
          <CCardHeader>
            <h5 className="fw-bold mb-0">Distribuição de Métricas</h5>
          </CCardHeader>
          <CCardBody>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={doughnutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {doughnutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Resumo Mensal */}
      <CCol xs={12} md={6} className="mb-4">
        <CCard className="shadow-sm">
          <CCardHeader>
            <h5 className="fw-bold mb-0">Resumo Mensal</h5>
          </CCardHeader>
          <CCardBody>
            <GrowthChart data={growthData} height={300} />
          </CCardBody>
        </CCard>
      </CCol>

      {/* Gráficos de Evolução por Tópico */}
      <CCol xs={12} className="mb-4">
        <CCard className="shadow-sm">
          <CCardHeader>
            <h5 className="fw-bold mb-0">Evolução por Tópico</h5>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md={4}>
                <h6>Criptomoedas</h6>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={topicData.criptomoedas} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="valor" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CCol>
              <CCol md={4}>
                <h6>Bolsa de Valores</h6>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={topicData.bolsa} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="valor" stroke="#82ca9d" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CCol>
              <CCol md={4}>
                <h6>Fundos Imobiliários</h6>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={topicData.fundosImobiliarios} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="valor" stroke="#ffc658" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Modal de Detalhes */}
      <CModal size="lg" visible={visibleModal} onClose={() => setVisibleModal(false)}>
        <CModalHeader>
          <CModalTitle>
            <CIcon icon={cilInfo} className="me-2" />
            Detalhes Completos
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {/* Abas para alternar entre Progresso e Investimentos */}
          <CTabs activeTab={activeTab} onActiveTabChange={setActiveTab}>
            <CNav variant="tabs">
              <CNavItem>
                <CNavLink data-tab="progresso">Progresso da Página</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink data-tab="investimentos">Novos Investimentos</CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent>
              {/* Aba de Progresso */}
              <CTabPane data-tab="progresso">
                <h5 className="fw-bold mb-3">Progresso da Página</h5>
                <p>
                  Acompanhe o crescimento do site em termos de visitas e cadastros ao longo do tempo.
                </p>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={modalData.progresso} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="visitas" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="cadastros" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4">
                  <h6>Detalhes do Progresso</h6>
                  <ul>
                    <li>Visitas: Aumento de 25% no último mês.</li>
                    <li>Cadastros: Aumento de 40% no último mês.</li>
                    <li>Engajamento: Taxa de retenção de 85%.</li>
                  </ul>
                </div>
              </CTabPane>

              {/* Aba de Investimentos */}
              <CTabPane data-tab="investimentos">
                <h5 className="fw-bold mb-3">Novos Investimentos</h5>
                <p>
                  Distribuição dos investimentos em bolsa, imobiliário e criptomoedas.
                </p>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={modalData.investimentos} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="valor" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4">
                  <h6>Detalhes dos Investimentos</h6>
                  <ul>
                    <li>Bolsa: R$ 50.000 em ações de tecnologia.</li>
                    <li>Imobiliário: R$ 30.000 em fundos imobiliários.</li>
                    <li>Criptomoedas: R$ 20.000 em Bitcoin e Ethereum.</li>
                  </ul>
                </div>
              </CTabPane>
            </CTabContent>
          </CTabs>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisibleModal(false)}>
            Fechar
          </CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  );
};

export default GrowthCharts;