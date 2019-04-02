import { Component, OnInit } from '@angular/core';

import { MainModel } from '../component/main-view/main-view.model';

@Component({
    selector: 'app-answer-center',
    templateUrl: './moduleCenter-mainView.views.html'
})
export class AnswerCenterView implements OnInit {
    mainModels: MainModel[];

    constructor() {
        this.mainModels = [
            new MainModel('', '所有答疑', 'answer-complete'),
            new MainModel('', '我的提问', 'answer-myAsk'),
            new MainModel('', '我回答的问题', 'answer-myReply'),
            new MainModel('', '我收藏的问题', 'answer-myCollection')
        ];
    }

    ngOnInit() {}
}
