import { NgModule } from '@angular/core';

// Modules import
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

// Components import
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { SimpleComponent } from './components';

// Directives import
import { SchemaLayoutDirective } from '../../src';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SchemaLayoutDirective,
    SimpleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
