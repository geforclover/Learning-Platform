import { Component, OnInit } from '@angular/core';

import { MainModel } from '../component/main-view/main-view.model'

@Component({
  selector: 'app-question-center',
  templateUrl: './moduleCenter-mainView.views.html',
})
export class QuestionCenterView implements OnInit {
    mainModels: MainModel[]

	  constructor() {
        this.mainModels = [
            new MainModel('', '题库', 'question-warehouse'),
            new MainModel('', '私人题库', 'question-private'),
            new MainModel('', '上传试题', 'question-upload'),
            new MainModel('', '组卷', 'question-compose')
        ]
    }

	  ngOnInit() {
	  }
}
