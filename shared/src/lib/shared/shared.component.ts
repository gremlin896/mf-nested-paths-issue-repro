import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'acme-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
})
export class SharedComponent {}
