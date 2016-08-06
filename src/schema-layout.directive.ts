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
      template: this.computeTemplateString(newSchema)
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

  computeTemplateString(schema: any): string {
    let newTemplate = '';
    console.log(schema);

    for (let i = 0; i < schema.length; i++) {
      let element = schema[i];
      let attributesKeys = Object.keys(element.attributes);
      let attributes = attributesKeys.map(key => `${key}="${element.attributes[key]}"`).join(' ');
      let localTemplate = `
        <${element.tag} ${attributes}>
        </${element.tag}>
      `;
      newTemplate += localTemplate;
    }
    return newTemplate;
  }

};
