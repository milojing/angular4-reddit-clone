import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <div id="container">
      <div id="sidebar">
        Sidebar will go here
        </div>
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
