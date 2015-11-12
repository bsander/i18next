'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

// definition http://translate.sourceforge.net/wiki/l10n/pluralforms
/* eslint-disable */
var _rules = [['ach', 'Acholi', [1, 2], 1], ['af', 'Afrikaans', [1, 2], 2], ['ak', 'Akan', [1, 2], 1], ['am', 'Amharic', [1, 2], 1], ['an', 'Aragonese', [1, 2], 2], ['ar', 'Arabic', [0, 1, 2, 3, 11, 100], 5], ['arn', 'Mapudungun', [1, 2], 1], ['ast', 'Asturian', [1, 2], 2], ['ay', 'Aymará', [1], 3], ['az', 'Azerbaijani', [1, 2], 2], ['be', 'Belarusian', [1, 2, 5], 4], ['bg', 'Bulgarian', [1, 2], 2], ['bn', 'Bengali', [1, 2], 2], ['bo', 'Tibetan', [1], 3], ['br', 'Breton', [1, 2], 1], ['bs', 'Bosnian', [1, 2, 5], 4], ['ca', 'Catalan', [1, 2], 2], ['cgg', 'Chiga', [1], 3], ['cs', 'Czech', [1, 2, 5], 6], ['csb', 'Kashubian', [1, 2, 5], 7], ['cy', 'Welsh', [1, 2, 3, 8], 8], ['da', 'Danish', [1, 2], 2], ['de', 'German', [1, 2], 2], ['dev', 'Development Fallback', [1, 2], 2], ['dz', 'Dzongkha', [1], 3], ['el', 'Greek', [1, 2], 2], ['en', 'English', [1, 2], 2], ['eo', 'Esperanto', [1, 2], 2], ['es', 'Spanish', [1, 2], 2], ['es_ar', 'Argentinean Spanish', [1, 2], 2], ['et', 'Estonian', [1, 2], 2], ['eu', 'Basque', [1, 2], 2], ['fa', 'Persian', [1], 3], ['fi', 'Finnish', [1, 2], 2], ['fil', 'Filipino', [1, 2], 1], ['fo', 'Faroese', [1, 2], 2], ['fr', 'French', [1, 2], 9], ['fur', 'Friulian', [1, 2], 2], ['fy', 'Frisian', [1, 2], 2], ['ga', 'Irish', [1, 2, 3, 7, 11], 10], ['gd', 'Scottish Gaelic', [1, 2, 3, 20], 11], ['gl', 'Galician', [1, 2], 2], ['gu', 'Gujarati', [1, 2], 2], ['gun', 'Gun', [1, 2], 1], ['ha', 'Hausa', [1, 2], 2], ['he', 'Hebrew', [1, 2], 2], ['hi', 'Hindi', [1, 2], 2], ['hr', 'Croatian', [1, 2, 5], 4], ['hu', 'Hungarian', [1, 2], 2], ['hy', 'Armenian', [1, 2], 2], ['ia', 'Interlingua', [1, 2], 2], ['id', 'Indonesian', [1], 3], ['is', 'Icelandic', [1, 2], 12], ['it', 'Italian', [1, 2], 2], ['ja', 'Japanese', [1], 3], ['jbo', 'Lojban', [1], 3], ['jv', 'Javanese', [0, 1], 13], ['ka', 'Georgian', [1], 3], ['kk', 'Kazakh', [1], 3], ['km', 'Khmer', [1], 3], ['kn', 'Kannada', [1, 2], 2], ['ko', 'Korean', [1], 3], ['ku', 'Kurdish', [1, 2], 2], ['kw', 'Cornish', [1, 2, 3, 4], 14], ['ky', 'Kyrgyz', [1], 3], ['lb', 'Letzeburgesch', [1, 2], 2], ['ln', 'Lingala', [1, 2], 1], ['lo', 'Lao', [1], 3], ['lt', 'Lithuanian', [1, 2, 10], 15], ['lv', 'Latvian', [1, 2, 0], 16], ['mai', 'Maithili', [1, 2], 2], ['mfe', 'Mauritian Creole', [1, 2], 1], ['mg', 'Malagasy', [1, 2], 1], ['mi', 'Maori', [1, 2], 1], ['mk', 'Macedonian', [1, 2], 17], ['ml', 'Malayalam', [1, 2], 2], ['mn', 'Mongolian', [1, 2], 2], ['mnk', 'Mandinka', [0, 1, 2], 18], ['mr', 'Marathi', [1, 2], 2], ['ms', 'Malay', [1], 3], ['mt', 'Maltese', [1, 2, 11, 20], 19], ['nah', 'Nahuatl', [1, 2], 2], ['nap', 'Neapolitan', [1, 2], 2], ['nb', 'Norwegian Bokmal', [1, 2], 2], ['ne', 'Nepali', [1, 2], 2], ['nl', 'Dutch', [1, 2], 2], ['nn', 'Norwegian Nynorsk', [1, 2], 2], ['no', 'Norwegian', [1, 2], 2], ['nso', 'Northern Sotho', [1, 2], 2], ['oc', 'Occitan', [1, 2], 1], ['or', 'Oriya', [2, 1], 2], ['pa', 'Punjabi', [1, 2], 2], ['pap', 'Papiamento', [1, 2], 2], ['pl', 'Polish', [1, 2, 5], 7], ['pms', 'Piemontese', [1, 2], 2], ['ps', 'Pashto', [1, 2], 2], ['pt', 'Portuguese', [1, 2], 2], ['pt_br', 'Brazilian Portuguese', [1, 2], 2], ['rm', 'Romansh', [1, 2], 2], ['ro', 'Romanian', [1, 2, 20], 20], ['ru', 'Russian', [1, 2, 5], 4], ['sah', 'Yakut', [1], 3], ['sco', 'Scots', [1, 2], 2], ['se', 'Northern Sami', [1, 2], 2], ['si', 'Sinhala', [1, 2], 2], ['sk', 'Slovak', [1, 2, 5], 6], ['sl', 'Slovenian', [5, 1, 2, 3], 21], ['so', 'Somali', [1, 2], 2], ['son', 'Songhay', [1, 2], 2], ['sq', 'Albanian', [1, 2], 2], ['sr', 'Serbian', [1, 2, 5], 4], ['su', 'Sundanese', [1], 3], ['sv', 'Swedish', [1, 2], 2], ['sw', 'Swahili', [1, 2], 2], ['ta', 'Tamil', [1, 2], 2], ['te', 'Telugu', [1, 2], 2], ['tg', 'Tajik', [1, 2], 1], ['th', 'Thai', [1], 3], ['ti', 'Tigrinya', [1, 2], 1], ['tk', 'Turkmen', [1, 2], 2], ['tr', 'Turkish', [1, 2], 1], ['tt', 'Tatar', [1], 3], ['ug', 'Uyghur', [1], 3], ['uk', 'Ukrainian', [1, 2, 5], 4], ['ur', 'Urdu', [1, 2], 2], ['uz', 'Uzbek', [1, 2], 1], ['vi', 'Vietnamese', [1], 3], ['wa', 'Walloon', [1, 2], 1], ['wo', 'Wolof', [1], 3], ['yo', 'Yoruba', [1, 2], 2], ['zh', 'Chinese', [1], 3]];

