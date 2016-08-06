import { Component, Input } from '@angular/core';
import { SchemaLayoutDirective } from '../../../src';

@Component({
  selector: 'sb-my-component',
  template: '<div>{{myValue}}</div>'
})
export class MyComponent {
  @Input() myValue: any;
}

@Component({
  selector: 'sb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  directives: [SchemaLayoutDirective]
})
export class HomeComponent {
  schema: any = require('./schema.mockup.json');
  directives: any[] = [MyComponent];
}
