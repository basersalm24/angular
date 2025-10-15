/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// Mock locale data for testing
export default [
  'hu',
  [
    ['de.', 'du.'],
    ['DE', 'DU'],
  ],
  [
    ['DE', 'DU'],
    ['de.', 'du.'],
  ],
  [
    ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
    ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
    ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'],
    ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
  ],
  [
    ['J', 'F', 'M', 'Á', 'M', 'J', 'J', 'A', 'Sz', 'O', 'N', 'D'],
    [
      'jan.',
      'febr.',
      'márc.',
      'ápr.',
      'máj.',
      'jún.',
      'júl.',
      'aug.',
      'szept.',
      'okt.',
      'nov.',
      'dec.',
    ],
    [
      'január',
      'február',
      'március',
      'április',
      'május',
      'június',
      'július',
      'augusztus',
      'szeptember',
      'október',
      'november',
      'december',
    ],
  ],
  [
    ['i. e.', 'i. sz.'],
    ['i. e.', 'i. sz.'],
  ],
  1,
  [6, 0],
  ['y. MM. dd.', 'y. MMM d.', 'y. MMMM d.', 'y. MMMM d., EEEE'],
  ['H:mm', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss zzzz'],
  ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  [',', ' ', ';', '%', '+', '−', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0.00', '#,##0', '#E0'],
  'HUF',
  'Ft',
  'magyar forint',
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
  return 1;
}
