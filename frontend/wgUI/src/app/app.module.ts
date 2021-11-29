import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { SkillComponent } from './components/skill/skill.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './components/shared/grid/grid.component';
import { CenterCardComponent } from './components/shared/center-card/center-card.component';
import { AddSkillFormComponent } from './components/shared/add-skill-form/add-skill-form.component';

//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SkillComponent,
    GridComponent,
    CenterCardComponent,
    AddSkillFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
