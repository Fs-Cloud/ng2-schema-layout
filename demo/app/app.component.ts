import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import '../style/app.scss';

@Component({
  selector: 'sb-schema-layout-app',
  directives: [...ROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  boilerplate_url = 'https://github.com/preboot/angular2-webpack';
}
