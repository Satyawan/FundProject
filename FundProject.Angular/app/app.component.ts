import {Component} from '@angular/core'

@Component({
    selector: "fm-app",
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <fm-products></fm-products>
        </div>
    `
})
export class AppComponent{
    pageTitle: string = "Fund Management";
}