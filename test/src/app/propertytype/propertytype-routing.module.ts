import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertytypeFormContainerComponent } from './propertytype-form-container/propertytype-form-container.component';
import{PropertytypeListContainerComponent} from './propertytype-list-container/propertytype-list-container.component';
import { PropertytypeComponent } from './propertytype.component';

const routes: Routes = [{ path: '', component: PropertytypeComponent,
children:[

  {
    path:'',redirectTo:'app-propertytype-list-container',pathMatch:'full'
  },
  {
    path:'app-propertytype-form-container',
    component:PropertytypeFormContainerComponent
  },
  {
    path:'app-propertytype-list-container',
    component:PropertytypeListContainerComponent
  }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertytypeRoutingModule { }
