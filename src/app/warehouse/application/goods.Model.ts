export interface GoodsModel {
    id: number,
    goodName: string,
    count?: number,
    // year: string,
    // category: GoodsCategory,
    // color: string,
    // weight: number
}

export interface GoodsCategory {
    value: string,
    key: string
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