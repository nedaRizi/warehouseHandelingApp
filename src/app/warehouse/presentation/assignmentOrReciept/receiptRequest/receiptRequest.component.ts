import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignmentOrRecieptModel } from 'src/app/warehouse/application/goods.Model';
import { WarehouseService } from 'src/app/warehouse/application/warehouse.service';

@Component({
  selector: 'app-receiptRequest',
  templateUrl: './receiptRequest.component.html',
  styleUrls: ['./receiptRequest.component.scss']
})
export class ReceiptRequestComponent implements OnInit {

  @Input() AssignmentOrRecieptList: AssignmentOrRecieptModel[]
  @Input() editId: number
  @Output() onClose = new EventEmitter<void>();
  @Output() upsertItem = new EventEmitter<AssignmentOrRecieptModel>();
  // DataFromEdit: GoodsModel[]=[]
  DataFromEdit!: any
  receiptRequestForm: any;


  constructor(private warehouseService: WarehouseService) { }

  ngOnInit() {
  }

  close() {
    this.onClose.emit();
    // this.editId = null
  };

  onSubmit() {
    var dataForm = this.receiptRequestForm.value;
    if (this.receiptRequestForm.valid && dataForm != null) {
      let item: AssignmentOrRecieptModel = {
        id: randomIdCreate(0, 1000),
        goodsId: dataForm.goodsId,
        goodName: dataForm.goodName,
        count: 0,
        ActionDate: dataForm.ActionDate,
        type: dataForm.type,
        Price: dataForm.Price
      }
      this.warehouseService.setValueForm(this.receiptRequestForm, dataForm)
      this.upsertItem.emit(item)
      this.onClose.emit()
    } 
  }
}

function randomIdCreate(arg0: number, arg1: number): number {
  throw new Error('Function not implemented.');
}




