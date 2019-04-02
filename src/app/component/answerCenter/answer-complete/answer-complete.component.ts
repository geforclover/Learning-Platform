import { Component, OnInit, OnChanges } from '@angular/core';

import { DataInterfaceService } from '../../../service/data-interface.service';
import { TableViewService } from './../../../service/table-view.service';

@Component({
    selector: 'app-answer-complete',
    templateUrl: './answer-complete.component.html'
})
export class AnswerCompleteComponent implements OnInit {
    answerLists: object[];
    subIcon = ['#icon-shuxuejisuan', '#icon-yingyu', '#icon-yuwen1'];
    subName: string[];

    constructor(
        private dataInterfaceService: DataInterfaceService,
        private tableViewService: TableViewService
    ) {}

    getAnswerList = () => {
        const tmp = [];
        if (window.location.href.indexOf('answer-complete') > -1) {
            this.dataInterfaceService.getAnswerList().then(answerLists => {
                this.answerLists = answerLists.page.rows;
                for (let i = 0; i < this.answerLists.length; i++) {
                    tmp.push(this.answerLists[i]['_c_value']);
                }
                this.subName = Array.from(new Set(tmp)).sort();
                console.log(this.subName);
            });
        }
        if (window.location.href.indexOf('answer-myClass') > -1) {
            this.dataInterfaceService.getMyClassAnswerList().then(answerLists => {
                this.answerLists = answerLists.page.rows;
                for (let i = 0; i < this.answerLists.length; i++) {
                    tmp.push(this.answerLists[i]['_c_value']);
                }
                this.subName = Array.from(new Set(tmp)).sort();
                console.log(this.subName);
            });
        }
    }

    setCurrentAnswerReply = obj => {
        this.dataInterfaceService.currentReplyAnswer = obj;
        console.log(obj);
    }

    ngOnInit() {
        this.getAnswerList();
    }
}
