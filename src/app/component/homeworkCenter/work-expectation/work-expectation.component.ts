import { Component, OnInit, Output, Input, AfterViewInit } from '@angular/core';

import { DataInterfaceService } from '../../../service/data-interface.service';
import { PageMark } from '../../page-mark/page-mark.module';

@Component({
    selector: 'app-work-expectation',
    templateUrl: './work-expectation.component.html'
})
export class WorkExpectationComponent implements OnInit {
    homeworkinfos = [];
    homeworkInfos: any;

    // 分页总数, @input 传递给子组件
    total: number;

    @Input() selectedWorkName: any;
    @Output() public pageMark: PageMark = PageMark.defaultPageMark;

    constructor(private dataInterfaceService: DataInterfaceService) {}

    private getHomeworkInfos(): void {
        const page = this.pageMark.currentPage - 1;
        this.dataInterfaceService.getHomeworkInfos().then(homeworkInfos => {
            this.dataInterfaceService.homeworkInfoShared = homeworkInfos;
            this.homeworkInfos = homeworkInfos;
            for (let i = 0; i < this.homeworkInfos.length; i++) {
                for (
                    let j = 0;
                    j < this.homeworkInfos[i].homeworkinfo.length;
                    j++
                ) {
                    this.homeworkinfos.splice(
                        0,
                        0,
                        this.homeworkInfos[i].homeworkinfo[j]
                    );
                }
            }
            this.pageMark.totalItems = this.homeworkinfos.length;
        });
    }

    ngOnInit() {
        this.getHomeworkInfos();
        this.pageMark.changePage = () => {
            this.getHomeworkInfos();
        };
    }
}
