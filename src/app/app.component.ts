import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ServicesComponent } from "./services/services.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from './gallery/gallery.component';
import { CabBookingTableComponent } from './cab-booking-table/cab-booking-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, AboutUsComponent, ServicesComponent, FooterComponent, HomeComponent, ContactComponent, GalleryComponent,FooterComponent, CabBookingTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TravelApp';
}
