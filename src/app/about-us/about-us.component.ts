import { Component, ElementRef, AfterViewInit, ViewChild, HostListener, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  @ViewChild('metricsContainer') metricsContainer!: ElementRef<HTMLElement>;
  
  counts = [
    { label: 'Happy Customers', target: 22650, value: 0 },
    { label: 'Total Rides', target: 2500, value: 0 },
    { label: 'Available Cabs', target: 52, value: 0 },
    { label: 'Years of Experience', target: 18, value: 0 }
  ];
  
  private hasAnimated = false;
  private animationFrameId: number | null = null;
  private intervals: number[] = [];

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    
    // Double check after a small delay to ensure element is available
    setTimeout(() => this.checkScroll(), 100);
  }

  ngOnDestroy() {
    if (!this.isBrowser) return;
    
    this.intervals.forEach(id => cancelAnimationFrame(id));
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!this.isBrowser || this.hasAnimated) return;
    this.animationFrameId = requestAnimationFrame(() => this.checkScroll());
  }

  private checkScroll() {
    if (!this.metricsContainer?.nativeElement) {
      console.warn('Metrics container not found');
      return;
    }

    const element = this.metricsContainer.nativeElement;
    if (this.isElementInViewport(element)) {
      this.startCounting();
      this.hasAnimated = true;
    }
  }

  private isElementInViewport(element: HTMLElement): boolean {
    try {
      const rect = element.getBoundingClientRect();
      const buffer = 100; // pixels buffer
      return (
        rect.top <= (window.innerHeight - buffer) &&
        rect.bottom >= buffer
      );
    } catch (error) {
      console.error('Error checking viewport:', error);
      return false;
    }
  }

  private startCounting() {
    const duration = 2000; // 2 seconds for all counters
    const startTime = performance.now();

    this.counts.forEach((count, index) => {
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        this.counts[index].value = Math.floor(progress * count.target);
        
        if (progress < 1) {
          this.intervals[index] = requestAnimationFrame(animate) as unknown as number;
        } else {
          this.counts[index].value = count.target; // Ensure final value is exact
        }
      };
      
      this.intervals[index] = requestAnimationFrame(animate) as unknown as number;
    });
  }
}