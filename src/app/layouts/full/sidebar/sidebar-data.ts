import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    bgcolor: 'primary',
    route: '/dashboard',
  },
  {
    navCap: 'Lista de Agendamentos',
  },
  {
    displayName: 'Pacientes',
    iconName: 'list',
    bgcolor: 'success',
    route: '/componentes/pacientes',
  },
  {
    displayName: 'Médicos',
    iconName: 'list',
    bgcolor: 'primary',
    route: '/componentes/medicos',
  },
  {
    displayName: 'Consultas',
    iconName: 'list',
    bgcolor: 'warning',
    route: '/componentes/consultas',
  },
];
