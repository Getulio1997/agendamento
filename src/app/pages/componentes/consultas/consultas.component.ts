import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-consultas',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.scss'
})
export class ConsultasComponent {


  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [
          { icon: 'pi pi-home', routerLink: '/' },
          { label: 'Lista de Agendamentos', routerLink: '/componentes/consultas' },
          { label: 'Consultas', routerLink: '/componentes/consultas' },
      ];
  }

}
