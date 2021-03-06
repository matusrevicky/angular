import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BicycleComponent } from './bicycle/bicycle.component';
import { BicycleCategoryComponent } from './bicycle-category/bicycle-category.component';
import { ModalComponent } from './modal/modal.component';
import { AgentComponent } from './agent/agent.component';
import { AgentModalComponent } from './agent-modal/agent-modal.component';
import { BicycleArchivedComponent } from './bicycle-archived/bicycle-archived.component';
import { NotificationComponent } from './notification/notification.component';
import { LogComponent } from './log/log.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsModalComponent } from './settings-modal/settings-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    BicycleComponent,
    BicycleCategoryComponent,
    ModalComponent,
    AgentComponent,
    AgentModalComponent,
    BicycleArchivedComponent,
    NotificationComponent,
    LogComponent,
    SettingsComponent,
    SettingsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot(),
    
  ],
  providers: [NgxSmartModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
