import { Component, OnInit } from '@angular/core';

import { MainModel } from '../component/main-view/main-view.model'

@Component({
  selector: 'app-prepar-center',
  templateUrl: './moduleCenter-mainView.views.html',
})
export class PreparCenterView implements OnInit {
    mainModels: MainModel[]

	  constructor() {
        this.mainModels = [
            new MainModel('', '教学计划', 'prepar-planing'),
            new MainModel('', '创建教学计划', 'create-planing'),
            new MainModel('', '教案', 'prepar-program'),
            new MainModel('', '导学案', 'prepar-guidance')
        ]
    }

	  ngOnInit() {
	  }
}
