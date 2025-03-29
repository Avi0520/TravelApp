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
    const message = `Book ${vehicleType} for Shirdi trip`;
    
    // Solution that works EVERYWHERE
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Mobile devices
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    } else {
      // Desktop - THIS WILL WORK FOR WHATSAPP DESKTOP APP
      const desktopUrl = `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
      
      // First try to open the app directly
      window.location.href = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`;
      
      // If WhatsApp desktop app isn't installed, fallback to web after 2 seconds
      setTimeout(() => {
        window.open(desktopUrl, '_blank');
      }, 2000);
    }
  }
}