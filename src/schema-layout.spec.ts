import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { SchemaLayoutComponent } from './schema-layout.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([SchemaLayoutComponent]);
  });

  it('should log ngOnInit', inject([SchemaLayoutComponent], (schemaLayout) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    schemaLayout.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
