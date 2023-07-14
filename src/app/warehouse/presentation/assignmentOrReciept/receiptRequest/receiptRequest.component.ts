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
  dataForUpsertGood: GoodsModel
  jsonGoodList: any

  goodsList: GoodsModel[]



  constructor(private warehouseService: WarehouseService) { }

  ngOnInit() {
    // this.goodsList = this.jsonGoodList.default
    this.goodsList = [
      {
        id: 1,
        goodName: 'آرد',
        count: 500
      },
      {
        id: 2,
        goodName: 'برنج',
        count: 500
      },
      {
        id: 3,
        goodName: 'لوبیا',
        count: 1000
      },
      {
        id: 4,
        goodName: 'شکر',
        count: 200
      },
      {
        id: 5,
        goodName: 'عدس',
        count: 1000
      },
      {
        id: 6,
        goodName: 'کنجد',
        count: 500
      },
      {
        id: 7,
        goodName: 'جو',
        count: 300
      }
    ];

  }

  close() {
    this.onClose.emit();
    // this.editId = null
  };

  warehouseCount: number
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
      this.dataForUpsertGood = {
        id: dataForm.goodsId,
        goodName: dataForm.goodName,
        count: dataForm.count + this.warehouseCount
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




