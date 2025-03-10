import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormInput,
  CButton,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
  CListGroup,
  CListGroupItem,
  CBadge,
  CProgress,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSearch, cilInfo, cilChevronCircleDownAlt, cilChartLine, cilWallet } from '@coreui/icons';

const ComoInvestirBolsa = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Função para filtrar o conteúdo com base na pesquisa
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Conteúdo principal sobre como investir na bolsa
  const investmentSteps = [
    {
      title: '1. Abra uma Conta na Corretora',
      description: 'Escolha uma corretora de valores credenciada e abra sua conta. O processo é simples e pode ser feito online.',
      icon: cilWallet,
      progress: 20,
    },
    {
      title: '2. Transfira Fundos para sua Conta',
      description: 'Deposite dinheiro na sua conta da corretora via transferência bancária, TED ou PIX. Seus fundos estarão disponíveis em poucos minutos.',
      icon: cilWallet,
      progress: 40,
    },
    {
      title: '3. Escolha seu Perfil de Investidor',
      description: 'Defina seu perfil de investidor (conservador, moderado ou arrojado) para receber recomendações de investimentos adequadas ao seu risco.',
      icon: cilInfo,
      progress: 60,
    },
    {
      title: '4. Pesquise e Escolha seus Investimentos',
      description: 'Explore ações, fundos imobiliários, títulos públicos e outros ativos. Utilize ferramentas de análise e gráficos para tomar decisões informadas.',
      icon: cilChartLine,
      progress: 80,
    },
    {
      title: '5. Faça seu Primeiro Investimento',
      description: 'Após escolher o ativo, insira o valor que deseja investir e confirme a operação. Sua ordem será executada em tempo real.',
      icon: cilChartLine,
      progress: 100,
    },
    {
      title: '6. Acompanhe e Gerencie sua Carteira',
      description: 'Monitore o desempenho dos seus investimentos e ajuste sua estratégia conforme necessário. Diversifique para reduzir riscos.',
      icon: cilChartLine,
      progress: 100,
    },
  ];

  // Perguntas frequentes (FAQ)
  const faqItems = [
    {
      question: 'O que é a Bolsa de Valores?',
      answer: 'A Bolsa de Valores é um mercado onde são negociados ativos como ações, títulos e fundos. Ela conecta investidores e empresas que buscam capital.',
    },
    {
      question: 'Como escolher uma boa ação para investir?',
      answer: 'Analise o histórico da empresa, seu setor de atuação, indicadores financeiros (como P/L e dividend yield) e tendências de mercado.',
    },
    {
      question: 'Quanto custa para começar a investir na bolsa?',
      answer: 'Você pode começar com valores pequenos, dependendo da corretora e dos ativos escolhidos. Algumas corretoras permitem investimentos a partir de R$ 50,00.',
    },
    {
      question: 'Quais são os riscos de investir na bolsa?',
      answer: 'Investir na bolsa envolve riscos, como volatilidade e perda de capital. É importante diversificar e estudar o mercado antes de investir.',
    },
    {
      question: 'Posso investir em fundos imobiliários na bolsa?',
      answer: 'Sim, os fundos imobiliários (FIIs) são negociados na bolsa e permitem investir em imóveis de forma indireta, com rendimentos mensais.',
    },
  ];

  return (
    <CRow>
      {/* Barra de Pesquisa */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Pesquisar Informações</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="d-flex">
              <CFormInput
                type="text"
                placeholder="Pesquise tópicos sobre investimentos na bolsa..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <CButton color="primary" className="ms-2">
                <CIcon icon={cilSearch} />
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Conteúdo Principal: Como Investir na Bolsa */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Como Investir na Bolsa de Valores</strong>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              {investmentSteps.map((step, index) => (
                <CListGroupItem key={index} className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <CIcon icon={step.icon} className="me-2" />
                    <h5 className="mb-0">{step.title}</h5>
                  </div>
                  <p className="text-muted">{step.description}</p>
                  <CProgress value={step.progress} className="mt-2" color="success" />
                </CListGroupItem>
              ))}
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Perguntas Frequentes (FAQ) */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Perguntas Frequentes (FAQ)</strong>
          </CCardHeader>
          <CCardBody>
            <CAccordion activeItemKey={1}>
              {faqItems.map((faq, index) => (
                <CAccordionItem itemKey={index + 1} key={index}>
                  <CAccordionHeader>
                    <CIcon icon={cilChevronCircleDownAlt} className="me-2" />
                    {faq.question}
                  </CAccordionHeader>
                  <CAccordionBody>{faq.answer}</CAccordionBody>
                </CAccordionItem>
              ))}
            </CAccordion>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ComoInvestirBolsa;