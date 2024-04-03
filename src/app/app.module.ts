import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './home/blog/blog.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AboutComponent } from './home/about/about.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { WhyChooseUsComponent } from './home/why-choose-us/why-choose-us.component';
import { FaqComponent } from './footer/faq/faq.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { TermsComponent } from './footer/terms/terms.component';
import { DisclaimerComponent } from './footer/disclaimer/disclaimer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { HoroscopeComponent } from './services/horoscope/horoscope.component';
import { BirthChartComponent } from './services/birth-chart/birth-chart.component';
import { CompatibilityComponent } from './services/compatibility/compatibility.component';
import { ResourcesComponent } from './services/resources/resources.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    BlogComponent,
    AppointmentComponent,
    AboutComponent,
    TestimonialsComponent,
    WhyChooseUsComponent,
    FaqComponent,
    PrivacyPolicyComponent,
    TermsComponent,
    DisclaimerComponent,
    ContactUsComponent,
    ServicesComponent,
    HoroscopeComponent,
    BirthChartComponent,
    CompatibilityComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
