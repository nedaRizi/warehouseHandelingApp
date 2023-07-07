import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentOrRecieptComponent } from './assignmentOrReciept.component';
import { FormsModule } from '@angular/forms';
import { RequestForWarehouseComponent } from './requestForWarehouse/requestForWarehouse.component';
import { AssignmentRequestComponent } from './assignmentRequest/assignmentRequest.component';
import { ReceiptRequestComponent } from './receiptRequest/receiptRequest.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AssignmentOrRecieptComponent,RequestForWarehouseComponent,AssignmentRequestComponent,ReceiptRequestComponent]
})
export class AssignmentOrRecieptModule { }
