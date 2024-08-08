import { Component, OnInit} from '@angular/core';
import { InvestmentCalc } from './InvestmentCalc/investmentcalc.component';
import { InvestmentList } from './InvestmentList/investmentlist.component';

@Component({
  standalone: true,
  imports: [InvestmentCalc, InvestmentList],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
 
 
  ngOnInit(): void {
 }
}
