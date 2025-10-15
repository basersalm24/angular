/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// Mock locale data for testing
export default [
  'zh',
  [
    ['AM', 'PM'],
    ['上午', '下午'],
  ],
  [
    ['上午', '下午'],
    ['AM', 'PM'],
  ],
  [
    ['日', '一', '二', '三', '四', '五', '六'],
    ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    ['日', '一', '二', '三', '四', '五', '六'],
  ],
  [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
  ],
  [
    ['公元前', '公元'],
    ['公元前', '公元'],
  ],
  0,
  [6, 0],
  ['y/M/d', 'y年M月d日', 'y年M月d日EEEE', 'y年M月d日EEEE HH:mm:ss'],
  ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
  ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0.00', '#,##0', '#E0'],
  'CNY',
  '¥',
  '人民币',
  {
    'AUD': ['AUD', '$'],
    'CAD': ['CAD', '$'],
    'CNY': ['CN¥', '¥'],
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
  return 0;
}
