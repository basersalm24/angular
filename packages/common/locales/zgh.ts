/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// Mock locale data for testing
export default [
  'zgh',
  [
    ['AM', 'PM'],
    ['AM', 'PM'],
  ],
  [
    ['AM', 'PM'],
    ['AM', 'PM'],
  ],
  [
    ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
    ['Asa', 'Ayn', 'Asn', 'Akr', 'Akw', 'Asm', 'Asd'],
    ['Asamas', 'Aynas', 'Asinas', 'Akras', 'Akwas', 'Asimwas', 'Asiḍyas'],
    ['Asa', 'Ayn', 'Asn', 'Akr', 'Akw', 'Asm', 'Asd'],
  ],
  [
    ['Y', 'Y', 'M', 'I', 'M', 'Y', 'Y', 'Ɣ', 'C', 'K', 'N', 'D'],
    ['Yen', 'Yeb', 'Mar', 'Ibr', 'May', 'Yun', 'Yul', 'Ɣuc', 'Cut', 'Kṭu', 'Nwa', 'Duj'],
    [
      'Yennayer',
      'Yebrayer',
      'Mars',
      'Ibrir',
      'Mayyu',
      'Yunyu',
      'Yulyu',
      'Ɣuct',
      'Cutanbir',
      'Kṭuber',
      'Nwanbir',
      'Dujanbir',
    ],
  ],
  [
    ['ZƐ', 'ƐD'],
    ['ZƐ', 'ƐD'],
  ],
  1,
  [6, 0],
  ['d/M/y', 'd MMM, y', 'd MMMM y', 'EEEE d MMMM y'],
  ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
  ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  [',', ' ', ';', '%', '+', '−', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0.00', '#,##0', '#E0'],
  'MAD',
  'MAD',
  'Derhem n Umeṛṛuk',
  {
    'AUD': ['AUD', '$'],
    'CAD': ['CAD', '$'],
    'CNY': ['CNY', '¥'],
    'GBP': ['GBP', '£'],
    'JPY': ['JPY', '¥'],
    'USD': ['USD', '$'],
    'VND': ['VND', '₫'],
  },
  'rtl',
  plural,
  [],
];

function plural(n: number): number {
  if (n === 0 || n === 1) return 0;
  if (n >= 2 && n <= 10) return 1;
  return 2;
}
