import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFilterTerm'
})
export class PipeFilterTermPipe implements PipeTransform {

  transform(items: string[], searchTerm: string = ''): string[] {
    return items.filter((item) => item.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()
    ));
  }

}
