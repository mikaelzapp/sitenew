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
  CProgress,
  CFormSelect,
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
  AreaChart,
  Area,
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
  const [modalContent, setModalContent] = useState({ title: '', description: '' });
  const [selectedChartType, setSelectedChartType] = useState('line');

  // Função para abrir o modal com detalhes
  const openModal = (title, description) => {
    setModalContent({ title, description });
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
              onDetailsClick={() =>
                openModal(
                  'Crescimento de Visitas',
                  'O número de visitas ao site aumentou 25% no último mês, impulsionado por campanhas de marketing e melhorias na experiência do usuário.'
                )
              }
            />
          </CCol>
          <CCol md={6} className="mb-4">
            <MetricCard
              icon={cilArrowCircleBottom}
              title="Crescimento de Cadastros"
              value="+40%"
              description="O número de usuários cadastrados aumentou 40% no último mês."
              color="primary"
              onDetailsClick={() =>
                openModal(
                  'Crescimento de Cadastros',
                  'O número de usuários cadastrados aumentou 40% no último mês, graças a novas funcionalidades e promoções exclusivas.'
                )
              }
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

      {/* Modal de Detalhes */}
      <CModal visible={visibleModal} onClose={() => setVisibleModal(false)}>
        <CModalHeader>
          <CModalTitle>
            <CIcon icon={cilInfo} className="me-2" />
            {modalContent.title}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>{modalContent.description}</p>
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