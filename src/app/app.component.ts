
import { Component } from '@angular/core';
import { SidenavComponent } from './sidenav'
import { BoxComponent } from './box'
import { FooterComponent } from './footer'

@Component({
  moduleId: module.id,
  selector: 'header-component',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
    directives: [ SidenavComponent, BoxComponent, FooterComponent ]
})
export class AppComponent {
  title = 'Onfolio';
    clicked(event) { document.getElementById('mySideNav').style.width = '35%';
    }
}
