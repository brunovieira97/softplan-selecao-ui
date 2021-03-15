import { Pipe, PipeTransform } from '@angular/core';

interface ErrorMessages {
  [key: string]: any;
}

const errors: ErrorMessages = {
  pastDate: (value: any) => 'A data deve ser igual ou anterior à atual',
  email: () => 'E-mail inválido',
  invalidCpf: () => 'CPF inválido',
  minlength: (value: any) => `O tamanho mínimo é ${value.requiredLength}`,
  maxlength: (value: any) => `O tamanho máximo é ${value.requiredLength}`,
  required: () => 'Precisa ser informado',
  max: (value: any) => `O valor máximo é ${value.max}`,
};

@Pipe({
  name: 'inputError',
})
export class InputErrorPipe implements PipeTransform {
  transform(value: any): string | null {
    if (!value) {
      return null;
    }

    const keys = Object.keys(value);

    for (const key of keys) {
      if (errors[key]) {
        return errors[key](value[key]);
      }
    }

    return null;
  }
}
