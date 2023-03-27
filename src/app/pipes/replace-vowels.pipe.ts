import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceVowels',
})
export class ReplaceVowelsPipe implements PipeTransform {
  replacerObject: Record<string, string> = {
    e: '3',
    o: '0',
    i: '1',
    a: '4',
    u: '7',
    A: '%',
    E: '#',
    I: '$',
    O: '&',
    U: '?',
  };

  transform(value: string): string {
    return (
      value
        .split('')
        .map((character: string) => this.replacerObject[character] ?? character) // Possibly best way
        // .map((character: string) =>              // Another way
        //   character in this.replacerObject       // of evaluate
        //     ? this.replacerObject[character]     // and replace
        //     : character                          // vowels
        // )
        .join('')
    );
  }
}
