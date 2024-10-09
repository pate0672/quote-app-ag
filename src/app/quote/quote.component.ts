import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  standalone: true
})

export class QuoteComponent {
  quotes: string[] = [
    'Believe you can and you’re halfway there.',
    'Your time is limited, don’t waste it living someone else’s life.',
    'The only way to do great work is to love what you do.',
    'If you want to achieve greatness, stop asking for permission.',
    'Don’t let yesterday take up too much of today.'
  ];

  randomQuote: string = this.getRandomQuote();

  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }

  generateNewQuote() {
    this.randomQuote = this.getRandomQuote();
  }
}
