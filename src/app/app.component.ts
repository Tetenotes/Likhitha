import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-about></app-about>
      <app-projects></app-projects>
      <app-certifications></app-certifications>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
