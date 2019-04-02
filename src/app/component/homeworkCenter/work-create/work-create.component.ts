import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { DataInterfaceService } from '../../../service/data-interface.service';

@Component({
    selector: 'app-work-create',
    templateUrl: './work-create.component.html'
})
export class WorkCreateComponent implements OnInit {
    createWork: FormGroup;
    subjects: any;
    subjectName: string;
    grades: string;
    gradeName: string;
    _hoverCard = false;
    startMonth = new Date().getMonth() + 1;
    overMonth = this.startMonth;
    startDate = new Date().getDate();
    overDate = new Date().getDate() + 6;
    year = new Date().getFullYear();
    _bigMonth = [1, 3, 5, 7, 8, 10, 12];
    _smallMonth = [4, 6, 9, 11];
    _flatMonth: number;

    mandateNum = 1;
    mandateNumArr: number[] = [1];
    tempArr: number[] = [];
    mandate1: string;

    constructor(private dataInterfaceService: DataInterfaceService) {
    }

    setDate = () => {
        if (this.year % 4 === 0) {
            if (
                (this.year % 100 === 0 && this.year % 400 === 0) ||
                this.year % 100 !== 0
            ) {
                this._flatMonth = 29;
            }
        } else {
            this._flatMonth = 28;
        }

        if (
            this._bigMonth.indexOf(this.startMonth) > -1 &&
            this.overDate > 31
        ) {
            this.overMonth += 1;
            this.overDate -= 31;
        }
        if (
            this._smallMonth.indexOf(this.startMonth) > -1 &&
            this.overDate > 30
        ) {
            this.overMonth += 1;
            this.overDate -= 30;
        }
        if (this.startMonth === 2 && this.overDate > this._flatMonth) {
            this.overMonth += 1;
            this.overDate -= this._flatMonth;
        }
    }

    getSubjects = () => {
        this.dataInterfaceService
            .getSubjects()
            .then(subjects => (this.subjects = subjects));
    }

    getGrades = () => {
        this.dataInterfaceService
            .getGrades()
            .then(grades => (this.grades = grades));
    }

    setActiveClass = (subjectName, gradeName) => {
        this.subjectName = subjectName || null;
        this.gradeName = gradeName || null;
    }

    addMandate = num => {
        if (this.tempArr.length === 0) {
            if (this.mandateNum < 5) {
                this.mandateNumArr.push(num);
                this.mandateNum += 1;
                console.log('first:  ' + this.mandateNum);
            }
        } else {
            this.mandateNum = this.tempArr[0];
            this.mandateNumArr.push(this.mandateNum);
            this.tempArr.splice(0, 1);
            console.log('removeNum:  ' + this.mandateNum);
        }

        // bug 全部删除了，第一个有时候没有删除按钮

        this.mandateNumArr = Array.from(new Set(this.mandateNumArr)).sort();
        console.log(num);
    }
    removeMandate = num => {
        this.tempArr.push(num);
        this.mandateNumArr.splice(this.mandateNumArr.indexOf(num), 1);
        this.mandateNum = num -= 1;
        this.tempArr = Array.from(new Set(this.tempArr)).sort();
        console.log('remove:  ' + this.mandateNum);
        console.log('removeArr  ' + this.mandateNumArr);
        console.log('removeTemp  ' + this.tempArr);
    }

    ngOnInit() {
        this.getSubjects();
        this.getGrades();
        this.setDate();
    }
}
