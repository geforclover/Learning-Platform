import { Component, OnInit } from '@angular/core';

import { MainModel } from '../component/main-view/main-view.model'

@Component({
  selector: 'app-teach-center',
  templateUrl: './moduleCenter-mainView.views.html',
})
export class TeachCenterView implements OnInit {
    mainModels: MainModel[]

	  constructor() {
        this.mainModels = [
            new MainModel('', '', ''),
            new MainModel('', '', ''),
            new MainModel('', '网上教学', 'teach-online'),
            new MainModel('', '线下教学', 'teach-offline')
        ]
    }

	  ngOnInit() {
	  }
}
