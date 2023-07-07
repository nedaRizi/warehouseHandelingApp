import { Injectable } from '@angular/core';
import { GoodsModel } from './goods.Model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import * as DataForgoodsList from './goodsList.json'

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor() { }

  setValueForm(goodsList: NgForm, data: GoodsModel) {
    goodsList?.setValue({
      goodName: data.goodName,
      count: data.count,
    });
  }

  updateGoodList(goodList:GoodsModel){
    
  }
  // updateGoodListJsonFile(data: GoodsModel) {
  //   // const data = { name: 'John Doe', age: 30 };
  //   this.http.put('./goodsList.json', data).subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   );
  // }
}

// export class AppComponent {
//   constructor(private http: HttpClient) {}

//   updateJsonFile() {
//     const data = { name: 'John Doe', age: 30 };
//     this.http.put('path/to/json/file.json', data).subscribe(
//       (response) => console.log(response),
//       (error) => console.log(error)
//     );
//   }
// }


