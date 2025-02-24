export function add(numbersStr) {
    if (numbersStr === '') return 0

    if (numbersStr.includes(',\n')) {
        throw new Error('Invalid input');
    }

    var delimiter = ','
    if (numbersStr.startsWith('//')) {
        [delimiter, numbersStr] = numbersStr.slice(2).split('\n');
    }

    var numbers;
    if (delimiter.startsWith('[') && delimiter.endsWith(']')) {
        delimiter = delimiter.slice(1, -1).split('][').map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
        numbers = numbersStr.split(new RegExp(`(${delimiter})|\n`)).map(Number);
    } else {
        delimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        numbers = numbersStr.split(new RegExp(`[${delimiter}\n]`)).map(Number);
    }
    
    var negatives = numbers.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`Negatives not allowed. ${negatives.join(' ')}`);
    }
    numbers = numbers.filter(n => n <= 1000);

    return numbers.reduce((a, b) => a + b);

  }
