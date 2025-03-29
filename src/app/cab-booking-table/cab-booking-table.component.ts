import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Vehicle {
  type: string;
  capacity: string;
  rates: string;
  perDayRate: string;
  driverDA: string;
  tollParking: string;
}

@Component({
  selector: 'app-cab-booking-table',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './cab-booking-table.component.html',
  styleUrls: ['./cab-booking-table.component.css']
})
export class CabBookingTableComponent {
  vehicles: Vehicle[] = [
    {
      type: 'Dzire, Etios, Xcent',
      capacity: '4+1',
      rates: '₹3600',
      perDayRate: '₹12 per km',
      driverDA: '₹200',
      tollParking: 'Excluding'
    },
    {
      type: 'Ertiga',
      capacity: '6+1',
      rates: '₹4200',
      perDayRate: '₹14 per km',
      driverDA: '₹200',
      tollParking: 'Excluding'
    },
    {
      type: 'Kia Carens',
      capacity: '6+1',
      rates: '₹4500',
      perDayRate: '₹15 per km',
      driverDA: '₹200',
      tollParking: 'Excluding'
    },
    {
      type: 'Tourist Special Innova',
      capacity: '6+1',
      rates: '₹5100',
      perDayRate: '₹17 per km',
      driverDA: '₹200',
      tollParking: 'Excluding'
    },
    {
      type: 'Innova Crystal',
      capacity: '6+1',
      rates: '₹5700',
      perDayRate: '₹19 per km',
      driverDA: '₹200',
      tollParking: 'Excluding'
    },
    {
      type: 'Tempo Traveller',
      capacity: '13 Seater',
      rates: 'On Call',
      perDayRate: 'Non A/C-25, A/C-30',
      driverDA: '₹500',
      tollParking: 'Excluding'
    },
    {
      type: 'Tempo Traveller',
      capacity: '17 Seater',
      rates: 'On Call',
      perDayRate: 'Non A/C-25, A/C-30',
      driverDA: '₹500',
      tollParking: 'Excluding'
    },
    {
      type: 'Mini Bus',
      capacity: '20, 28, 32, 50 Seater',
      rates: 'On Call',
      perDayRate: 'On Call',
      driverDA: '₹500',
      tollParking: 'Excluding'
    }
  ];

  initiateWhatsAppBooking(vehicleType: string) {
    const phone = '919356717379'; // Your number without +
    const message = `Hello! I would like to book ${vehicleType} for my journey. ` +
                 `Please let me know available dates and pricing details.`;
    
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const desktopUrl = `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    const mobileUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    const appUrl = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`;
    
    if (isMobile) {
      // Open WhatsApp on mobile devices
      window.open(mobileUrl, '_blank');
    } else {
      // Try to open WhatsApp Desktop App first
      window.location.href = appUrl;
      
      // If WhatsApp app isn't installed, fallback to web after 1.5 seconds
      setTimeout(() => {
        window.open(desktopUrl, '_blank');
      }, 1500);
    }
  }

}