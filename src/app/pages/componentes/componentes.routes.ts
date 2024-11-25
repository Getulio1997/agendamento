import { Routes } from '@angular/router';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MedicosComponent } from './medicos/medicos.component';
import { ConsultasComponent } from './consultas/consultas.component';

export const ComponentesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pacientes',
        component: PacientesComponent,
      },
      {
        path: 'medicos',
        component: MedicosComponent,
      },
      {
        path: 'consultas',
        component: ConsultasComponent,
      },
    ],
  },
];
