import {Component} from '@angular/core';
import {FundService} from './funds/fund.service';

@Component({
    selector: "fm-app",
    template: `
        <div>
            <fm-products></fm-products>
        </div>
    `,
    providers:[FundService]
})
export class AppComponent{
}