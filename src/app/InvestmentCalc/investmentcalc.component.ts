import { Component, inject, signal } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { InvestmentCalcService } from "./investmentcalc.service";

type InvestmentValue = {
    intial: number,
    annual: number,
    expectedReturn: number,
    duration: number
}

@Component({
    selector: 'invest-calc',
    standalone: true,
    templateUrl: './investmentcalc.component.html',
    styleUrl: './investmentcalc.component.css',
    imports: [FormsModule]
})
export class InvestmentCalc {

   public investmentCalcService = inject(InvestmentCalcService);

    investmentValue = signal<InvestmentValue>({
        intial: 0,
        annual: 0,
        expectedReturn: 0,
        duration: 0
    })

    handleCalc(): void{
        this.investmentCalcService.calculateInvestmentResults(this.investmentValue().intial, this.investmentValue().annual, this.investmentValue().expectedReturn, this.investmentValue().duration)
    }
}