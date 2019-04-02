import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { TableViewService } from '../../../service/table-view.service';
import { DataInterfaceService } from '../../../service/data-interface.service';

@Component({
    selector: 'app-exam-table-view',
    templateUrl: './exam-table-view.component.html'
})
export class ExamTableViewComponent implements OnInit {
    grades: object[];
    gradeName: string;
    examList: string;

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
        this.dataInterfaceService
            .getExamGrades()
            .then(grade => (this.grades = grade.list));
    }

    getCurrentGradeName = newGrade => {
        this.gradeName = newGrade;
    }

    resetFilters = () => {
        this.gradeName = undefined;
    }

    setCurrentExamList = () => {
        if (window.location.href.indexOf('exam-examination') > -1) {
            this.examList = 'examination';
        }
        if (window.location.href.indexOf('exam-rooms') > -1) {
            this.examList = 'rooms';
        }
    }

    ngOnInit() {
        this.tableViewService.setTableViewMainHeight(
            this.tableHeading,
            this.tableViewMain
        );
        this.getGrades();
        this.setCurrentExamList();
    }
}
