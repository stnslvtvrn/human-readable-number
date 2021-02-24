module.exports = function toReadable(number) {
    let un = number % 10;
    let doz = (number % 100 - un) / 10;
    let hund = (number - doz * 10 - un) / 100;
    let stringUn, stringDoz, stringHund;
    switch (hund) {
        case 1: stringHund = 'one hundred'; break;
        case 2: stringHund = 'two hundred'; break;
        case 3: stringHund = 'three hundred'; break;
        case 4: stringHund = 'four hundred'; break;
        case 5: stringHund = 'five hundred'; break;
        case 6: stringHund = 'six hundred'; break;
        case 7: stringHund = 'seven hundred'; break;
        case 8: stringHund = 'eight hundred'; break;
        case 9: stringHund = 'nine hundred'; break;
        case 0: break;
    }
    if (doz == 1) {
        switch (un) {
            case 1: stringDoz = 'eleven'; break;
            case 2: stringDoz = 'twelve'; break;
            case 3: stringDoz = 'thirteen'; break;
            case 4: stringDoz = 'fourteen'; break;
            case 5: stringDoz = 'fifteen'; break;
            case 6: stringDoz = 'sixteen'; break;
            case 7: stringDoz = 'seventeen'; break;
            case 8: stringDoz = 'eighteen'; break;
            case 9: stringDoz = 'nineteen'; break;
            case 0: stringDoz = 'ten'; break;
        }
    } else if (doz != 1) {
        switch (un) {
            case 1: stringUn = 'one'; break;
            case 2: stringUn = 'two'; break;
            case 3: stringUn = 'three'; break;
            case 4: stringUn = 'four'; break;
            case 5: stringUn = 'five'; break;
            case 6: stringUn = 'six'; break;
            case 7: stringUn = 'seven'; break;
            case 8: stringUn = 'eight'; break;
            case 9: stringUn = 'nine'; break;
            case 0: break;
        }
        switch (doz) {
            case 2: stringDoz = 'twenty'; break;
            case 3: stringDoz = 'thirty'; break;
            case 4: stringDoz = 'forty'; break;
            case 5: stringDoz = 'fifty'; break;
            case 6: stringDoz = 'sixty'; break;
            case 7: stringDoz = 'seventy'; break;
            case 8: stringDoz = 'eighty'; break;
            case 9: stringDoz = 'ninety'; break;
            case 0: break;
        }
    }
    if (hund == 0 && doz == 0 && un == 0) {
        return 'zero';
    }

   return (un == 0 && doz == 0) ? stringHund :
          (hund == 0 && doz == 0) ? stringUn :
          (hund == 0 && un == 0) ? stringDoz :
          (hund == 0 && doz == 1) ? stringDoz :
          (hund == 0) ? stringDoz + ' ' + stringUn :
          (doz == 0) ? stringHund + ' ' + stringUn :
          (doz == 1) ? stringHund + ' ' + stringDoz :
          (un == 0) ? stringHund + ' ' + stringDoz : stringHund + ' ' + stringDoz + ' ' + stringUn;
}
