import { AbstractControl, ValidationErrors } from '@angular/forms';

export class DocumentoValidators {
  constructor() {}

  static cpf(control: AbstractControl): ValidationErrors | null {
    const errorCode: ValidationErrors = {
      invalidCpf: true,
    };

    let cpf = control.value;

    if (cpf === '') return null;

    let isValid: boolean = true;

    if (cpf.length !== 11) isValid = false;

    if (
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    )
      isValid = false;

    let numbers: { charAt: (arg0: number) => number };
    let digits: string;
    let sum: number;
    let result: number;
    let i: number;

    numbers = cpf.substring(0, 9);
    digits = cpf.substring(9);
    sum = 0;

    for (i = 10; i > 1; i--) {
      sum += numbers.charAt(10 - i) * i;
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    if (result !== Number(digits.charAt(0))) {
      isValid = false;
    }

    numbers = cpf.substring(0, 10);
    sum = 0;

    for (i = 11; i > 1; i--) {
      sum += numbers.charAt(11 - i) * i;
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    if (result !== Number(digits.charAt(1))) {
      isValid = false;
    }

    return isValid ? null : errorCode;
  }
}
