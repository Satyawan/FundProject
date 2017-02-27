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
    errorMessage: string;
    products: IFund[] ;
    ngOnInit():void{
        this._fundService.getFunds()
            .subscribe(funds => this.products = funds,
                        error => this.errorMessage = <any>error);
    }
}