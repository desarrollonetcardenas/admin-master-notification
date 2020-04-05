import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ContentHeaderComponent } from './layout/content-header/content-header.component';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';
import { Dashboardv1Component } from './components/dashboardv1/dashboardv1.component';
import { LoginComponent } from './login/login.component';
import { NuevaNotificacionComponent } from './notification/nueva-notificacion/nueva-notificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    ContentHeaderComponent,
    RightSidebarComponent,
    Dashboardv1Component,
    LoginComponent,
    NuevaNotificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
