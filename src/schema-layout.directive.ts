import {
  Directive,
  Component,
  Input,
  ViewContainerRef,
  ComponentMetadata,
  ComponentFactory,
  ReflectiveInjector,
  Compiler
} from '@angular/core';

@Directive({
  selector: '[sbSchemaLayout]',
})
export class SchemaLayoutDirective {
  metadata: any = {
    selector: 'sb-dynamic-grid',
    template: '<div>Loading...</div>'
  };

  constructor(private viewContainer: ViewContainerRef, private compiler: Compiler) {
  }

  @Input()
  set sbSchemaLayout(newSchema: any) {
    if (!newSchema) {
      return;
    }
    const metadata = new ComponentMetadata(Object.assign({}, this.metadata, {
      template: this.getTemplateFromSchema(newSchema)
    }));
    const decoratedClass = this.createComponentClass(metadata);
    this.compiler.compileComponentAsync(decoratedClass)
      .then(factory => this.addComponentToView(factory))
      .catch(err => console.error(err));
  }

  addComponentToView(factory: ComponentFactory<any>) {
    const injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainer.parentInjector);
    this.viewContainer.createComponent(factory, 0, injector, []);
  }

  createComponentClass(metadata: ComponentMetadata) {
    const componentClass = class DynamicComponent {};
    return Component(metadata)(componentClass);
  }

  getTemplateFromSchema(schema: any): string {
    let newTemplate = '';
    console.log(schema);
    if (!schema || !schema.length) {
      console.error('getTemplateFromSchema expects an array of elements');
      return '';
    }

    for (let i = 0; i < schema.length; i++) {
      let element = schema[i];
      let attributesKeys = Object.keys(element.attributes);
      let attributes = attributesKeys.map(key => `${key}="${element.attributes[key]}"`).join(' ');
      let content = element.content;
      let children = element.children;
      let templateContent = '';

      if (children && children.length) {
        templateContent = this.getTemplateFromSchema(element.children);
      } else if (content) {
        templateContent = content;
      }

      let localTemplate = `<${element.tag} ${attributes}>${templateContent}</${element.tag}>`;
      newTemplate += localTemplate;
    }
    return newTemplate;
  }

};
