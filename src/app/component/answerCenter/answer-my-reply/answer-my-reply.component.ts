import { Component, OnInit } from '@angular/core';

import { TableViewService } from '../../../service/table-view.service';
import { DataInterfaceService } from '../../../service/data-interface.service';

@Component({
    selector: 'app-answer-my-reply',
    templateUrl: './answer-my-reply.component.html'
})
export class AnswerMyReplyComponent implements OnInit {
    myReplys: object[];
    subIcon = ['#icon-shuxuejisuan', '#icon-yingyu', '#icon-yuwen1'];
    subName: string[];
    constructor(
        private tableViewService: TableViewService,
        private dataInterfaceService: DataInterfaceService
    ) {}

    getMyReplyList = () => {
        const tmp = [];
        if (window.location.href.indexOf('answer-myReply') > -1) {
            this.dataInterfaceService.getMyReplyList().then(myReplys => {
                this.myReplys = myReplys.page.rows;

                for (let i = 0; i < this.myReplys.length; i++) {
                    tmp.push(this.myReplys[i]['_c_value']);
                }
                this.subName = Array.from(new Set(tmp)).sort();
            });
        }
        if (window.location.href.indexOf('answer-waitMe') > -1) {
            this.dataInterfaceService.getWaitMeList().then(myReplys => {
              this.myReplys = myReplys.page.rows;

              for (let i = 0; i < this.myReplys.length; i++) {
                  tmp.push(this.myReplys[i]['_c_value']);
              }
              this.subName = Array.from(new Set(tmp)).sort();
          });
        }
    }

    setCurrentAnswerReply = obj => {
        this.dataInterfaceService.currentReplyAnswer = obj;
        console.log(obj);
    }

    ngOnInit() {
        this.getMyReplyList();
    }
}
