import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from './device';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {


  baseURL = "http://localhost:9595/devices";
  id?: number;
  constructor(private httpClient: HttpClient) { }

  //get all devices
  //http://localhost:8080/api/v1/devices
  getAllDevice(): Observable<Device[]>{
    return this.httpClient.get<Device[]>(`${this.baseURL}`);
  }

  //add new device
  addDevice(device?: Device): Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseURL}`,device);
  }

  getId(getId?: number){
    this.id = getId;

  }

  // get device by id
  getDeviceById(id?: number): Observable<Object>{
    return this.httpClient.get<Object>(`${this.baseURL}/${this.id}`);
  }

  // Update device by id
  updateDeviceById(device?: Device): Observable<Object>{
    return this.httpClient.put<Object>(`${this.baseURL}/${this.id}`,device);
  }

   // Delete device by id
   deleteDeviceById(id?: number): Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${id}`);
  }


}

