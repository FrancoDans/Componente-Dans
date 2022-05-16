import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LayoutComponent } from "./layout/layout.component"
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppComponent } from './app.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ToolbarComponent,
    ContenidoComponent,
    ListaAlumnosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
