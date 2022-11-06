import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //TODO se imporata routerModule
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [{ //TODO creando la const de rutas como array-obj
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
