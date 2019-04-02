import { TableViewService } from './../../../service/table-view.service';
import { DataInterfaceService } from './../../../service/data-interface.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-exam-rooms-arrange',
    templateUrl: './exam-rooms-arrange.component.html'
})
export class ExamRoomsArrangeComponent implements OnInit {
    examNames: object[];
    examName: string;
    examGrades: object[];
    examGrade: string;
    arrangeRule: string;
    arrangeType: string;

    constructor(
        private dataInterfaceService: DataInterfaceService,
        private tableViewService: TableViewService
    ) {}

    getExamNames = () => {
        this.dataInterfaceService
            .getExamNames()
            .then(examNames => (this.examNames = examNames.list));
    }

    getExamGrades = () => {
        this.dataInterfaceService
            .getExamGrades()
            .then(examGrades => (this.examGrades = examGrades.list));
    }

    setActiveClass = examName => {
        this.examName = examName || null;
    }

    setArrangeRule = rule => {
        this.arrangeRule = rule;
    }

    setArrangeType = type => {
        this.arrangeType = type;
    }

    ngOnInit() {
        this.getExamNames();
        this.getExamGrades();
    }
}
