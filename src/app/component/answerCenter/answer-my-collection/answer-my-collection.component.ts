import { Component, OnInit } from '@angular/core';

import { TableViewService } from '../../../service/table-view.service';
import { DataInterfaceService } from '../../../service/data-interface.service';

@Component({
    selector: 'app-answer-my-collection',
    templateUrl: './answer-my-collection.component.html'
})
export class AnswerMyCollectionComponent implements OnInit {
    myCollections: object[];
    subIcon = ['#icon-shuxuejisuan', '#icon-yingyu', '#icon-yuwen1'];
    subName: string[];
    constructor(
        private tableViewService: TableViewService,
        private dataInterfaceService: DataInterfaceService
    ) {}

    getMyCollectionList = () => {
        const tmp = [];
        this.dataInterfaceService.getMyCollectionList().then(myCollections => {
            this.myCollections = myCollections.page.rows;
            for (let i = 0; i < this.myCollections.length; i++) {
                tmp.push(this.myCollections[i]['_c_value']);
            }
            this.subName = Array.from(new Set(tmp)).sort();
        });
    }

    setCurrentAnswerReply = obj => {
        this.dataInterfaceService.currentReplyAnswer = obj;
        console.log(obj);
    }

    ngOnInit() {
        this.getMyCollectionList();
    }
}
