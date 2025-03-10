import React from 'react';
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
  CProgress,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CFormInput,
  CForm,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilChevronCircleDownAlt, cilChevronCircleUpAlt, cilChartLine, cilSearch, cilUser, cilWallet } from '@coreui/icons';
import InvestmentImg1 from 'src/assets/images/angular.jpg'
import InvestmentImg2 from 'src/assets/images/angular.jpg'
import InvestmentImg3 from 'src/assets/images/angular.jpg'

const Informacao = () => {
  const progressExample = [
    { title: 'Visitas', value: '29.703 Usuários', percent: 40, color: 'success' },
    { title: 'Únicos', value: '24.093 Usuários', percent: 20, color: 'info' },
    { title: 'Visualizações', value: '78.706 Visualizações', percent: 60, color: 'warning' },
    { title: 'Novos Usuários', value: '22.123 Usuários', percent: 80, color: 'danger' },
    { title: 'Taxa de Rejeição', value: 'Taxa Média', percent: 40.15, color: 'primary' },
  ];

  return (
    <CRow>
      {/* Seção de Busca e Destaques */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardBody>
            <CRow className="align-items-center">
              <CCol md={6}>
                <h3>Encontre o Melhor Investimento para Você</h3>
                <p className="text-body-secondary">
                  Explore nossas opções de investimento e comece a construir seu futuro financeiro.
                </p>
                <CForm className="d-flex">
                  <CFormInput type="text" placeholder="Pesquisar investimentos..." />
                  <CButton color="primary" className="ms-2">
                    <CIcon icon={cilSearch} />
                  </CButton>
                </CForm>
              </CCol>
              <CCol md={6}>
                <CCarousel controls indicators>
                  <CCarouselItem>
                    <img className="d-block w-100" src={InvestmentImg1} alt="Investimento 1" />
                    <CCarouselCaption className="d-none d-md-block">
                      <h5>Invista no Futuro</h5>
                      <p>Comece a investir hoje e garanta sua estabilidade financeira.</p>
                    </CCarouselCaption>
                  </CCarouselItem>
                  <CCarouselItem>
                    <img className="d-block w-100" src={InvestmentImg2} alt="Investimento 2" />
                    <CCarouselCaption className="d-none d-md-block">
                      <h5>Diversificação</h5>
                      <p>Diversifique seus investimentos para reduzir riscos.</p>
                    </CCarouselCaption>
                  </CCarouselItem>
                  <CCarouselItem>
                    <img className="d-block w-100" src={InvestmentImg3} alt="Investimento 3" />
                    <CCarouselCaption className="d-none d-md-block">
                      <h5>Educação Financeira</h5>
                      <p>Aprenda sobre finanças para tomar decisões mais informadas.</p>
                    </CCarouselCaption>
                  </CCarouselItem>
                </CCarousel>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Seção de Cards Informativos */}
      <CCol xs={12} className="mb-4">
        <CRow>
          <CCol md={4}>
            <CCard className="h-100">
              <CCardBody>
                <CIcon icon={cilChartLine} size="xl" className="mb-3" />
                <CCardTitle>Gráficos de Desempenho</CCardTitle>
                <CCardText>
                  Acompanhe o desempenho dos seus investimentos com gráficos interativos e detalhados.
                </CCardText>
                <CButton color="primary" href="#">
                  Ver Gráficos
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md={4}>
            <CCard className="h-100">
              <CCardBody>
                <CIcon icon={cilUser} size="xl" className="mb-3" />
                <CCardTitle>Perfil Personalizado</CCardTitle>
                <CCardText>
                  Crie um perfil personalizado para receber recomendações de investimento sob medida.
                </CCardText>
                <CButton color="primary" href="#">
                  Criar Perfil
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md={4}>
            <CCard className="h-100">
              <CCardBody>
                <CIcon icon={cilWallet} size="xl" className="mb-3" />
                <CCardTitle>Carteira de Investimentos</CCardTitle>
                <CCardText>
                  Gerencie sua carteira de investimentos de forma simples e eficiente.
                </CCardText>
                <CButton color="primary" href="#">
                  Acessar Carteira
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCol>

      {/* Seção de Accordion Interativo */}
      <CCol class="card-header" xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Perguntas Frequentes</strong>
          </CCardHeader>
          <CCardBody>
            <CAccordion activeItemKey={1}>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader>
                  <CIcon icon={cilChevronCircleDownAlt} className="me-2" />
                  O que é Investimento?
                </CAccordionHeader>
                <CAccordionBody>
                  <strong>Investimento</strong> é a aplicação de recursos com o objetivo de obter retorno financeiro ao longo do tempo. Pode ser feito em ações, títulos, imóveis, entre outros.
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={2}>
                <CAccordionHeader>
                  <CIcon icon={cilChevronCircleDownAlt} className="me-2" />
                  Como Começar a Investir?
                </CAccordionHeader>
                <CAccordionBody>
                  Para começar a investir, é importante definir seus objetivos, estudar o mercado e escolher uma plataforma confiável.
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={3}>
                <CAccordionHeader>
                  <CIcon icon={cilChevronCircleDownAlt} className="me-2" />
                  Dicas para Iniciantes
                </CAccordionHeader>
                <CAccordionBody>
                  Comece com investimentos de baixo risco, diversifique sua carteira e acompanhe o mercado regularmente.
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Seção de Métricas e Progresso */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Métricas de Desempenho</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              {progressExample.map((item, index) => (
                <CCol md={4} key={index} className="mb-3">
                  <CCard>
                    <CCardBody>
                      <div className="text-body-secondary">{item.title}</div>
                      <div className="fw-semibold">{item.value}</div>
                      <CProgress thin className="mt-2" color={item.color} value={item.percent} />
                    </CCardBody>
                  </CCard>
                </CCol>
              ))}
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Informacao;