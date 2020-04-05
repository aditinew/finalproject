import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MiddleComponent } from './middle/middle.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { AllgalleryComponent } from './allgallery/allgallery.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { SocialComponent } from './social/social.component';
import { WeddingComponent } from './wedding/wedding.component';
import { CorporateComponent } from './corporate/corporate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    EventComponent,
    PortfolioComponent,
    ContactComponent,
    OrderPageComponent,
    AllgalleryComponent,
    BirthdayComponent,
    SocialComponent,
    WeddingComponent,
    CorporateComponent
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
