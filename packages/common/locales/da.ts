/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// Mock locale data for testing
export default [
  'da',
  [
    ['AM', 'PM'],
    ['AM', 'PM'],
  ],
  [
    ['AM', 'PM'],
    ['AM', 'PM'],
  ],
  [
    ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
    ['søn.', 'man.', 'tir.', 'ons.', 'tor.', 'fre.', 'lør.'],
    ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
    ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'],
  ],
  [
    ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'],
    [
      'januar',
      'februar',
      'marts',
      'april',
      'maj',
      'juni',
      'juli',
      'august',
      'september',
      'oktober',
      'november',
      'december',
    ],
  ],
  [
    ['f.Kr.', 'e.Kr.'],
    ['f.Kr.', 'e.Kr.'],
  ],
  1,
  [6, 0],
  ['dd.MM.y', 'd. MMM y', 'd. MMMM y', "EEEE 'den' d. MMMM y"],
  ['HH.mm', 'HH.mm.ss', 'HH.mm.ss z', 'HH.mm.ss zzzz'],
  ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  [',', '.', ';', '%', '+', '−', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0.00', '#,##0', '#E0'],
  'DKK',
  'kr',
  'dansk krone',
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
