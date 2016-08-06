import {
  Directive,
  Component,
  Input,
  ViewContainerRef,
  ComponentResolver,
  ComponentMetadata,
  ComponentFactory,
  ReflectiveInjector
} from '@angular/core';

@Directive({
  selector: '[sbSchemaLayout]',
})
export class SchemaLayoutDirective {
  metadata: any = {
    selector: 'sb-dynamic-grid',
    template: '<div>Loading...</div>'
  };

  constructor(private viewContainer: ViewContainerRef, private resolver: ComponentResolver) {
  }

  @Input()
  set sbSchemaLayout(newSchema: any) {
    if (!newSchema) {
      return;
    }
    const metadata = new ComponentMetadata(Object.assign({}, this.metadata, {
      template: `
        <div>
          Hell yeah !
        </div>
      `
    }));
    this.createComponentFactory(this.resolver, metadata)
      .then(factory => {
        const injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainer.parentInjector);
        this.viewContainer.createComponent(factory, 0, injector, []);
      })
      .catch(err => console.error(err));
  }

  createComponentFactory(resolver: ComponentResolver, metadata: ComponentMetadata): Promise<ComponentFactory<any>> {
    const componentClass = class DynamicComponent {};
    const decoratedClass = Component(metadata)(componentClass);
    return resolver.resolveComponent(decoratedClass);
  };

};
