import { AbstractControl, ValidationErrors } from '@angular/forms';

export class DateValidators {
  constructor() {}

  static past(control: AbstractControl): ValidationErrors | null {
    let date: Date = control.value;

    if (new Date() > date) return null;

    return { pastDate: date };
  }
}
