import { Component, OnInit } from '@angular/core';
import * as dataForAssignmentOrReceipt from '../../application/assignmentOrReceiptList.json'
import { AssignmentOrRecieptModel, GoodsModel } from '../../application/goods.Model';
import * as DataForgoodsList from '../../application/goodsList.json'

@Component({
  selector: 'app-assignmentOrReciept',
  templateUrl: './assignmentOrReciept.component.html',
  styleUrls: ['./assignmentOrReciept.component.scss']
})
export class AssignmentOrRecieptComponent implements OnInit {
  
  jsonAssignmentOrReceiptList: any
  AssignmentOrReceiptList: AssignmentOrRecieptModel[]
  activeModal: boolean = false
  activeAssignmentModal: boolean = false
  activeReceiptModal: boolean = false
  editId: number
  goodsList: GoodsModel[]
  jsonGoodList: any
  
  constructor() {
    this.jsonAssignmentOrReceiptList = dataForAssignmentOrReceipt;
    this.jsonGoodList = DataForgoodsList
  }

  ngOnInit() {
    this.AssignmentOrReceiptList=this.jsonAssignmentOrReceiptList.default;
    this.goodsList = this.jsonGoodList.default
  }

  showAssignmentModal() {
    // this.editId = null;
    // this.activeModal = true
    this.activeAssignmentModal = true
  }
  showReceiptModal() {
    // this.editId = null;
    // this.activeModal = true
    this.activeReceiptModal = true
  }
  closeModal() {
    // this.activeModal = false
    this.activeAssignmentModal = false
    this.activeReceiptModal = false
  }

  upsertGoodList(newItem: any) {
    this.goodsList.push(newItem)
  }
}
