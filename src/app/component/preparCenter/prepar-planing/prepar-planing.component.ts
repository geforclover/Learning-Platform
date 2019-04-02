import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { DataInterfaceService } from '../../../service/data-interface.service';

@Component({
    selector: 'app-prepar-planing',
    templateUrl: './prepar-planing.component.html'
})
export class PreparPlaningComponent implements OnInit {
    planLists: any;
    copyPlanLists: any;
    planListYears = [];
    _year: number;
    planListTerms = [];
    _term: number;
    planItem: any;
    showOperate: number;
    planFilter = {};

    viewTitle: string;
    viewSubject: string;
    viewYears: number;
    viewVersion: any;
    viewTerm: string;

    @ViewChild('tableHeading') tableHeading: ElementRef;
    @ViewChild('tableViewMain') tableViewMain: ElementRef;

    constructor(private dataInterfaceService: DataInterfaceService) {}

    setTableViewMainHeight = () => {
        const x = window.getComputedStyle(this.tableHeading.nativeElement, null)
            .height;
        this.tableHeading.nativeElement !== null
            ? (this.tableViewMain.nativeElement.style.height =
                  'calc(100% - ' + x + ' - 1px)')
            : (this.tableViewMain.nativeElement.style.height = '100%');
    };

    getPlanLists(): void {
        this.dataInterfaceService.getPlanLists().then(data => {
            this.planLists = data.rows;
            this.copyPlanLists = this.planLists;

            for (let i = 0; i < data.rows.length; i++) {
                this.planListYears[i] = data.rows[i].years;
                this.planListTerms[i] = data.rows[i].term;
            }
            this.planListYears = Array.from(new Set(this.planListYears)).sort();
            this.planListTerms = Array.from(new Set(this.planListTerms)).sort();
        });
    }

    setPlanFilter = (name, value: Function) => {
        const tmp = [];
        this.planFilter[name] = value;
        this.planLists = this.copyPlanLists;
        console.log(this.planFilter);

        for (let i = 0; i < this.planLists.length; i++) {
            if (
                this.planFilter['year'] === this.planLists[i].years ||
                this.planFilter['term'] === this.planLists[i].term
            ) {
                tmp.push(this.planLists[i]);
            }
        }
        console.log(tmp);
        this.planLists = tmp;
    }

    setPlanYear(year: number): number {
        this._year = year;
        return this._year;
    }

    setPlanTerm = (term: number) => {
        this._term = term;
        return this._term;
    }

    viewCurrentPlan = (plan: any) => {
        this.planItem = plan;
        this.viewTitle = plan.programname;
        this.viewYears = plan.years;
        this.dataInterfaceService.getSubjects().then(res => {
            for (let i = 0; i < res.length; i++) {
                if (plan.subjectid == res[i].subjectId) {
                    this.viewSubject = res[i].name;
                }
            }
            this.viewSubject === undefined ? (this.viewSubject = '未标记科目') : '';
        });

        this.dataInterfaceService.getVersions().then(res => {
            for (let i = 0; i < res.length; i++) {
                if (plan.versionid == res[i].value) {
                    this.viewVersion = res[i].key;
                }
            }
            this.viewVersion === undefined ? (this.viewVersion = '未划分教材') : '';
        });

        this.dataInterfaceService.getTerms().then(res => {
            for (let i = 0; i < res.length; i++) {
                if (plan.timeid === res[i].value) {
                    this.viewTerm = res[i].key;
                }
            }
        });
    }

    ngOnInit() {
        this.setTableViewMainHeight();
        this.getPlanLists();
    }
}
