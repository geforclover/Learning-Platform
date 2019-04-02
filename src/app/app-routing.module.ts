import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { LoginSuccessComponent } from './component/login-success/login-success.component';

import { WorkCenterView } from './views/homeworkCenter-mainView.views';
import { PreparCenterView } from './views/preparCenter-mainView.views';
import { TeachCenterView } from './views/teachCenter-mainView.views';
import { AnswerCenterView } from './views/answerCenter-mainView.views';
import { QuestionCenterView } from './views/questionCenter-mainView.views';
import { ExamCenterView } from './views/examCenter-mainView.views';
import { MoreExciting } from './views/moreExciting.views';

import { WorkCreateComponent } from './component/homeworkCenter/work-create/work-create.component';
import { WorkExpectationComponent } from './component/homeworkCenter/work-expectation/work-expectation.component';
import { WorkTableViewComponent } from './component/homeworkCenter/work-table-view/work-table-view.component';

import { CreatePlaningComponent } from './component/preparCenter/create-planing/create-planing.component';
import { CreateProgramComponent } from './component/preparCenter/create-program/create-program.component';
import { PreparPlaningComponent } from './component/preparCenter/prepar-planing/prepar-planing.component';
import { PreparTableViewComponent } from './component/preparCenter/prepar-table-view/prepar-table-view.component';

import { TeachOnlineComponent } from './component/teachCenter/teach-online/teach-online.component';
import { TeachTableViewComponent } from './component/teachCenter/teach-table-view/teach-table-view.component';

import { AnswerCompleteComponent } from './component/answerCenter/answer-complete/answer-complete.component';
import { AnswerTableViewComponent } from './component/answerCenter/answer-table-view/answer-table-view.component';
import { AnswerReplyComponent } from './component/answerCenter/answer-reply/answer-reply.component';
import { AnswerMyAskComponent } from './component/answerCenter/answer-my-ask/answer-my-ask.component';
import { AnswerMyReplyComponent } from './component/answerCenter/answer-my-reply/answer-my-reply.component';
import { AnswerMyCollectionComponent } from './component/answerCenter/answer-my-collection/answer-my-collection.component';
import { AnswerWillAskComponent } from './component/answerCenter/answer-will-ask/answer-will-ask.component';

import { QuestionTableViewComponent } from './component/questionCenter/question-table-view/question-table-view.component';

import { ExamTableViewComponent } from './component/examCenter/exam-table-view/exam-table-view.component';
import { ExamCreateComponent } from './component/examCenter/exam-create/exam-create.component';
import { ExamRoomsArrangeComponent } from './component/examCenter/exam-rooms-arrange/exam-rooms-arrange.component';
import { ExamTestpaperComponent } from './component/examCenter/exam-testpaper/exam-testpaper.component';

// homeworkCenterChildren
const workCenterRoutes: Routes = [
    { path: 'work-create', component: WorkCreateComponent },
    { path: 'work-expectation', component: WorkTableViewComponent },
    { path: 'work-corrected', component: WorkTableViewComponent },
    { path: 'work-unPublish', component: WorkTableViewComponent }
];

// preparCenterChildren
const preparProgramRoutes: Routes = [
    { path: 'create-program', component: CreateProgramComponent }
];
const preparGuidanceRoutes: Routes = [
    { path: 'create-program', component: CreateProgramComponent }
];
const preparCenterRoutes: Routes = [
    { path: 'create-planing', component: CreatePlaningComponent },
    { path: 'prepar-planing', component: PreparPlaningComponent },
    {
        path: 'prepar-program',
        component: PreparTableViewComponent,
        children: preparProgramRoutes
    },
    {
        path: 'prepar-guidance',
        component: PreparTableViewComponent,
        children: preparGuidanceRoutes
    }
];

// teachCenterChildren
const teachCenterRoutes: Routes = [
    { path: 'teach-online', component: TeachTableViewComponent },
    { path: 'teach-offline', component: TeachTableViewComponent }
];

// answerCenterChildren
const answerCenterRoutes: Routes = [
    { path: 'answer-complete', component: AnswerTableViewComponent },
    { path: 'answer-reply', component: AnswerReplyComponent },
    { path: 'answer-myClass', component: AnswerTableViewComponent },
    { path: 'answer-myAsk', component: AnswerTableViewComponent },
    { path: 'answer-willAsk', component: AnswerWillAskComponent },
    { path: 'answer-myReply', component: AnswerTableViewComponent },
    { path: 'answer-waitMe', component: AnswerTableViewComponent },
    { path: 'answer-myCollection', component: AnswerTableViewComponent }
];

// questionCenterChildren
const questionCenterRoutes: Routes = [
    { path: 'question-warehouse', component: QuestionTableViewComponent }
];

// examRoomsChildren
const examRoomsRoutes: Routes = [
    { path: 'exam-rooms-arrange', component: ExamRoomsArrangeComponent}
];

// examCenterChildren
const examCenterRoutes: Routes = [
    { path: 'exam-examination', component: ExamTableViewComponent },
    { path: 'exam-create', component: ExamCreateComponent},
    { path: 'exam-rooms', component: ExamTableViewComponent, children: examRoomsRoutes },
    { path: 'exam-testspaper', component: ExamTestpaperComponent}
];

const routes: Routes = [
    {
        path: 'homeworkCenter',
        component: WorkCenterView,
        children: workCenterRoutes
    },
    {
        path: 'preparCenter',
        component: PreparCenterView,
        children: preparCenterRoutes
    },
    {
        path: 'teachCenter',
        component: TeachCenterView,
        children: teachCenterRoutes
    },
    {
        path: 'answerCenter',
        component: AnswerCenterView,
        children: answerCenterRoutes
    },
    {
        path: 'questionCenter',
        component: QuestionCenterView,
        children: questionCenterRoutes
    },
    {
        path: 'examCenter',
        component: ExamCenterView,
        children: examCenterRoutes
    },
    { path: 'moreExciting', component: MoreExciting },
    { path: 'login', component: LoginComponent },
    { path: 'login-success', component: LoginSuccessComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
