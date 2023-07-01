import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentOrRecieptComponent } from './assignmentOrReciept.component';
import { FormsModule } from '@angular/forms';
import { RequestForWarehouseComponent } from './requestForWarehouse/requestForWarehouse.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AssignmentOrRecieptComponent,RequestForWarehouseComponent]
})
export class AssignmentOrRecieptModule { }
