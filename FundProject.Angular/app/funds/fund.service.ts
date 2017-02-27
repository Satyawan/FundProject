import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {IFund} from './fund';

@Injectable()

export class FundService {
    private _fundSearchUrl = 'api/funds/funds.json';
    private _fundUrl = 'api/funds/funds.json';

    constructor(private _http:Http){}
    searchFunds(): Observable<IFund[]>{
        return this._http.get(this._fundSearchUrl)
                        .map((response:Response) => <IFund[]>response.json())
                        .do(data=>console.log('Data received : '+ JSON.stringify(data)))
                        .catch(this.handleError);
    }
    getFunds():Observable<IFund[]>{
        return this._http.get(this._fundUrl)
                        .map((response:Response) => <IFund[]>response.json())
                        .do(data=>console.log('Data received : '+ JSON.stringify(data)))
                        .catch(this.handleError);
    }

    private handleError(error:Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}