import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-tabs',
  templateUrl: './page-tabs.component.html',
  styleUrl: './page-tabs.component.scss'
})
export class PageTabsComponent {
  public tabs: string[] = ['Home', 'About IFSB', 'Standard Development', 'Publication', 'Consultation', 'Implementation', 'Event & Activities'];

  constructor(
    private readonly router: Router
  ) {}

  public navigateToEstablishment(): void {
    this.router.navigateByUrl('/establishment');
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  }
}
