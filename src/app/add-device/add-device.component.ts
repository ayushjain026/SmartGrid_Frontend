import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '../device';
import { DeviceService } from '../device.service';
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit 
{

  device: Device = new Device();

  constructor(private deviceService: DeviceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addDevice(){
    console.log(this.device);
    this.deviceService.addDevice(this.device).subscribe();
    this.router.navigate(['add-device'])  

}
}
