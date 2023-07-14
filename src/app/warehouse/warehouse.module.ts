import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseComponent } from './presentation/warehouse.component';
import { FormsModule } from '@angular/forms';
import { UpsertGoodComponent } from './presentation/upsert-good/upsert-good.component';
import { AssignmentOrRecieptComponent } from './presentation/assignmentOrReciept/assignmentOrReciept.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [WarehouseComponent,UpsertGoodComponent]
})
export class WarehouseModule { }
