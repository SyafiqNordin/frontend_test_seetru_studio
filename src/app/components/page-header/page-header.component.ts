import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {

  constructor(
    private readonly router: Router
  ) {}
  
  public navigateToContactPage(): void {
    this.router.navigateByUrl('/contact-us')
  }
}
