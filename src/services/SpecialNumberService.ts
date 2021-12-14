import {LifePeak, lifePeakDb} from '../db/lifePeakDB';

function _reCalc(_x: number): number {
  if (_x == 20) return 2;
  if (_x == 22) return _x;
  if (_x < 12) {
    return _x;
  }
  _x = Math.floor(_x / 10) + (_x % 10);
  return _reCalc(_x);
}

function _reCalcBaseNumber(_x: number, max: number): number {
  if (_x <= max) {
    return _x;
  }
  _x = Math.floor(_x / 10) + (_x % 10);
  return _reCalcBaseNumber(_x, max);
}

function _calculateBaseNumber(numberString: string): number {
  let baseNumber = 0;

  for (let index = 0; index < numberString.length; index++) {
    baseNumber += numberString.charCodeAt(index) - 48;
  }

  return _reCalcBaseNumber(baseNumber, 9);
}

function constructLifePeaks(
  dayString: string,
  monthString: string,
  yearString: string,
  rulingNumber: number,
): LifePeak[] {
  let lifePeaks: LifePeak[] = [];
  let baseDay = _calculateBaseNumber(dayString);
  let baseMonth = _calculateBaseNumber(monthString);
  let baseYear = _calculateBaseNumber(yearString);

  const lp1 = _reCalcBaseNumber(baseDay + baseMonth, 9),
    lp2 = _reCalcBaseNumber(baseDay + baseYear, 9),
    lp3 = _reCalcBaseNumber(lp1 + lp2, 11),
    lp4 = _reCalcBaseNumber(baseYear + baseMonth, 11);

  let ageIncreasing = 36 - rulingNumber;
  lifePeaks.push(
    new LifePeak({
      number: lp1,
      age: ageIncreasing,
      descriptions: lifePeakDb.find(lp => lp.number == lp1)?.descriptions,
    }),
  );

  ageIncreasing += 9;
  lifePeaks.push(
    new LifePeak({
      number: lp2,
      age: ageIncreasing,
      descriptions: lifePeakDb.find(lp => lp.number == lp2)?.descriptions,
    }),
  );

  ageIncreasing += 9;
  lifePeaks.push(
    new LifePeak({
      number: lp3,
      age: ageIncreasing,
      descriptions: lifePeakDb.find(lp => lp.number == lp3)?.descriptions,
    }),
  );

  ageIncreasing += 9;
  lifePeaks.push(
    new LifePeak({
      number: lp4,
      age: ageIncreasing,
      descriptions: lifePeakDb.find(lp => lp.number == lp4)?.descriptions,
    }),
  );

  return lifePeaks;
}

const SpecialNumberService = {
  calculateRulingNumber: (dateString: string) => {
    let rulingNumbers = 0;

    for (let index = 0; index < dateString.length; index++) {
      rulingNumbers += dateString.charCodeAt(index) - 48;
    }

    return _reCalc(rulingNumbers);
  },
  constructLifePeaks,
};

export default SpecialNumberService;
