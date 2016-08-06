import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-schema-layout',
  template: require('./schema-layout.component.html')
})
export class SchemaLayoutComponent implements OnInit {
  ngOnInit(): void {
    console.log('Schema layout init !');
  }
};
