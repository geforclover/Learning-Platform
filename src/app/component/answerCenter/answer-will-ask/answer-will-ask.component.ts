import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { TableViewService } from '../../../service/table-view.service';
import { DataInterfaceService } from '../../../service/data-interface.service';

@Component({
    selector: 'app-answer-will-ask',
    templateUrl: './answer-will-ask.component.html'
})
export class AnswerWillAskComponent implements OnInit {
    grades: object[];
    gradeName: string;
    subjects: object[];
    subjectName: string;

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
            .getGrades()
            .then(grade => (this.grades = grade));
    }

    getCurrentGradeName = newGrade => {
        this.gradeName = newGrade;
    }

    getSubjects = () => {
        this.dataInterfaceService
            .getSubjects()
            .then(subject => (this.subjects = subject));
    }

    getCurrentSubjectName = newSubject => {
        this.subjectName = newSubject;
    }

    resetFilters = () => {
        this.gradeName = undefined;
        this.subjectName = undefined;
    }

    ngOnInit() {
        this.tableViewService.setTableViewMainHeight(
            this.tableHeading,
            this.tableViewMain
        );
        this.getGrades();
        this.getSubjects();
    }
}
