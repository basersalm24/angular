/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// Mock locale data for testing
export default [
  'en',
  [
    ['AM', 'PM'],
    ['AM', 'PM'],
  ],
  [
    ['AM', 'PM'],
    ['AM', 'PM'],
  ],
  [
    ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  ],
  [
    ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  ],
  [
    ['B', 'A'],
    ['BC', 'AD'],
  ],
  0,
  [6, 0],
  ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
  ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
  ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0.00', '#,##0', '#E0'],
  'USD',
  '$',
  'US Dollar',
  {'AUD': ['A$', '$'], 'CAD': ['CA$', '$'], 'CNY': ['CN¥', '¥'], 'GBP': ['£', '£'], 'JPY': ['¥'], 'USD': ['$'], 'VND': ['₫']},
  'ltr',
  plural,
  []
];

function plural(n: number): number {
  if (n === 1) return 0;
  return 1;
}