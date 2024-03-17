import { Component } from '@angular/core';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrl: './establishment.component.scss'
})
export class EstablishmentComponent {
  public pageTitle: string = 'ESTABLISHMENT';
  public aboutTabs: string[] = ['Vision', 'Mission', 'Core Values', 'Objective', 'Moto'];

  public scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    })
  }
}
