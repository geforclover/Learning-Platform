import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    AfterViewInit,
    Output,
    EventEmitter
} from '@angular/core';

import { TableViewService } from '../../../service/table-view.service';
import { DataInterfaceService } from '../../../service/data-interface.service';

@Component({
    selector: 'app-answer-reply',
    templateUrl: './answer-reply.component.html'
})
export class AnswerReplyComponent implements OnInit {
    currentReplyAnswer = this.dataInterfaceService.currentReplyAnswer;
    index: number;
    collect = false;
    subIcon = ['#icon-shuxuejisuan', '#icon-yingyu', '#icon-yuwen1'];
    subName: string[];

    constructor(
        private tableViewService: TableViewService,
        private dataInterfaceService: DataInterfaceService
    ) {}

    @ViewChild('tableViewMain') tableViewMain: ElementRef;
    @ViewChild('leftPanel') leftPanel: ElementRef;
    @ViewChild('rightPanel') rightPanel: ElementRef;

    popLeftPanel = () => {
        this.tableViewService.popTranslateX(this.leftPanel, '-9.5vw', 0.3);
    }

    popRightPanel = () => {
        this.tableViewService.popTranslateX(this.rightPanel, '13.5vw', 0.3);
    }

    getAnswerList = () => {
        let answerLists: object[];
        this.dataInterfaceService.getAnswerList().then(answerList => {
            answerLists = answerList.page.rows;
            const tmp = [];
            for (let i = 0; i < answerLists.length; i++) {
                tmp.push(answerLists[i]['_c_value']);
            }
            this.subName = Array.from(new Set(tmp)).sort();
            this.index = this.subName.indexOf(this.currentReplyAnswer._c_value);
        });
    }

    ngOnInit() {
        this.getAnswerList();
        this.tableViewService.setTableViewMainHeight(null, this.tableViewMain);
    }
}
