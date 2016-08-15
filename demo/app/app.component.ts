import { Component } from '@angular/core';

import '../style/app.scss';

@Component({
  selector: 'sb-schema-layout-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  boilerplate_url = 'https://github.com/preboot/angular2-webpack';
}
