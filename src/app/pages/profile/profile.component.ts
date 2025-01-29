import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: false
})

export class ProfileComponent {
  employee: any = {};
  savedEmployee: any = {};
  colCountByScreen: object;
  loading = false;
  employeeNotes: string;

  constructor() {
    this.employee = {
      ID: 7,
      FirstName: 'Sandra',
      LastName: 'Johnson',
      Prefix: 'Mrs.',
      Position: 'Controller',
      BirthDate: new Date('1974/11/5'),
      HireDate: new Date('2005/05/11'),
      /* tslint:disable-next-line:max-line-length */
      Notes: 'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.',
      Address: '4600 N Virginia Rd.'
    };
    this.savedEmployee = { ... this.employee };

    let savedEmployee = localStorage.getItem("employee");
    if (savedEmployee) {
      this.savedEmployee = JSON.parse(savedEmployee);
      if (this.savedEmployee.HireDate) {
        this.savedEmployee.HireDate = new Date(this.savedEmployee.HireDate);
      }
      if (this.savedEmployee.BirthDate) {
        this.savedEmployee.BirthDate = new Date(this.savedEmployee.BirthDate);
      }
      this.employee = {...this.savedEmployee};
    }

    this.employeeNotes = this.employee.Notes;
    this.colCountByScreen = {
      xs: 4,
      sm: 4,
      md: 4,
      lg: 4
    };
  }

  async onSaveClick() {
    try {
      this.loading = true;

      if (!this.employee.FirstName) {
        this.showToast('First name is required', 'error');
        return;
      }

      await new Promise(r => setTimeout(r, 1000));

      if (this.employee.FirstName.length > 30 ||
        this.employee.LastName.length > 30 ||
        this.employee.Prefix.length > 30 ||
        this.employee.Position.length > 30 ||
        this.employee.Notes.length > 256
      ) {
        throw new Error('String or binary data would be truncated in table');
      }

      this.showToast("Profile saved", 'success');
      localStorage.setItem("employee", JSON.stringify(this.employee));

    } catch (err) {
      this.showToast("An error occurred", 'error');
      throw err;
    } finally {
      this.loading = false;
    }
  }

  showToast(message: string, type: string) {
    notify({ message: message, width: 300, shading: false }, type, 500);
  }
}
