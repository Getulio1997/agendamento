import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './medicos.component.html',
  styleUrl: './medicos.component.scss'
})
export class MedicosComponent {

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [
          { icon: 'pi pi-home', routerLink: '/' },
          { label: 'Lista de Agendamentos', routerLink: '/componentes/medicos' },
          { label: 'Médicos', routerLink: '/componentes/medicos' },
      ];
  }

}
