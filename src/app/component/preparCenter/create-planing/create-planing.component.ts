import { Component, OnInit } from '@angular/core';

import { DataInterfaceService } from '../../../service/data-interface.service';

@Component({
  selector: 'app-create-planing',
  templateUrl: './create-planing.component.html'
})
export class CreatePlaningComponent implements OnInit {
    subjects: any;
    subjectName: string;
    grades: string;
    gradeName: string;
    termStages: any;
    termStageName: string;
    termYears: any;
    termYearName: string;
    terms: any;
    termsName: string;
    versions: any;
    versionName: string;
    suitGrades: any;
    suitGradeName: string;
    chapters: any;
    chaptersGroup = [];

    isSubjectNameShow = false;
    isTermStageShow = false;

    constructor(
        private dataInterfaceService: DataInterfaceService
    ) {}

    getSubjects = () => {
        this.dataInterfaceService.getSubjects().then(subjects => {
            this.subjects = subjects;
            this.subjectName = subjects[0].name;
        });
    }

    getGrades = () => {
        this.dataInterfaceService.getGrades().then(grades => this.grades = grades);
    }

    getTermStages = () => {
        this.dataInterfaceService.getTermStages().then(termStages => {
            this.termStages = termStages;
            this.termStageName = termStages[0].key;
        });
    }

    getTermYears = () => {
        this.dataInterfaceService.getTermYears().then(termYears => {
            this.termYears = termYears;
            this.termYearName = termYears[0].key;
        });
    }

    getTerms = () => {
        this.dataInterfaceService.getTerms().then(terms => {
            this.terms = terms;
            this.termsName = terms[0].key;
        });
    }

    getVersions = () => {
        this.dataInterfaceService.getVersions().then(versions => {
            this.versions = versions;
            this.versionName = versions[0].key;
        });
    }

    getSuitGrades = () => {
        this.dataInterfaceService.getSuitGrades().then(suitGrades => {
            this.suitGrades = suitGrades;
            this.suitGradeName = suitGrades[0].key;
        });
    }

    getChapters = () => {
        this.dataInterfaceService.getChapters().then(chapters => {
            this.chapters = chapters.treeNodes;
            for (let i = 0; i < this.chapters.length; i++) {
                if (this.chapters[i].parentId === 0) {
                    const tmp = [];
                    for (let j = 0; j < this.chapters.length; j++) {
                        if (this.chapters[j].parentId === this.chapters[i].id) {
                            tmp.push(this.chapters[j]);
                            this.chapters[i]['children'] = tmp;
                        }
                    }
                    this.chaptersGroup.push(this.chapters[i]);
                }
            }
            console.log(this.chaptersGroup);
        });
    }

    setActiveClass = (subjectName, gradeName) => {
        this.subjectName = subjectName || null;
        this.gradeName = gradeName || null;
    }

    ngOnInit() {
        this.getSubjects();
        this.getGrades();
        this.getTermStages();
        this.getTermYears();
        this.getTerms();
        this.getVersions();
        this.getSuitGrades();
        this.getChapters();
    }
}
