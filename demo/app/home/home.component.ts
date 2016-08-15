import { Component} from '@angular/core';

@Component({
  selector: 'sb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  schema: any = require('./schema.mockup.json');
}
