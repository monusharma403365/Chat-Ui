import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { WritepanelComponent } from './layout/writepanel/writepanel.component';
import { HeaderComponent } from './outerPage/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './outerPage/footer/footer.component';
import { MainComponent } from './outerPage/main/main.component';
import { AsideComponent } from './outerPage/aside/aside.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMemberComponent } from './outerPage/add-member/add-member.component';
import { IndexComponent } from './outerPage/index/index.component';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    WritepanelComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AsideComponent,
    AddMemberComponent,
    IndexComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 