import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.scss',
})
export class PacientesComponent {

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { icon: 'pi pi-home', routerLink: '/' },
      { label: 'Lista de Agendamentos', routerLink: '/componentes/pacientes' },
      { label: 'Pacientes', routerLink: '/componentes/pacientes' }
    ];
  }

}
