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
    selector: 'app-answer-table-view',
    templateUrl: './answer-table-view.component.html'
})
export class AnswerTableViewComponent implements OnInit {
    grades: object[];
    gradeName: string;
    subjects: object[];
    subjectName: string;
    currentAnswerName: string;
    currentAnswerUrl: string;
    current: string;
    answerList: string;
    isAnswerList = true;

    constructor(
        private tableViewService: TableViewService,
        private dataInterfaceService: DataInterfaceService
    ) {}

    @ViewChild('tableHeading') tableHeading: ElementRef;
    @ViewChild('tableViewMain') tableViewMain: ElementRef;
    @ViewChild('leftPanel') leftPanel: ElementRef;
    @ViewChild('rightPanel') rightPanel: ElementRef;

    popLeftPanel = () => {
        this.tableViewService.popTranslateX(this.leftPanel, '-9.5vw', 0.3);
    }

    popRightPanel = () => {
        this.tableViewService.popTranslateX(this.rightPanel, '13.5vw', 0.3);
    }

    getGrades = () => {
        this.dataInterfaceService.getGrades().then(grade => this.grades = grade);
    }

    getCurrentGradeName = newGrade => {
        this.gradeName = newGrade;
    }

    getSubjects = () => {
        this.dataInterfaceService.getSubjects().then(subject => this.subjects = subject);
    }

    getCurrentSubjectName = newSubject => {
        this.subjectName = newSubject;
    }

    resetFilters = () => {
        this.gradeName = undefined;
        this.subjectName = undefined;
    }

    setCurrentAnswerName = () => {
        if (window.location.href.indexOf('answer-complete') > -1) {
            this.currentAnswerName = '查看我班答疑';
            this.currentAnswerUrl = '../answer-myClass';
            this.current = 'complete';
            this.answerList = 'complete';
        }
        if (window.location.href.indexOf('answer-myClass') > -1) {
            this.currentAnswerName = '查看全部答疑';
            this.currentAnswerUrl = '../answer-complete';
            this.current = 'myClass';
            this.answerList = 'complete';
        }
        if (window.location.href.indexOf('answer-myAsk') > -1) {
            this.currentAnswerName = '我要提问';
            this.currentAnswerUrl = '../answer-willAsk';
            this.isAnswerList = true;
            this.current = 'myAsk';
            this.answerList = 'myAsk';
        }
        if (window.location.href.indexOf('answer-myReply') > -1) {
            this.currentAnswerName = '等我回答的问题';
            this.currentAnswerUrl = '../answer-waitMe';
            this.isAnswerList = true;
            this.current = 'myReply';
            this.answerList = 'myReply';
        }
        if (window.location.href.indexOf('answer-waitMe') > -1) {
            this.currentAnswerName = '我回答的问题';
            this.isAnswerList = false;
            this.currentAnswerUrl = '../answer-myReply';
            this.current = 'waitMe';
            this.answerList = 'myReply';
        }
        if (window.location.href.indexOf('answer-myCollection') > -1) {
            this.isAnswerList = false;
            this.current = 'myCollection';
            this.answerList = 'myCollection';
        }
    }

    ngOnInit() {
        this.tableViewService.setTableViewMainHeight(
            this.tableHeading,
            this.tableViewMain
        );
        this.getGrades();
        this.getSubjects();
        this.setCurrentAnswerName();
    }
}
