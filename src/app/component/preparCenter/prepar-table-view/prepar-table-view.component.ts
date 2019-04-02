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
    selector: 'app-prepar-table-view',
    templateUrl: './prepar-table-view.component.html'
})
export class PreparTableViewComponent implements OnInit {
    subjects: object[];
    subjectName: string;
    versions: object[];
    versionName: string;
    programs: object[];
    guidePrograms: object[];
    termYears: object[];
    termYearName: string;

    constructor(
        private tableViewService: TableViewService,
        private dataInterfaceService: DataInterfaceService
    ) {}

    @ViewChild('tableHeading') tableHeading: ElementRef;
    @ViewChild('tableViewMain') tableViewMain: ElementRef;
    @ViewChild('leftPanel') leftPanel: ElementRef;
    @ViewChild('rightPanel') rightPanel: ElementRef;

    getSubjects(): void {
        this.dataInterfaceService
            .getSubjects()
            .then(subjects => (this.subjects = subjects));
    }

    getCurrentSubjectName = newName => {
        this.subjectName = newName;
    }

    getVersions(): void {
        this.dataInterfaceService
            .getVersions()
            .then(versions => (this.versions = versions));
    }

    getCurrentVersionName = newVersion => {
        this.versionName = newVersion;
    }

    getTermYears = () => {
        this.dataInterfaceService
            .getTermYears()
            .then(termYears => (this.termYears = termYears));
    }

    @Output()
    getCurrentTermYear = termYear => {
        this.termYearName = termYear;
    }

    getProgram = () => {
        this.dataInterfaceService.getProgram().then(programs => {
            this.programs = programs;
            const tmp = [];
            for (let i = 0; i < this.programs.length; i++) {
                for (let j = 0; j < this.termYears.length; j++) {
                    if (
                        this.programs[i]['years'] === this.termYears[j]['value']
                    ) {
                        tmp.push(this.termYears[j]);
                    }
                }
            }
            this.termYears = Array.from(new Set(tmp));
        });
    }

    getGuideProgram = () => {
        this.dataInterfaceService
            .getGuideProgram()
            .then(guidePrograms => (this.guidePrograms = guidePrograms));
    }

    popLeftPanel = () => {
        this.tableViewService.popTranslateX(this.leftPanel, '-9.5vw', 0.3);
    }

    popRightPanel = () => {
        this.tableViewService.popTranslateX(this.rightPanel, '13.5vw', 0.3);
    }

    resetFilters = () => {
        this.subjectName = undefined;
        this.versionName = undefined;
    }

    resetSingleFilter = filter => {
        this.subjectName === filter ? (this.subjectName = undefined) : '';
        this.versionName === filter ? (this.versionName = undefined) : '';
    }

    ngOnInit() {
        this.tableViewService.setTableViewMainHeight(
            this.tableHeading,
            this.tableViewMain
        );
        this.getSubjects();
        this.getVersions();
        this.getTermYears();
        this.getProgram();
        this.getGuideProgram();
    }
}
