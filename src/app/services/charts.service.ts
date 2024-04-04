import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  getHoroscopeChart(data: any) {
    const apiUrl = '  horoscope-chart-url';
    const apiKey = 'LhNIXILehBvVAZ9ZIQvD3zlUzMx3Nwh8atVkgMQ7';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    });

    // Return the HTTP POST request
    return this.http.post(apiUrl, data, { headers });
  }
}
