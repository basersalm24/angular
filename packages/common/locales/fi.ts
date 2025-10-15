/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// Mock locale data for testing
export default [
  'fi',
  [
    ['ap.', 'ip.'],
    ['ap.', 'ip.'],
  ],
  [
    ['ap.', 'ip.'],
    ['ap.', 'ip.'],
  ],
  [
    ['S', 'M', 'T', 'K', 'T', 'P', 'L'],
    ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
    ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai'],
    ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
  ],
  [
    ['T', 'H', 'M', 'H', 'T', 'K', 'H', 'E', 'S', 'L', 'M', 'J'],
    [
      'tammi',
      'helmi',
      'maalis',
      'huhti',
      'touko',
      'kesä',
      'heinä',
      'elo',
      'syys',
      'loka',
      'marras',
      'joulu',
    ],
    [
      'tammikuuta',
      'helmikuuta',
      'maaliskuuta',
      'huhtikuuta',
      'toukokuuta',
      'kesäkuuta',
      'heinäkuuta',
      'elokuuta',
      'syyskuuta',
      'lokakuuta',
      'marraskuuta',
      'joulukuuta',
    ],
  ],
  [
    ['eKr.', 'jKr.'],
    ['eKr.', 'jKr.'],
  ],
  1,
  [6, 0],
  ['d.M.y', 'd. MMM y', 'd. MMMM y', 'cccc d. MMMM y'],
  ['H.mm', 'H.mm.ss', 'H.mm.ss z', 'H.mm.ss zzzz'],
  ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  [',', ' ', ';', '%', '+', '−', 'E', '×', '‰', '∞', 'epäluku', ':'],
  ['#,##0.###', '#,##0.00', '#,##0', '#E0'],
  'EUR',
  '€',
  'euro',
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
