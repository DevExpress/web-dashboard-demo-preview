import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-dashboard-demo-preview';

  workingMode: string = 'Viewer';
  dashboardId: string = 'SalesOverview';
  dashboards = [
    {"id":"SalesOverview","name":"Sales Overview"},
    {"id":"CustomerSupport","name":"Customer Support"},
    {"id":"SalesPerformance","name":"Sales Performance"},
    {"id":"Financial","name":"Financial Dashboard"},
    {"id":"EnergyStatistics","name":"Energy Statistics"},
    {"id":"HumanResources","name":"Human Resources"},
    {"id":"ChampionsLeagueStatistics","name":"Champions League Statistics"},
    {"id":"SalesDetails","name":"Sales Details"},
    {"id":"RevenueAnalysis","name":"Revenue Analysis"},
    {"id":"RevenueByIndustry","name":"Revenue by Industry"},
    {"id":"EnergyConsumption","name":"Energy Consumption"},
    {"id":"WebsiteStatistics","name":"Website Statistics"},
    {"id":"EUTradeOverview","name":"EU Trade Overview 2015"},
    {"id":"YTDPerformance","name":"YTD Performance"}
  ];

  get workingModeText() {
    return 'Switch to ' + this.toggleMode(this.workingMode);
  }
  changeWorkingMode() {    
    this.workingMode = this.toggleMode(this.workingMode);
  }
  toggleMode(mode) {
    return mode === 'Viewer' ? "Designer" : "Viewer";
  }
}
