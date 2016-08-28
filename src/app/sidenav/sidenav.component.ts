import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sidenav-component',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css']
})
export class SidenavComponent{
    clicked(event) {
        document.getElementById('mySideNav').style.width = '0';
    }
}
