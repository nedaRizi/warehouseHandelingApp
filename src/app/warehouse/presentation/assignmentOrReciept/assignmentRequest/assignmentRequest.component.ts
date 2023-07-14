import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignmentOrRecieptModel, GoodsModel } from 'src/app/warehouse/application/goods.Model';
import { WarehouseService } from 'src/app/warehouse/application/warehouse.service';
import * as DataForgoodsList from '../../../application/goodsList.json'
import { Form, FormControl, NgForm } from '@angular/forms';

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
  assignmentInfo: AssignmentOrRecieptModel
  // DataFromEdit!: any
  assignmentRequestForm: NgForm;
  dataForUpsertGood: GoodsModel
  jsonGoodList: any
  goodsList: GoodsModel[] = [{
    id: 1,
    goodName: 'آرد',
    count: 500
  }]

  constructor(private warehouseService: WarehouseService) {
    // this.jsonGoodList = DataForgoodsList
  }

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
    console.log(this.goodsList)
  }

  close() {
    this.onClose.emit();
    // this.editId = null
  };

  warehouseCount: number
  onSubmit() {
    // console.log(this.assignmentRequestForm)
    // const form = document.querySelector('#assignmentRequestForm');
    // const formData = new FormData(this.assignmentRequestForm);
    // console.log(formData.get('count'));
    // console.log(formData.get('Price'));
    // console.log(formData.get('ActionDate'));

    const formData = {
      goodsId: this.assignmentInfo.goodsId,
      goodName: this.assignmentInfo.goodName,
      count: this.assignmentInfo.count,
      Price: this.assignmentInfo.Price,
      ActionDate: this.assignmentInfo.ActionDate,
    };
    
    console.log(formData);
  

    // var dataForm = this.assignmentRequestForm.value;
    // if (this.assignmentRequestForm.valid && dataForm != null) {
    //   let item: AssignmentOrRecieptModel = {
    //     // id: randomIdCreate(0, 1000),
    //     id: 111,
    //     goodsId: dataForm.goodsId,
    //     goodName: dataForm.goodName,
    //     count: dataForm.count,
    //     ActionDate: dataForm.ActionDate,
    //     Price: dataForm.Price,
    //     type: "Assignment"
    //   }
    //   this.dataForUpsertGood = {
    //     id: dataForm.goodsId,
    //     goodName: dataForm.goodName,
    //     count: this.warehouseCount - dataForm.count
    //   }
    //   this.warehouseService.updateGoodList(this.dataForUpsertGood)
    //   // this.warehouseService.setValueForm(this.assignmentRequestForm, dataForm)
    //   // this.upsertItem.emit(item)
    //   this.onClose.emit()
    // }
  }
}

function randomIdCreate(arg0: number, arg1: number): number {
  throw new Error('Function not implemented.');
}





