import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { WhyChooseUsComponent } from './home/why-choose-us/why-choose-us.component';
import { AboutComponent } from './home/about/about.component';
import { BlogComponent } from './home/blog/blog.component';
import { FaqComponent } from './footer/faq/faq.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { TermsComponent } from './footer/terms/terms.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DisclaimerComponent } from './footer/disclaimer/disclaimer.component';
import { HoroscopeComponent } from './services/horoscope/horoscope.component';
import { BirthChartComponent } from './services/birth-chart/birth-chart.component';
import { CompatibilityComponent } from './services/compatibility/compatibility.component';
import { ResourcesComponent } from './services/resources/resources.component';

const routes: Routes = [
   // {path:'',component:},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'contact-us',component:ContactUsComponent},
  
  {path:'about',component:AboutComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'why-choose-us',component:WhyChooseUsComponent},
  {path:'blog',component:BlogComponent},

  {path:'about-us',component:AboutUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'contact-us',component:ContactUsComponent},
 
  {path:'faq',component:FaqComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'terms',component:TermsComponent},
  {path:'disclaimer',component:DisclaimerComponent},

  {path:'horoscope',component: HoroscopeComponent},
  {path:'birth-chart',component:BirthChartComponent},
  {path:'compatibility',component:CompatibilityComponent},
  {path:'resources',component:ResourcesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
