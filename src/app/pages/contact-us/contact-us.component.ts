import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  public pageTitle: string = 'CONTACT US';

  public scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    })
  }
}
