import { Component, OnInit } from '@angular/core';

import { TableViewService } from '../../../service/table-view.service';
import { DataInterfaceService } from '../../../service/data-interface.service';

@Component({
    selector: 'app-answer-my-ask',
    templateUrl: './answer-my-ask.component.html'
})
export class AnswerMyAskComponent implements OnInit {
    myAsks: object[];
    subIcon = ['#icon-shuxuejisuan', '#icon-yingyu', '#icon-yuwen1'];
    subName: string[];
    constructor(
        private tableViewService: TableViewService,
        private dataInterfaceService: DataInterfaceService
    ) {}

    getMyAskList = () => {
        const tmp = [];
        this.dataInterfaceService.getMyAskList().then(myAsks => {
            this.myAsks = myAsks.page.rows;
            for (let i = 0; i < this.myAsks.length; i++) {
                tmp.push(this.myAsks[i]['_c_value']);
            }
            this.subName = Array.from(new Set(tmp)).sort();
        });
    }

    setCurrentAnswerReply = obj => {
        this.dataInterfaceService.currentReplyAnswer = obj;
        console.log(obj);
    }

    ngOnInit() {
        this.getMyAskList();
    }
}