var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n === 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  }
};
/* eslint-enable */

var PluralResolver = (function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, PluralResolver);

    this.rules = (function () {
      var l,
          rules = {};
      for (l = _rules.length; l--;) {
        rules[_rules[l][0]] = {
          name: _rules[l][1],
          numbers: _rules[l][2],
          plurals: _rulesPluralsTypes[_rules[l][3]]
        };
      }
      return rules;
    })();

    this.languageUtils = languageUtils;
    this.options = options;

    this.logger = _logger2['default'].create('pluralResolver');
  }

  _createClass(PluralResolver, [{
    key: 'addRule',
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }

    // setCurrentLng: function(lng) {
    //     if (!pluralExtensions.currentRule || pluralExtensions.currentRule.lng !== lng) {
    //         var parts = lng.split('-');
    //
    //         pluralExtensions.currentRule = {
    //             lng: lng,
    //             rule: pluralExtensions.rules[parts[0]]
    //         };
    //     }
    // },

  }, {
    key: 'getRule',
    value: function getRule(code) {
      return this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: 'needsPlural',
    value: function needsPlural(code) {
      var rule = this.getRule(code);

      return rule && rule.numbers.length <= 1 ? false : true;
    }
  }, {
    key: 'getSuffix',
    value: function getSuffix(code, count) {
      var rule = this.getRule(code);

      if (rule) {
        if (rule.numbers.length === 1) return ''; // only singular

        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var suffix = rule.numbers[idx];

        // special treatment for lngs only having singular and plural
        if (rule.numbers.length === 2 && rule.numbers[0] === 1) {
          if (suffix === 2) {
            suffix = 'plural';
          } else if (suffix === 1) {
            suffix = '';
          }
        }

        // COMPATIBILITY JSON
        if (this.options.compatibilityJSON === 'v1') {
          if (suffix === 1) return '';
          if (typeof suffix === 'number') return '_plural_' + suffix.toString();
        }

        return this.options.prepend && suffix.toString() ? this.options.prepend + suffix.toString() : suffix.toString();
      } else {
        this.logger.warn('no plural rule found for: ' + code);
        return '';
      }
    }
  }]);

  return PluralResolver;
})();

;

exports['default'] = PluralResolver;
module.exports = exports['default'];