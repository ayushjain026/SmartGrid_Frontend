import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDeviceComponent } from './add-device/add-device.component';
import { AdminComponent } from './admin/admin.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateDeviceComponent } from './update-device/update-device.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'user', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'add-device', component: AddDeviceComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  { path: 'update-device', component: UpdateDeviceComponent,canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'device-list', component: DeviceListComponent,canActivate:[AuthGuard], data:{roles:['Admin']} },
  // {path:'add-device',redirectTo:'device-list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
