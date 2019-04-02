import { Component, OnInit } from '@angular/core';

import { MainModel } from '../component/main-view/main-view.model'

@Component({
  selector: 'app-work-center',
  templateUrl: './moduleCenter-mainView.views.html',
})
export class WorkCenterView implements OnInit {
    mainModels: MainModel[]

	  constructor() {
        this.mainModels = [
            new MainModel('', '待完成作业', 'work-expectation'),
            new MainModel('', '创建作业', 'work-create'),
            new MainModel('', '已批改作业', 'work-corrected'),
            new MainModel('', '未发布作业', 'work-unPublish')
        ]
    }

	  ngOnInit() {
	  }
}
