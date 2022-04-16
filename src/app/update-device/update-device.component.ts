import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '../device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit {

  device: Device = new Device();
  constructor(private router: Router,private deviService: DeviceService) { }

  ngOnInit(): void {
    this.getDeviceById();
  }

  // updateDevice(){
  //   console.log(this.device);
  //   this.router.navigate(['update-device',1]);
  // } 

  getDeviceById(){
    this.deviService.getDeviceById().subscribe(data=>{
      this.device = data;
    });
  }
  updateDevice(id?: number){
    console.log(this.device);
    this.deviService.updateDeviceById(this.device).subscribe();
    this.router.navigate(['devices']);
  }

}
