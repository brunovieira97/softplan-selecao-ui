import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfMask',
})
export class CpfMaskPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    if (value.length === 11) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }

    return 'error';
  }
}
