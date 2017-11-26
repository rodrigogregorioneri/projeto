import { Component } from '@angular/core';

import { AvaliationPage } from '../avaliation/avaliation';
import { LawyerListPage } from '../lawyer-list/lawyerlist';
import { ResultComponent } from '../result/result-component';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AvaliationPage;
  tab3Root = LawyerListPage;
  tab4Root = ResultComponent;

  constructor() {

  }
}
