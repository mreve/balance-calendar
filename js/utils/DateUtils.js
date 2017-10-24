export default class DateUtils {
  static getFullMonth(
    date: Date,
  ): string {
    switch (date.getMonth()) {
      case 0: return 'January';
      case 1: return 'February';
      case 2: return 'March';
      case 3: return 'April';
      case 4: return 'May';
      case 5: return 'June';
      case 6: return 'July';
      case 7: return 'August';
      case 8: return 'September';
      case 9: return 'October';
      case 10: return 'November';
      case 11: return 'December';
      default: throw new Error();
    }
  }

  static getFullDayOfWeek(
    date: Date,
  ): string {
    switch (date.getDay()) {
      case 0: return 'Sunday';
      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
      case 6: return 'Saturday';
      default: throw new Error();
    }
  }

  static isSameDay(
    date1: Date,
    date2: Date,
  ): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  static getPreviousDay(
    date: Date,
  ): Date {
    return DateUtils.getDayRelative(date, -1);
  }

  static getNextDay(
    date: Date,
  ): Date {
    return DateUtils.getDayRelative(date, 1);
  }

  static getDayRelative(
    date: Date,
    delta: number,
  ): Date {
    let relativeDay = new Date(date);
    relativeDay.setDate(date.getDate() + delta);
    return new Date(relativeDay);
  }

  static getSurroundingDates(
    size: number, // size of the returned array
    date: Date, // main date
    position: number, // position of main date in the returned array
  ): Array<Date> {
    position = Math.floor(position);
    if (position >= size) {
      position = size - 1;
    } else if (position < 0) {
      position = 0;
    }

    let dates = [];
    for (let i = 0; i < size; i++) {
      dates.push(DateUtils.getDayRelative(date, i - position));
    }

    return dates;
  }

  static getDateKey(
    date: Date,
  ): string {
    return '' +
      date.getFullYear() +
      '-' +
      date.getFullMonth() +
      '-' +
      date.getDate();
  }
}
