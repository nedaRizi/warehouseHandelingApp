export interface GoodsModel {
    id: number,
    goodName: string,
    count?: number,    
}


export interface AssignmentOrRecieptModel {
    id: number,
    goodsId: number,
    goodName: string,
    count: number,
    ActionDate: Date,
    type: string,
    Price: number
}
export interface GoodsCategory {
    value: string,
    key: string
}