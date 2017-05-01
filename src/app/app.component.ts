import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
  <div id="sidebar">
    Sidebar will go here
    </div>
  `
})

export class SidebarComponent{}

@Component({
  selector: 'app-root',
  template: `
     <div id="container">
     <app-sidebar></app-sidebar>
        <div id="content">
        <div>
          Article list will go here
          </div>
          </div>
     </div>
  `
})
export class AppComponent {
  title = 'Ari';
}
