import { Routes } from '@angular/router';
import { LayoutComponent } from './cliente/layout/layout.component';
import { VisitorsComponent } from './cliente/visitors/visitors.component';
import { BillsComponent } from './cliente/bills/bills.component';
import { ParcelsComponent } from './cliente/parcels/parcels.component';
import { ServicesComponent } from './cliente/services/services.component';

export const routes: Routes = [

    {
        path: "", component: LayoutComponent, children: [
          {path: "visitors", component: VisitorsComponent },
          {path:"bills", component: BillsComponent},
          {path: "parcels", component: ParcelsComponent },
          {path: "services", component: ServicesComponent },
        ]
      }

];
