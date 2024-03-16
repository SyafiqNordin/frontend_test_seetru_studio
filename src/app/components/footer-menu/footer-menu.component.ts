import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrl: './footer-menu.component.scss'
})
export class FooterMenuComponent {
  public aboutIfsbMenu: string[] = ['Establishment', 'Organisational Structure', 'Council', 'Commitee', 'Working Groups', 'Task Forces', 'Secretariat', 'IFSB Standards'];
  public resourceCenterMenu: string[] = ['PSIFIs', 'Governing Document', 'IFSB Bulletin', 'Corporate Publications', 'Research / Reports / Proceedings', 'Public Lecture Series', 'Islamic Financial Stability Forums'];
  public ifsbMembershipMenu: string[] = ['List of Members', 'Requirements & Benefits', 'Application Procedure'];
  public eventsAndActivitiesMenu: string[] = ['IFSB Annual Events', 'Awareness Programme', 'IFSB-FIS Workshop', 'Meetings'];
  public implementationMenu: string[] = ['FIS Workshop', 'Technical Assistance / Policy Advice / Self Assessment', 'E-Learning', 'Train of Trainers (ToT) Program', 'Impact and Consistency Assessment Program ( ICAP)'];
  public mediaMenu: string[] = ['Press Release', 'Speeches', 'Gallery'];
  public psifisMenu: string[] = ['About PSIFIs', 'Key Exhibits', 'Data & Metadata', 'Selected Aggregated Indicators'];
}
