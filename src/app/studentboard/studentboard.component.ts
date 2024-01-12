import { Component } from '@angular/core';
import { PincodeService } from '../pincode.service';
import { IndianpostalService } from '../service/indianpostal.service';

@Component({
  selector: 'app-studentboard',
  templateUrl: './studentboard.component.html',
  styleUrls: ['./studentboard.component.css']
})
export class StudentboardComponent {

  constructor(private service: IndianpostalService) { }
  values: any;
  responseData: any;


  fetchDataOnInput(data: any) {
    this.service.getData(data).subscribe((res) => {
      this.values = data;
      this.responseData = res
    },
      (error) => {
        console.error('Error fetching data:', error);
      })

  }

  jsonResponse = {
    "Message": "No records found",
    "Status": "Error",
    "PostOffice": null
  };

  inputField:any;
  ngOnInit() {
    // Method to check conditions and blank out the input fields
    if (this.values=='') {
      this.inputField = '';
    }
  }

}
