import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignmentOrRecieptModel, GoodsModel } from 'src/app/warehouse/application/goods.Model';
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
  dataForUpsertGood:GoodsModel


  constructor(private warehouseService: WarehouseService) { }

  ngOnInit() {
  }

  close() {
    this.onClose.emit();
    // this.editId = null
  };

  warehouseCount:number
  onSubmit() {
    var dataForm = this.receiptRequestForm.value;
    if (this.receiptRequestForm.valid && dataForm != null) {
      let item: AssignmentOrRecieptModel = {
        id: randomIdCreate(0, 1000),
        goodsId: dataForm.goodsId,
        goodName: dataForm.goodName,
        count: dataForm.count,
        ActionDate: dataForm.ActionDate,
        Price: dataForm.Price,
        type: "receipt"
      }
      this.dataForUpsertGood={
        id:123,
        goodName:dataForm.goodName,
        count:dataForm.count+this.warehouseCount
      }
      this.warehouseService.updateGoodList(this.dataForUpsertGood)
      // this.upsertItem.emit(item)
      this.onClose.emit()
    } 
  }
}

function randomIdCreate(arg0: number, arg1: number): number {
  throw new Error('Function not implemented.');
}




