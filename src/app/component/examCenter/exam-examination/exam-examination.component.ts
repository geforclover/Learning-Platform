import { Component, OnInit, Output } from '@angular/core';

import { TableViewService } from '../../../service/table-view.service';
import { DataInterfaceService } from '../../../service/data-interface.service';
import { PageMark } from '../../page-mark/page-mark.module';

@Component({
    selector: 'app-exam-examination',
    templateUrl: './exam-examination.component.html'
})
export class ExamExaminationComponent implements OnInit {
    examination: object[];
    total: number;
    @Output() public pageMark: PageMark = PageMark.defaultPageMark;

    constructor(private dataInterfaceService: DataInterfaceService) {}

    getExamination = () => {
        const page = this.pageMark.currentPage - 1;
        this.dataInterfaceService.getExamination().then(examination => {
            this.examination = examination.page.rows;
            this.pageMark.totalItems = this.examination.length;
        });
    }

    ngOnInit() {
        this.getExamination();
        this.pageMark.changePage = () => {
            this.getExamination();
        };
    }
}
