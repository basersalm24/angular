/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// Mock locale data for testing
export default [
  'de',
  [
    ['AM', 'PM'],
    ['vorm.', 'nachm.'],
  ],
  [
    ['vorm.', 'nachm.'],
    ['AM', 'PM'],
  ],
  [
    ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
    ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
    ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
  ],
  [
    ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    ['Jan.', 'Feb.', 'Mär.', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'],
    ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
  ],
  [
    ['v. Chr.', 'n. Chr.'],
    ['v. Chr.', 'n. Chr.'],
  ],
  1,
  [6, 0],
  ['dd.MM.yy', 'dd.MM.y', 'd. MMMM y', 'EEEE, d. MMMM y'],
  ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
  ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  [',', '.', ';', '%', '+', '-', 'E', '·', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0.00', '#,##0', '#E0'],
  'EUR',
  '€',
  'Euro',
  {'AUD': ['AU$', '$'], 'CAD': ['CA$', '$'], 'CNY': ['CN¥', '¥'], 'GBP': ['£', '£'], 'JPY': ['¥'], 'USD': ['$'], 'VND': ['₫']},
  'ltr',
  plural,
  []
];

function plural(n: number): number {
  if (n === 1) return 0;
  return 1;
}