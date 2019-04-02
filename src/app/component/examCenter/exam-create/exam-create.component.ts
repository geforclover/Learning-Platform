import { TableViewService } from './../../../service/table-view.service';
import { DataInterfaceService } from './../../../service/data-interface.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-exam-create',
    templateUrl: './exam-create.component.html'
})
export class ExamCreateComponent implements OnInit {
    termYears: object[];
    termYear: string;
    terms: object[];
    termName: string;
    condition: string;
    examTypes: object[];
    examType: string;

    constructor(
        private dataInterfaceService: DataInterfaceService,
        private tableViewService: TableViewService
    ) {}

    getTermYears = () => {
        this.dataInterfaceService
            .getTermYears()
            .then(termYears => (this.termYears = termYears));
    }

    getTerms = () => {
        this.dataInterfaceService
            .getTerms()
            .then(terms => (this.terms = terms));
    }

    getExamTypes = () => {
        this.dataInterfaceService
            .getExamTypes()
            .then(examTypes => (this.examTypes = examTypes.list));
    }

    setActiveClass = term => {
        this.termYear = term;
    }

    setConditionClass = condition => {
        this.condition = condition;
    }

    ngOnInit() {
        this.getTermYears();
        this.getTerms();
        this.getExamTypes();
    }
}
