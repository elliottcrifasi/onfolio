import { Component } from '@angular/core';
import { BoxComponent } from '../box';

@Component({
  moduleId: module.id,
  selector: 'footer-component',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
    directives: [ BoxComponent ]
})
export class FooterComponent {

}
