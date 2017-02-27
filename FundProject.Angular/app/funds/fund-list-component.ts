import {Component, OnInit} from "@angular/core";
import {FundService} from "./fund.service";
import {IFund} from './fund';

@Component({
    selector: 'fm-products',
    templateUrl: 'app/funds/fund-list-component.html'
})

export class FundListComponent implements OnInit{
    constructor(private _fundService: FundService){
    }
    pageTitle: string= "Funds";
    products: IFund[] ;
    ngOnInit():void{
        this.products = this._fundService.getFunds();
    }
}