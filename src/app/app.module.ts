import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/* import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component'; */
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { PagesModule } from './pages/pages.module';
/* este modulo se usa para realizar peticiones http */
import { HttpClientModule }from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    /* creo un modulo pages.moduele.ts para pasar todas las paginas/vistas */
    /*   AboutComponent,
      ContactComponent,
      HomeComponent, */
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
