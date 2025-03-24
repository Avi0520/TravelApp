import { Component, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements AfterViewInit {
  
  @ViewChild('metricsContainer', { static: false }) metricsContainer!: ElementRef;
  counts = [
    { label: 'Happy Customers', target: 22650, value: 0 },
    { label: 'Total Rides', target: 2500, value: 0 },
    { label: 'Available Cabs', target: 52, value: 0 },
    { label: 'Years of Experience', target: 18, value: 0 }
  ];
  
  private hasAnimated = false;

  constructor() {}

  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    if (!this.hasAnimated && this.isElementInViewport(this.metricsContainer.nativeElement)) {
      this.startCounting();
      this.hasAnimated = true;
    }
  }

  private isElementInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  private startCounting() {
    this.counts.forEach((count, index) => {
      let current = 0;
      const step = Math.ceil(count.target / 100); 
      const interval = setInterval(() => {
        current += step;
        if (current >= count.target) {
          current = count.target;
          clearInterval(interval);
        }
        this.counts[index].value = current; 
      }, 20);
    });
  }
}