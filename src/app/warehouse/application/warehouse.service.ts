import { Injectable } from '@angular/core';
import { GoodsModel } from './goods.Model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

constructor() { }
setValueForm(goodsList: NgForm, data: GoodsModel) {
  goodsList?.setValue({
    goodName: data.goodName,
    count: data.count,
    // category: data.category,
    // color: data.color,
    // weight: data.weight
  });
}

}
