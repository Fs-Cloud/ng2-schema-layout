import {
  inject,
  TestComponentBuilder,
  ComponentFixture,
  async
} from '@angular/core/testing';

import { By } from '@angular/platform-browser/src/dom/debug/by';

import {
  Component
} from '@angular/core';

// Load the implementations that should be tested
import { SchemaLayoutDirective } from './schema-layout.directive';

describe('Schema Layout Directive', () => {

  it('Should create sbSchemaLayout attribute on component tag', async(inject([
    TestComponentBuilder
  ], (testComponentBuilder) => {
    return testComponentBuilder
      .overrideTemplate(TestComponent, '<div><div sbSchemaLayout></div></div>')
      .createAsync(TestComponent)
      .then((fixture: ComponentFixture<TestComponent>) => {
        fixture.detectChanges();
        const directiveElements = fixture.debugElement.queryAll(By.css('[sbSchemaLayout]'));
        expect(directiveElements.length).toBe(1);
      })
      .catch(err => {
        console.error(err);
        expect(true).toBe(false);
      });
  })));

});

@Component({selector: 'sb-test-cmp', directives: [SchemaLayoutDirective], template: ''})
class TestComponent {
}