
// info   |Cor	    |Uso Comum
// primary   |Azul	  |Ações principais
// secondary |Cinza	  |Ações secundárias
// success	 |Verde	  |Sucesso ou confirmação
// danger	   |Vermelho|Erro, perigo ou ação crítica
// warning	 |Amarelo |Aviso ou atenção
// info	Azul |claro	  |Informação ou detalhes adicionais
// light	   |Branco	|Fundos claros ou temas claros
// dark	Preto|Fundos  |escuros ou temas escuros
// link	Azul |link	  |Ações que se parecem com links




import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cibLetsEncrypt,
  cilBell,
  cilBuilding,
  cilChartPie,
  cilDescription,
  cilGraph,
  cilHome,
  cilStar,
  cilViewModule,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    badge: {
      color: 'primary', // Vermelho
      text: 'HOME', 
    },
  },

  

  {
    component: CNavTitle,
    name: 'Investimentos',
  },
  {
    component: CNavGroup,
    name: 'Criptos',
    to: '/base',
    icon: <CIcon icon={cibLetsEncrypt} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Em auta',
        to: '/base/em_auta',
      },
      // {
      //   component: CNavItem,
      //   name: (
      //     <React.Fragment>
      //       {'Calendar'}
      //       <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
      //     </React.Fragment>
      //   ),
      //   href: '',
      //   badge: {
      //     color: 'danger',
      //     text: 'PRO',
      //   },
      // },
      {
        component: CNavItem,
        name: 'Cripto Investimento',
        to: '/base/CriptoInvestimento',
      },
      {
        component: CNavItem,
        name: 'Modelos De criptos',
        to: '/base/carousels/modeloscripto',
      },
      {
        component: CNavItem,
        name: 'Ultimas Noticias',
        to: '/base/collapses/CriptoInformacoes',
      },
      {
        component: CNavItem,
        name: 'Ajuda',
        to: '/base/list-groups/informacao',
      },
      {
        component: CNavItem,
        name: 'Informações',
        to: '/base/informacao',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Imobiliario',
    to: '/buttons',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Bolsa',
    icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Em Auta',
        to: '/forms/checks-radios/bolsaEmAlta',
      },
      {
        component: CNavItem,
        name: 'Investir Na Bolsa',
        to: '/forms/form-control/BolsaInvestimento',
      },
      {
        component: CNavItem,
        name: 'Modelos De Investimntos',
        to: '/forms/select/modelos',
      },
      {
        component: CNavItem,
        name: 'Ultimas Noticias',
        to: '/forms/range/ultimasNoticias',
      },
      {
        component: CNavItem,
        name: 'ajuda',
        to: '/forms/input-group/ajuda',
      },
      {
        component: CNavItem,
        name: 'Informações',
        to: '/forms/floating-labels/informacaobl',
      }
    ],
  },
  {
    component: CNavItem,
    name: 'Graficos',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },  
  {
    component: CNavItem,
    name: 'Modelos',
    to: '/widgets/modelos',
    icon: <CIcon icon={cilViewModule} customClassName="nav-icon" />,
    badge: {
      color: 'danger',
      text: 'HOT',
    },
  },
  {
    component: CNavGroup,
    name: 'Favoritos',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },

  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
