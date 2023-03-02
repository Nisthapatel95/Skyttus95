import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'propertytype', pathMatch:'full'},
  { path: 'propertytype', loadChildren: () => import('./propertytype/propertytype.module').then(m => m.PropertytypeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
