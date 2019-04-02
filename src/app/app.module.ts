import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Service
import { TableViewService } from './service/table-view.service';
import { DataInterfaceService } from './service/data-interface.service';

// Views
import { WorkCenterView } from './views/homeworkCenter-mainView.views';
import { PreparCenterView } from './views/preparCenter-mainView.views';
import { TeachCenterView } from './views/teachCenter-mainView.views';
import { AnswerCenterView } from './views/answerCenter-mainView.views';
import { QuestionCenterView } from './views/questionCenter-mainView.views';
import { ExamCenterView } from './views/examCenter-mainView.views';
import { MoreExciting } from './views/moreExciting.views';

// Directives
import { TableViewCloseDirective } from './directive/table-view-close.directive';
import { ColWidthDirective } from './directive/col-width.directive';
import { BackColorDirective } from './directive/back-color.directive';
import { PaddingBoxDirective } from './directive/padding-box.directive';
import { MarginBoxDirective } from './directive/margin-box.directive';

// Pipe

// Components
import { AppComponent } from './app.component';
import { PageMarkComponent } from './component/page-mark/page-mark.component';
import { FootBarComponent } from './component/foot-bar/foot-bar.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { MainViewComponent } from './component/main-view/main-view.component';
import { LoginComponent } from './component/login/login.component';
import { LoginSuccessComponent } from './component/login-success/login-success.component';
import { TinyEditorComponent } from './component/tiny-editor/tiny-editor.component';
// Components-homeworkCenter
import { WorkCreateComponent } from './component/homeworkCenter/work-create/work-create.component';
import { WorkTableViewComponent } from './component/homeworkCenter/work-table-view/work-table-view.component';
import { WorkExpectationComponent } from './component/homeworkCenter/work-expectation/work-expectation.component';
import { WorkCorrectedComponent } from './component/homeworkCenter/work-corrected/work-corrected.component';
import { WorkUnpublishComponent } from './component/homeworkCenter/work-unpublish/work-unpublish.component';
// Components-preparCenter
import { CreatePlaningComponent } from './component/preparCenter/create-planing/create-planing.component';
import { CreateProgramComponent } from './component/preparCenter/create-program/create-program.component';
import { PreparPlaningComponent } from './component/preparCenter/prepar-planing/prepar-planing.component';
import { PreparProgramComponent } from './component/preparCenter/prepar-program/prepar-program.component';
import { PreparTableViewComponent } from './component/preparCenter/prepar-table-view/prepar-table-view.component';
// Components-teachCenter
import { TeachOnlineComponent } from './component/teachCenter/teach-online/teach-online.component';
import { TeachTableViewComponent } from './component/teachCenter/teach-table-view/teach-table-view.component';
// Components-answerCenter
import { AnswerCompleteComponent } from './component/answerCenter/answer-complete/answer-complete.component';
import { AnswerTableViewComponent } from './component/answerCenter/answer-table-view/answer-table-view.component';
import { AnswerReplyComponent } from './component/answerCenter/answer-reply/answer-reply.component';
import { AnswerMyAskComponent } from './component/answerCenter/answer-my-ask/answer-my-ask.component';
import { AnswerMyReplyComponent } from './component/answerCenter/answer-my-reply/answer-my-reply.component';
import { AnswerMyCollectionComponent } from './component/answerCenter/answer-my-collection/answer-my-collection.component';
import { AnswerWillAskComponent } from './component/answerCenter/answer-will-ask/answer-will-ask.component';
// Components-questionCenter
import { QuestionTableViewComponent } from './component/questionCenter/question-table-view/question-table-view.component';
// Components-examCenter
import { ExamTableViewComponent } from './component/examCenter/exam-table-view/exam-table-view.component';
import { ExamExaminationComponent } from './component/examCenter/exam-examination/exam-examination.component';
import { ExamCreateComponent } from './component/examCenter/exam-create/exam-create.component';
import { ExamRoomsComponent } from './component/examCenter/exam-rooms/exam-rooms.component';
import { ExamRoomsArrangeComponent } from './component/examCenter/exam-rooms-arrange/exam-rooms-arrange.component';
import { ExamTestpaperComponent } from './component/examCenter/exam-testpaper/exam-testpaper.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkCreateComponent,
    FootBarComponent,
    TopBarComponent,
    MainViewComponent,
    LoginComponent,
    WorkCenterView,
    PreparCenterView,
    TeachCenterView,
    AnswerCenterView,
    QuestionCenterView,
    ExamCenterView,
    MoreExciting,
    TableViewCloseDirective,
    WorkTableViewComponent,
    WorkExpectationComponent,
    PageMarkComponent,
    WorkCorrectedComponent,
    WorkUnpublishComponent,
    CreatePlaningComponent,
    LoginSuccessComponent,
    TinyEditorComponent,
    PreparPlaningComponent,
    PreparProgramComponent,
    PreparTableViewComponent,
    CreateProgramComponent,
    TeachOnlineComponent,
    TeachTableViewComponent,
    AnswerCompleteComponent,
    AnswerTableViewComponent,
    ColWidthDirective,
    BackColorDirective,
    PaddingBoxDirective,
    MarginBoxDirective,
    AnswerReplyComponent,
    AnswerMyAskComponent,
    AnswerMyReplyComponent,
    AnswerMyCollectionComponent,
    AnswerWillAskComponent,
    QuestionTableViewComponent,
    ExamTableViewComponent,
    ExamExaminationComponent,
    ExamCreateComponent,
    ExamRoomsComponent,
    ExamRoomsArrangeComponent,
    ExamTestpaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TableViewService,
    DataInterfaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
