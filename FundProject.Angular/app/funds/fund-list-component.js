"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FundListComponent = (function () {
    function FundListComponent() {
        this.pageTitle = "Funds";
        this.products = [
            {
                "fundname": "T. Rowe Price Retirement 2045 Fund",
                "ticket": "RRTRX",
                "morningstar": "Target-Date",
                "monthly": "6.56%",
                "trimontly": "0.00",
                "yearly": "-3.58%",
                "fiveyearly": "7.10%",
                "inception": "3.95%"
            },
            {
                "fundname": "T. Rowe Price Retirement 2050 Fund",
                "ticket": "RRTFX",
                "morningstar": "Target-Date",
                "monthly": "6.66%",
                "trimontly": "0.00",
                "yearly": "-3.55%",
                "fiveyearly": "7.15%",
                "inception": "4.77%"
            },
            {
                "fundname": "T. Rowe Price Retirement 2045 Fund",
                "ticket": "RRTRX",
                "morningstar": "Target-Date",
                "monthly": "6.56%",
                "trimontly": "0.00",
                "yearly": "-3.58%",
                "fiveyearly": "7.10%",
                "inception": "3.95%"
            },
            {
                "fundname": "T. Rowe Price Retirement 2050 Fund",
                "ticket": "RRTFX",
                "morningstar": "Target-Date",
                "monthly": "6.66%",
                "trimontly": "0.00",
                "yearly": "-3.55%",
                "fiveyearly": "7.15%",
                "inception": "4.77%"
            }
        ];
    }
    return FundListComponent;
}());
FundListComponent = __decorate([
    core_1.Component({
        selector: 'fm-products',
        templateUrl: 'app/funds/fund-list-component.html'
    })
], FundListComponent);
exports.FundListComponent = FundListComponent;
//# sourceMappingURL=fund-list-component.js.map