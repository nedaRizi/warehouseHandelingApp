import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { GoodsCategory, GoodsModel } from '../../application/goods.Model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-upsert-good',
  templateUrl: './upsert-good.component.html',
  styleUrls: ['./upsert-good.component.scss']
})
export class UpsertGoodComponent implements OnInit {

  @ViewChild('upsertGoodForm') upsertGoodForm: NgForm;
  @Input() catgories: GoodsCategory[]
  @Input() goodsList: GoodsModel[]
  @Input() editId: number
  @Output() onClose = new EventEmitter<void>();
  @Output() upsertItem = new EventEmitter<GoodsModel>();
  // DataFromEdit: GoodsModel[]=[]
  DataFromEdit!: any

  constructor() { }

  ngOnInit() {
    if (this.editId) {
      this.DataFromEdit = this.goodsList.filter((c: any) => {
        return c.id == this.editId
      })
      this.DataFromEdit = this.DataFromEdit[0]
    } 
    // else {
    //   this.DataFromEdit = this.nullItem
    // }
  };

  close() {
    this.onClose.emit();
    // this.editId = null
  };

  onSubmit() {
    var dataForm = this.upsertGoodForm.value;
    if (this.upsertGoodForm.valid && dataForm != null) {
      if (this.editId) {
        // this.productService.setValueForm(this.upsertGoodForm, dataForm)
      } else {
        let item: GoodsModel = {
          id: randomIdCreate(0, 1000),
          goodName: dataForm.goodName,
          count: dataForm.count,
          // count: 0,
          
        }
        this.upsertItem.emit(item)
      }
      this.onClose.emit()
    } else {
      alert('فرم خطا دارد ثبت نشد')
    }
  }
}

function randomIdCreate(arg0: number, arg1: number): number {
  throw new Error('Function not implemented.');
}

