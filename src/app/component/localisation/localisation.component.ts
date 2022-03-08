import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css'],
  template: `
    <input
      class="input"
      type="text"
      [(ngModel)]="autocompleteInput"
      #addresstext
      style="padding: 12px 20px; border: 1px solid #ccc; width: 400px"
    />
  `,
})
export class LocalisationComponent implements OnInit, AfterViewInit {
  @Input() adressType: string = '';
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addresstext') addresstext: any;

  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }
  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(
      this.addresstext.nativeElement,
      {
        componentRestrictions: { country: 'US' },
        types: [this.adressType], // 'establishment' / 'address' / 'geocode'
      }
    );
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.invokeEvent(place);
    });
  }
  invokeEvent(place: Object) {
    this.setAddress.emit(place);
  }
}
