import { Component } from '@angular/core';

@Component({
  selector: 'app-page-tabs',
  templateUrl: './page-tabs.component.html',
  styleUrl: './page-tabs.component.scss'
})
export class PageTabsComponent {
  public tabs: string[] = ['Home', 'About IFSB', 'Standard Development', 'Publication', 'Consultation', 'Implementation', 'Event & Activities'];

}
