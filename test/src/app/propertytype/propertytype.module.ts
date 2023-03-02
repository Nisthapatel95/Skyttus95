import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertytypeRoutingModule } from './propertytype-routing.module';
import { PropertytypeComponent } from './propertytype.component';
import { PropertytypeFormContainerComponent } from './propertytype-form-container/propertytype-form-container.component';
import { PropertytypeListContainerComponent } from './propertytype-list-container/propertytype-list-container.component';
import { PropertytypeFormPresentationComponent } from './propertytype-form-container/propertytype-form-presentation/propertytype-form-presentation.component';
import { PropertytypeListPresentationComponent } from './propertytype-list-container/propertytype-list-presentation/propertytype-list-presentation.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    PropertytypeComponent,
    PropertytypeFormContainerComponent,
    PropertytypeListContainerComponent,
    PropertytypeFormPresentationComponent,
    PropertytypeListPresentationComponent
  ],
  imports: [
    CommonModule,
    PropertytypeRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule  

  ],
  providers:[
    
  ]
})
export class PropertytypeModule { }
