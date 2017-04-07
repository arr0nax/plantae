import { Pipe, PipeTransform } from '@angular/core';
import { Plant } from './plant'

@Pipe({
  name: 'type',
  pure: false
})
export class TypePipe implements PipeTransform {

  transform(input: Plant[], type) {
    var output: Plant[] = [];
    if (input) {
      if(type === 'succulent') {
        for (var i=0; i<input.length; i++) {
          if(input[i].type === 'succulent') {
            output.push(input[i]);
          }
        }
        return output;
      } else if(type === 'cactus') {
        for (var i=0; i<input.length; i++) {
          if(input[i].type === 'cactus') {
            output.push(input[i]);
          }
        }
        return output;
      } else if (type === 'moss') {
        for (var i=0; i<input.length; i++) {
          if(input[i].type === 'moss') {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }
  }

}
