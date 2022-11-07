import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //TODO se imporata routerModule
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [//TODO creando la const de rutas como array-obj
  {
    path: 'auth', //todo al entrar al auth, cargan los hijos con loadchildren
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) //TODO entonces retorna el modulo AuthModule
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) //TODO entonces retorna el modulo HeroesModule
  },
  {
    path: '404',
    component: ErrorPageComponent //TODO se agrega de forma automatica por el errorpage
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes) //TODOimportando reouter module
  ],
  exports: [ //TODO exportando Router Module
    RouterModule
  ]
})
export class AppRoutingModule { }
