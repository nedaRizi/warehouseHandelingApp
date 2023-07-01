import { Component, OnInit } from '@angular/core';
import * as DataForgoodsList from '../application/goodsList.json'
import { GoodsCategory, GoodsModel } from '../application/goods.Model';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

  jsonGoodList: any
  goodsList: GoodsModel[]
  goodCategory: GoodsCategory[]
  activeModal: boolean = false
  editId: number

  constructor() {
    this.jsonGoodList = DataForgoodsList
  }

  ngOnInit() {
    this.goodsList = this.jsonGoodList.default
  }

  showModal() {
    // this.editId = null;
    this.activeModal = true
  }
  closeModal() {
    this.activeModal = false
  }

  showModalForEdit(item: GoodsModel) {
    this.showModal();
    this.editId = item.id
  }

  upsertGoodList(newItem: any) {
    this.goodsList.push(newItem)
  }


}
