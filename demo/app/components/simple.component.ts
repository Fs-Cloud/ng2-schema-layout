import { Component, Input } from '@angular/core';

@Component({
  selector: 'sb-simple-component',
  template: '<div>{{myValue}}</div>'
})
export class SimpleComponent {
  @Input() myValue: any;
}
