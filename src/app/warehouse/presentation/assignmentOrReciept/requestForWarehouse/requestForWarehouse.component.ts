import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AssignmentOrRecieptModel } from 'src/app/warehouse/application/goods.Model';
import { WarehouseService } from 'src/app/warehouse/application/warehouse.service';

@Component({
  selector: 'app-requestForWarehouse',
  templateUrl: './requestForWarehouse.component.html',
  styleUrls: ['./requestForWarehouse.component.scss']
})
export class RequestForWarehouseComponent implements OnInit {

  @ViewChild('assignmentOrReceiptForm') assignmentOrReceiptForm: NgForm;
  @Input() requestType: {
    assignment: string,
    reciept: string
  }
  @Input() AssignmentOrRecieptList: AssignmentOrRecieptModel[]
  @Input() editId: number
  @Output() onClose = new EventEmitter<void>();
  @Output() upsertItem = new EventEmitter<AssignmentOrRecieptModel>();
  // DataFromEdit: GoodsModel[]=[]
  DataFromEdit!: any

  constructor(private warehouseService: WarehouseService) { }

  ngOnInit() {
  }

  close() {
    this.onClose.emit();
    // this.editId = null
  };

  onSubmit() {
    var dataForm = this.assignmentOrReceiptForm.value;
    if (this.assignmentOrReceiptForm.valid && dataForm != null) {
      let item: AssignmentOrRecieptModel = {
        id: randomIdCreate(0, 1000),
        goodsId: dataForm.goodsId,
        goodName: dataForm.goodName,
        count: 0,
        ActionDate: dataForm.ActionDate,
        type: dataForm.type,
        Price: dataForm.Price
      }
      this.warehouseService.setValueForm(this.assignmentOrReceiptForm, dataForm)
      this.upsertItem.emit(item)
      this.onClose.emit()
    } 
  }
}

function randomIdCreate(arg0: number, arg1: number): number {
  throw new Error('Function not implemented.');
}

