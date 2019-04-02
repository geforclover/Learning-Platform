import { Component, OnInit, Input, AfterContentInit, OnChanges } from '@angular/core';

import { TableViewService } from '../../../service/table-view.service';
import { DataInterfaceService } from '../../../service/data-interface.service';

@Component({
    selector: 'app-prepar-program',
    templateUrl: './prepar-program.component.html'
})
export class PreparProgramComponent implements OnInit, OnChanges {
    @Input() subjectName: string;
    @Input() versionName: string;
    @Input() termYearName: string;
    filterObj = [];
    programs: any[];
    guidance: any[];
    termYears: object[];

    constructor(
        private tableViewService: TableViewService,
        private dataInterfaceService: DataInterfaceService
    ) {}

    getProgram = () => {
        for (let i = 0; i < this.filterObj.length; i++) {
            if (this.filterObj[i] !== undefined) {
                const tmp = [];
                for (let j = 0; j < this.programs.length; j++) {
                    for (const idx in this.programs[j]) {
                        if (this.programs[j][idx] === this.filterObj[i]) {
                            tmp.push(this.programs[j]);
                        }
                    }
                }
                this.programs = tmp;
                this.filterObj.splice(
                    this.filterObj.indexOf(this.filterObj[i]),
                    1
                );
            }
        }
    }

    ngOnInit() {
        if (window.location.href.indexOf('prepar-program') > -1) {
            this.dataInterfaceService.getProgram().then(programs => {
                this.programs = programs;
            });
        }
        if (window.location.href.indexOf('prepar-guidance') > -1) {
            this.dataInterfaceService.getGuideProgram().then(guidance => {
                this.programs = guidance;
            });
        }
    }

    ngOnChanges() {
        this.filterObj = [
            this.subjectName,
            this.versionName,
            this.termYearName
        ];
        this.getProgram();
    }
}
