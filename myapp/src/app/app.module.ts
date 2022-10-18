import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatematerialComponent } from './components/creatematerial/creatematerial.component';
import { ListmaterialComponent } from './components/listmaterial/listmaterial.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CountmaterialComponent } from './components/countmaterial/countmaterial.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatSliderModule}from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import{MatListModule} from '@angular/material/list';
import{MatIconModule} from '@angular/material/icon';
import{MatMenuModule}from '@angular/material/menu';
import{MatToolbarModule}from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConnecterComponent } from './components/connecter/connecter.component';
import { AuthGuard } from './auth.guard';
// import {NgxCaptchaModule} from 'ngx-captcha';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '../environments/environment';
import { AboutComponent } from './components/about/about.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
@NgModule({
  declarations: [
    AppComponent,
    CreatematerialComponent,
    ListmaterialComponent,
    CountmaterialComponent,
    SideNavComponent,
    HomeComponent,
    ContactComponent,
    ConnecterComponent,
    AboutComponent,
    NotfoundpageComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatSliderModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    // NgxCaptchaModule,
    RecaptchaFormsModule,
    RecaptchaModule,
  
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: environment.recaptcha.siteKey,
    } as RecaptchaSettings,
  },AuthGuard],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
