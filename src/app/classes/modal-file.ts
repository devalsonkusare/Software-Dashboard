export class TopCardData{
    header!:string;
    sub_header!:string;
    value!:number;
}

export class RecentOrders{
    id!: string;
    name!:string;
    product!: string;
    delivery_date!: string;
    status!: string;
    tracking_no!: string;
    shipping!: boolean
}

export class NewUser
{
    id!: string;
    picture!: string;
    name!: string;
    isActive!: boolean;
    country!: string;
    progress!: number;
}