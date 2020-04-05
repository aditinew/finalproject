import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { AllgalleryComponent } from './allgallery/allgallery.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { SocialComponent } from './social/social.component';
import { WeddingComponent } from './wedding/wedding.component';
import { CorporateComponent } from './corporate/corporate.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'event', component:EventComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'order', component:OrderPageComponent},
  {path:'allgallery', component:AllgalleryComponent},
  {path:'birthday', component:BirthdayComponent},
  {path:'social', component:SocialComponent},
  {path:'wedding', component:WeddingComponent},
  {path:'corporate', component:CorporateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
