import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Informacao = React.lazy(() => import('./views/base/accordion/informacao'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Em_auta = React.lazy(() => import('./views/base/breadcrumbs/em_auta'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const CriptoInvestimento = React.lazy(() => import('./views/base/cards/criptoInvestimento'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Modeloscripto = React.lazy(() => import('./views/base/carousels/modeloscripto'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const CriptoInformacoes = React.lazy(() => import('./views/base/collapses/CriptoInformacoes'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Informacaocr = React.lazy(() => import('./views/base/list-groups/informacao'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const BolsaEmAlta = React.lazy(() => import('./views/forms/checks-radios/bolsaEmAlta'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const Informacaobl = React.lazy(() => import('./views/forms/floating-labels/informacaobl'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const BolsaInvestimento = React.lazy(() => import('./views/forms/form-control/BolsaInvestimento'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const ajuda = React.lazy(() => import('./views/forms/input-group/ajuda'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const ultimasNoticias = React.lazy(() => import('./views/forms/range/ultimasNoticias'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const modelosbl = React.lazy(() => import('./views/forms/select/modelos'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
const Modelos = React.lazy(() => import('./views/widgets/modelos'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/informacao', name: 'Informação', element: Informacao },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/em_auta', name: 'Em auta', element: Em_auta },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/criptoInvestimento', name: 'Cripto Investimento', element: CriptoInvestimento },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/carousels/modeloscripto', name: 'Modelos Cripto', element: Modeloscripto },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/collapses/CriptoInformacoes', name: 'Cripto Informacoes', element: CriptoInformacoes },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/list-groups/informacao', name: 'Informação', element: Informacaocr },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tabs', name: 'Tabs', element: Tabs },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/form-control/BolsaInvestimento', name: 'Investir Na Bolsa', element: BolsaInvestimento },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/select/modelos', name: 'Modedelos De Investimento', element: modelosbl },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/checks-radios/bolsaEmAlta', name: 'Em auta', element: BolsaEmAlta },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/range/ultimasNoticias', name: 'Ultimas Noticias', element: ultimasNoticias },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/input-group/ajuda', name: 'ajuda', element: ajuda },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/floating-labels/informacaobl', name: 'Informações', element: Informacaobl },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '/widgets/modelos', name: 'Modelos', element: Modelos },

]

export default routes
