/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// Mock locale data for testing
export default [
  'es-US',
  [
    ['AM', 'PM'],
    ['AM', 'PM'],
  ],
  [
    ['AM', 'PM'],
    ['AM', 'PM'],
  ],
  [
    ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'],
    ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA'],
  ],
  [
    ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    [
      'ene.',
      'feb.',
      'mar.',
      'abr.',
      'may.',
      'jun.',
      'jul.',
      'ago.',
      'sep.',
      'oct.',
      'nov.',
      'dic.',
    ],
    [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ],
  ],
  [
    ['a. C.', 'd. C.'],
    ['a. C.', 'd. C.'],
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
  'Dólar estadounidense',
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
