import {
  WeakMap as WeakMap,

  // class static functions and methods
  ArrayPrototypeReduce,
  ObjectCreate,
  WeakMapPrototypeGet,
  WeakMapPrototypeSet
} from './primordials.mjs';

import Call from 'es-abstract/2024/Call.js';

// Instant
export const EPOCHNANOSECONDS = 'slot-epochNanoSeconds';

// DateTime, Date, Time, YearMonth, MonthDay
export const ISO_YEAR = 'slot-year';
export const ISO_MONTH = 'slot-month';
export const ISO_DAY = 'slot-day';
export const ISO_HOUR = 'slot-hour';
export const ISO_MINUTE = 'slot-minute';
export const ISO_SECOND = 'slot-second';
export const ISO_MILLISECOND = 'slot-millisecond';
export const ISO_MICROSECOND = 'slot-microsecond';
export const ISO_NANOSECOND = 'slot-nanosecond';
export const CALENDAR = 'slot-calendar';
// Date, YearMonth, and MonthDay all have the same slots, disambiguation needed:
export const DATE_BRAND = 'slot-date-brand';
export const YEAR_MONTH_BRAND = 'slot-year-month-brand';
export const MONTH_DAY_BRAND = 'slot-month-day-brand';

// ZonedDateTime
export const TIME_ZONE = 'slot-time-zone';

// Duration
export const YEARS = 'slot-years';
export const MONTHS = 'slot-months';
export const WEEKS = 'slot-weeks';
export const DAYS = 'slot-days';
export const HOURS = 'slot-hours';
export const MINUTES = 'slot-minutes';
export const SECONDS = 'slot-seconds';
export const MILLISECONDS = 'slot-milliseconds';
export const MICROSECONDS = 'slot-microseconds';
export const NANOSECONDS = 'slot-nanoseconds';

const slots = new WeakMap();
export function CreateSlots(container) {
  Call(WeakMapPrototypeSet, slots, [container, ObjectCreate(null)]);
}
function GetSlots(container) {
  return Call(WeakMapPrototypeGet, slots, [container]);
}
export function HasSlot(container, ...ids) {
  if (!container || 'object' !== typeof container) return false;
  const myslots = GetSlots(container);
  return !!myslots && Call(ArrayPrototypeReduce, ids, [(all, id) => all && id in myslots, true]);
}
export function GetSlot(container, id) {
  return GetSlots(container)[id];
}
export function SetSlot(container, id, value) {
  GetSlots(container)[id] = value;
}
