import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { PostComponent } from './pages/post/post.component';

/* creo las rutas ...para crear este modulo el comando es (ng g m appRouting --flat) */

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {/* Ruta hija */
    path: 'post',
    /* cargo todo el modulo; tengo que ponerle el nombre que
    tengo que exportar -->export class PostModule { } */
    /* loadChildren: './pages/post/post.module#PostModule' */
    /* Carga de modulo mejorado --> post.module.ts*/
    loadChildren: ()=>import('./pages/post/post.module').then( m=>m.PostModule)
  },
  
  {
    path: '**',
    redirectTo: 'home'
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }