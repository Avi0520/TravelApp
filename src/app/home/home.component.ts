import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  scrollToContact(): void {
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.warn("Contact section not found!");
      }
    }, 100); // Small delay to ensure the DOM is ready
  }

}
