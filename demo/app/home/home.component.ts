import { Component } from '@angular/core';
import { SchemaLayoutDirective } from '../../../src';

@Component({
  selector: 'sb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  directives: [SchemaLayoutDirective]
})
export class HomeComponent {
  schema: any = require('./schema.mockup.json');
}
