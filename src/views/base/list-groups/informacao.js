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
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSearch, cilInfo, cilChevronCircleDownAlt } from '@coreui/icons';

const ComoInvestirCripto = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Função para filtrar o conteúdo com base na pesquisa
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Conteúdo principal sobre como investir em criptomoedas
  const investmentSteps = [
    {
      title: '1. Crie uma Conta',
      description: 'Para começar a investir em criptomoedas, você precisa criar uma conta na nossa plataforma. O processo é rápido e seguro.',
    },
    {
      title: '2. Verifique sua Identidade',
      description: 'Para garantir a segurança de todos os usuários, solicitamos uma verificação de identidade. Isso ajuda a prevenir fraudes.',
    },
    {
      title: '3. Adicione Fundos à sua Conta',
      description: 'Deposite fundos na sua conta usando métodos como transferência bancária, cartão de crédito ou outras criptomoedas.',
    },
    {
      title: '4. Escolha uma Criptomoeda',
      description: 'Navegue pela lista de criptomoedas disponíveis e escolha aquela que deseja investir. Você pode ver gráficos, preços e análises.',
    },
    {
      title: '5. Faça seu Primeiro Investimento',
      description: 'Após escolher a criptomoeda, insira o valor que deseja investir e confirme a transação. Seu investimento será processado imediatamente.',
    },
    {
      title: '6. Acompanhe seu Investimento',
      description: 'Use nossa plataforma para acompanhar o desempenho do seu investimento em tempo real. Você pode comprar, vender ou manter suas criptomoedas.',
    },
  ];

  // Perguntas frequentes (FAQ)
  const faqItems = [
    {
      question: 'O que é uma criptomoeda?',
      answer: 'Criptomoedas são moedas digitais que usam criptografia para garantir transações seguras. Elas são descentralizadas e operam em uma tecnologia chamada blockchain.',
    },
    {
      question: 'Como escolher a melhor criptomoeda para investir?',
      answer: 'Recomendamos pesquisar sobre a criptomoeda, analisar seu histórico de preços, tecnologia por trás dela e o mercado em que está inserida. Diversificar também é uma boa estratégia.',
    },
    {
      question: 'É seguro investir em criptomoedas?',
      answer: 'Investir em criptomoedas envolve riscos, como qualquer outro investimento. Recomendamos começar com valores menores e estudar o mercado antes de investir grandes quantias.',
    },
    {
      question: 'Posso retirar meus investimentos a qualquer momento?',
      answer: 'Sim, você pode vender suas criptomoedas e retirar os fundos a qualquer momento. O processo de retirada é rápido e seguro.',
    },
    {
      question: 'Quanto custa para começar a investir?',
      answer: 'Você pode começar com qualquer valor, dependendo da criptomoeda escolhida. Nossa plataforma permite investimentos a partir de valores pequenos.',
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
                placeholder="Pesquise tópicos sobre investimentos em criptomoedas..."
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

      {/* Conteúdo Principal: Como Investir em Criptomoedas */}
      <CCol xs={12} className="mb-4">
        <CCard>
          <CCardHeader>
            <strong>Como Investir em Criptomoedas na Plataforma</strong>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              {investmentSteps.map((step, index) => (
                <CListGroupItem key={index}>
                  <h5>{step.title}</h5>
                  <p>{step.description}</p>
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

export default ComoInvestirCripto;