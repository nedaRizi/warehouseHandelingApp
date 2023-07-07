import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignmentOrRecieptModel, GoodsModel } from 'src/app/warehouse/application/goods.Model';
import { WarehouseService } from 'src/app/warehouse/application/warehouse.service';
import * as DataForgoodsList from '../../../application/goodsList.json'

@Component({
  selector: 'app-assignmentRequest',
  templateUrl: './assignmentRequest.component.html',
  styleUrls: ['./assignmentRequest.component.scss']
})
export class AssignmentRequestComponent implements OnInit {

  @Input() AssignmentOrRecieptList: AssignmentOrRecieptModel[]
  @Input() editId: number
  @Output() onClose = new EventEmitter<void>();
  @Output() upsertItem = new EventEmitter<AssignmentOrRecieptModel>();
  // DataFromEdit: GoodsModel[]=[]
  DataFromEdit!: any
  assignmentRequestForm: any;
  dataForUpsertGood:GoodsModel
  jsonGoodList: any
  goodsList: GoodsModel[]

  constructor(private warehouseService: WarehouseService) { 
    this.jsonGoodList = DataForgoodsList
  }

  ngOnInit() {
    this.goodsList = this.jsonGoodList.default
  }

  close() {
    this.onClose.emit();
    // this.editId = null
  };

  warehouseCount:number
  onSubmit() {
    var dataForm = this.assignmentRequestForm.value;
    if (this.assignmentRequestForm.valid && dataForm != null) {
      let item: AssignmentOrRecieptModel = {
        id: randomIdCreate(0, 1000),
        goodsId: dataForm.goodsId,
        goodName: dataForm.goodName,
        count: dataForm.count,
        ActionDate: dataForm.ActionDate,
        Price: dataForm.Price,
        type: "Assignment"
      }
      this.dataForUpsertGood={
        id:dataForm.goodsId,
        goodName:dataForm.goodName,
        count:this.warehouseCount - dataForm.count
      }
      this.warehouseService.updateGoodList(this.dataForUpsertGood)
      // this.warehouseService.setValueForm(this.assignmentRequestForm, dataForm)
      // this.upsertItem.emit(item)
      this.onClose.emit()
    } 
  }
}

function randomIdCreate(arg0: number, arg1: number): number {
  throw new Error('Function not implemented.');
}




