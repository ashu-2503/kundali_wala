import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartsService } from '../charts.service';
// import { catchError, throwError } from 'rxjs';



@Component({
  selector: 'app-birth-chart',
  templateUrl: './birth-chart.component.html',
  styleUrls: ['./birth-chart.component.css']
})
export class BirthChartComponent implements OnInit {
  kundaliForm !: FormGroup;
  imageUrl: string | undefined;
  constructor(private formbuilder: FormBuilder, private chartService: ChartsService) {
  }
  ngOnInit(): void {
    this.kundaliForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      gender: [''],
      year: ['', Validators.required],
      month: ['', Validators.required],
      date: ['', Validators.required],
      hours: ['', Validators.required],
      minutes: ['', Validators.required],
      seconds: [''],
      birthplace: ['', Validators.required],
      timezone: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required]
    });
  }

  submit() {    
    if (this.kundaliForm.valid) {
      this.chartService.getHoroscopeChart(this.kundaliForm.value).subscribe(
        (response: any) => {
          this.imageUrl = response.imageUrl;
          console.log('Image URL:', this.imageUrl);
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }
}
