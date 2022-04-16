import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '../device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  device?: Device[];

  constructor(private deviceService: DeviceService,
    private router: Router) { }

  ngOnInit(): void {
  //   this.device=[
  //     {
  //       id:1,
  //     deviceName:" Abc",
  //     status: "Off"
  //   },
  //   {
  //     id:2,
  //     deviceName:" Abcd",
  //     status: "Off"
  //   },
  //   {
  //     id:3,
  //     deviceName:" Abcde",
  //     status: "On"
  //   },
  // ];
  this.getAllDevices();
  }

  getAllDevices(){
    this.deviceService.getAllDevice().subscribe(data=>{
      this.device=data;
    });
  }

  updateDeviceRecords(id?: number){
    console.log("id = ",id);
    this.deviceService.getId(id);
    this.router.navigate(['update-device']);
  }

  deleteDeviceRecords(id?: number){
   this.deviceService.deleteDeviceById(id).subscribe();
    this.router.navigate(['devices']);
     // this.deviceService.getId(id);
      location.reload();

  }
}
