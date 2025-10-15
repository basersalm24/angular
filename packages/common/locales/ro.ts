/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// Mock locale data for testing
export default [
  'ro',
  [
    ['AM', 'PM'],
    ['AM', 'PM'],
  ],
  [
    ['AM', 'PM'],
    ['AM', 'PM'],
  ],
  [
    ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
    ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  ],
  [
    ['I', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'D'],
    [
      'ian.',
      'feb.',
      'mar.',
      'apr.',
      'mai',
      'iun.',
      'iul.',
      'aug.',
      'sept.',
      'oct.',
      'nov.',
      'dec.',
    ],
    [
      'ianuarie',
      'februarie',
      'martie',
      'aprilie',
      'mai',
      'iunie',
      'iulie',
      'august',
      'septembrie',
      'octombrie',
      'noiembrie',
      'decembrie',
    ],
  ],
  [
    ['î.Hr.', 'd.Hr.'],
    ['î.Hr.', 'd.Hr.'],
  ],
  1,
  [6, 0],
  ['dd.MM.y', 'd MMM y', 'd MMMM y', 'EEEE, d MMMM y'],
  ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
  ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  [',', '.', ';', '%', '+', '−', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0.00', '#,##0', '#E0'],
  'RON',
  'lei',
  'leu românesc',
  {
    'AUD': ['AUD', '$'],
    'CAD': ['CAD', '$'],
    'CNY': ['CNY', '¥'],
    'GBP': ['GBP', '£'],
    'JPY': ['JPY', '¥'],
    'USD': ['USD', '$'],
    'VND': ['VND', '₫'],
  },
  'ltr',
  plural,
  [],
];

function plural(n: number): number {
  if (n === 1) return 0;
  if (n === 0 || (n % 100 >= 2 && n % 100 <= 19)) return 1;
  return 2;
}
