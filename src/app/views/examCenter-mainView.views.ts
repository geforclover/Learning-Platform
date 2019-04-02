import { Component, OnInit } from '@angular/core';

import { MainModel } from '../component/main-view/main-view.model'

@Component({
  selector: 'app-exam-center',
  templateUrl: './moduleCenter-mainView.views.html',
})
export class ExamCenterView implements OnInit {
    mainModels: MainModel[]

	  constructor() {
        this.mainModels = [
            new MainModel('', '考试列表', 'exam-examination'),
            new MainModel('', '试卷列表', 'exam-testspaper'),
            new MainModel('', '考场管理', 'exam-rooms'),
            new MainModel('', '创建考试', 'exam-create')
        ]
    }

	  ngOnInit() {
	  }
}
