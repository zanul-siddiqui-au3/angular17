import { Component } from "@angular/core";
import { InvestmentCalcService } from "../InvestmentCalc/investmentcalc.service";

@Component({
    selector: 'investment-list',
    standalone: true,
    templateUrl: './investmentlist.component.html',
    styleUrl: './investmentlist.component.css'
})
export class InvestmentList {
    constructor(public investmentCalcService: InvestmentCalcService) {}
}