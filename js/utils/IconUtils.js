// @flow

const MOOD = {
  'AMAZING': 'AMAZING',
  'BEAMING': 'BEAMING',
  'CHEERFUL': 'CHEERFUL',
  'OK': 'OK',
  'MEH': 'MEH',
  'GLOOMY': 'GLOOMY',
  'MISERABLE': 'MISERABLE',
};

export default class IconUtils {
  static getIconForMoodValue(
    moodValue: number,
  ): any {
    const moodStep = 100.0 / 7.0;
    if (moodValue > 100 - moodStep) {
      return require('./../../img/amazing.png');
    }

    if (moodValue > 100 - 2 * moodStep) {
      return require('./../../img/beaming.png');
    }

    if (moodValue > 100 - 3 * moodStep) {
      return require('./../../img/cheerful.png');
    }

    if (moodValue > 100 - 4 * moodStep) {
      return require('./../../img/OK.png');
    }

    if (moodValue > 100 - 5 * moodStep) {
      return require('./../../img/meh.png');
    }

    if (moodValue > 100 - 6 * moodStep) {
      return require('./../../img/gloomy.png');
    }

    return require('./../../img/miserable.png');
  }

  static getIconByName(
    name: string,
  ): any {
    switch (name) {
      case MOOD.AMAZING: return require('./../../img/amazing.png');
      case MOOD.BEAMING: return require('./../../img/beaming.png');
      case MOOD.CHEERFUL: return require('./../../img/cheerful.png');
      case MOOD.OK: return require('./../../img/OK.png');
      case MOOD.MEH: return require('./../../img/meh.png');
      case MOOD.GLOOMY: return require('./../../img/gloomy.png');
      case MOOD.MISERABLE: return require('./../../img/miserable.png');
      default: throw new Error('No icon for given mood name');
    }
  }
}
