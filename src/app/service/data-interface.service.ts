import { Injectable, OnInit } from '@angular/core';
import { HttpModule, Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataInterfaceService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    homeworkInfoShared: any;
    currentReplyAnswer: any;

    paths = {
        workPath: '/assets/json/homeworkInfo.json', // 作业列表接口
        subjectPath: '/assets/json/subjects.json', // 学科接口
        gradePath: '/assets/json/grades.json', // 年级接口
        classesPath: '/assets/json/classes.json', // 班级接口
        termStagePath: '/assets/json/termStages.json', // 学段接口
        termYearsPath: '/assets/json/termYears.json', // 学年接口
        termsPath: '/assets/json/terms.json', // 学期接口
        versionsPath: '/assets/json/versions.json', // 教材接口
        suitGradesPath: '/assets/json/suitGrades.json', // 适用年级接口
        chaptersPath: '/assets/json/chapters.json', // 章节目录接口
        planListsPath: '/assets/json/planLists.json', // 教学计划列表接口
        programPath: '/assets/json/program.json', // 教案列表接口
        guideProgramPath: '/assets/json/guideProgram.json', // 导学案列表接口
        teachOnlinePath: '/assets/json/teachOnline.json', // 线上教学列表接口
        answerListPath: '/assets/json/answerList.json', // 答疑列表接口
        myClassAnswerListPath: '/assets/json/myClassAnswerList.json', // 我班答疑列表接口
        myAskListPath: '/assets/json/myAskList.json', // 我的提问列表接口
        myReplyListPath: '/assets/json/myReplyList.json', // 我的回答列表接口
        waitMeListPath: '/assets/json/waitMeList.json', // 等我回答列表接口
        myCollectionListPath: '/assets/json/myCollectionList.json', // 我收藏的回答列表接口
        examGradesPath: '/assets/json/examGrades.json', // 考试年级接口
        examinationPath: '/assets/json/examination.json', // 考试列表接口
        examTypesPath: '/assets/json/examTypes.json', // 考试类型接口
        roomsListPath: '/assets/json/roomsList.json', // 考场列表接口
        examNamesPath: '/assets/json/examNames.json', // 考试名称接口
        roomNumbersPath: '/assets/json/roomNumbers.json', // 考场序号接口
    };

    optionArrayList = {
        workOption: {
            pageSize: 10,
            pageNo: 1,
            iscomplete: -1,
            condsition: 'wsj'
        }
    };

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) {}

    getHomeworkInfos(): Promise<any> {
        return this.http
            .get(this.paths.workPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getSubjects(): Promise<any> {
        return this.http
            .get(this.paths.subjectPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getGrades(): Promise<any> {
        return this.http
            .get(this.paths.gradePath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getClasses(): Promise<any> {
        return this.http
            .get(this.paths.classesPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getTermStages(): Promise<any> {
        return this.http
            .get(this.paths.termStagePath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getTermYears(): Promise<any> {
        return this.http
            .get(this.paths.termYearsPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getTerms(): Promise<any> {
        return this.http
            .get(this.paths.termsPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getVersions(): Promise<any> {
        return this.http
            .get(this.paths.versionsPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getSuitGrades(): Promise<any> {
        return this.http
            .get(this.paths.suitGradesPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getPlanLists(): Promise<any> {
        return this.http
            .get(this.paths.planListsPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getChapters(): Promise<any> {
        return this.http
            .get(this.paths.chaptersPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getProgram(): Promise<any> {
        return this.http
            .get(this.paths.programPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getGuideProgram(): Promise<any> {
        return this.http
            .get(this.paths.guideProgramPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getTeachOnline(): Promise<any> {
        return this.http
            .get(this.paths.teachOnlinePath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getAnswerList(): Promise<any> {
        return this.http
            .get(this.paths.answerListPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getMyClassAnswerList(): Promise<any> {
        return this.http
            .get(this.paths.myClassAnswerListPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getMyAskList(): Promise<any> {
        return this.http
            .get(this.paths.myAskListPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getMyReplyList(): Promise<any> {
        return this.http
            .get(this.paths.myReplyListPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getWaitMeList(): Promise<any> {
        return this.http
            .get(this.paths.waitMeListPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getMyCollectionList(): Promise<any> {
        return this.http
            .get(this.paths.myCollectionListPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getExamGrades(): Promise<any> {
        return this.http
            .get(this.paths.examGradesPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getExamination(): Promise<any> {
        return this.http
            .get(this.paths.examinationPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getRoomsList(): Promise<any> {
        return this.http
            .get(this.paths.roomsListPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getExamNames(): Promise<any> {
        return this.http
            .get(this.paths.examNamesPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getRoomNumbers(): Promise<any> {
        return this.http
            .get(this.paths.roomNumbersPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getExamTypes(): Promise<any> {
        return this.http
            .get(this.paths.examTypesPath)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }
}
