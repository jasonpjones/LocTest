/**
 * Created by jjones on 2/5/2020.
 */

var LocTest = LocTest || {};

LocTest.App = function() {
    this.defaultLocale = 'US';
    this.alternateLocales = ['DE', 'FR'];
    this.stringTypes = ['ChartStrings', 'DialogStrings'];

    this.levelProgress = [];
    this.summaryObjects = [];
    this.summaryObject = undefined;
    this.isInverseCheck = false;

};

LocTest.App.prototype = {
    initialize: function() {

        this.alternateLocales.forEach(function(alternateLocale) {

            this.summaryObject = {
                locale: alternateLocale,
                stringFiles: []
            };

            var currentPrimaryLocale =  this.defaultLocale,
                currentAlternateLocale = alternateLocale;

            //console.log('===================');

            this.isInverseCheck = false;

            this.compareLocales(currentPrimaryLocale, currentAlternateLocale);

            this.isInverseCheck = true;

            this.compareLocales(currentAlternateLocale, currentPrimaryLocale);

            this.summaryObjects.push($.extend(true, {}, this.summaryObject));

            //console.log(' ');

        }.bind(this));

        this.generateResults();

    },

    compareLocales: function(primaryLocale, alternateLocale) {

        //console.log('--------------------');
        //console.log('comparing ' + primaryLocale + ' with ' + alternateLocale);

        this.stringTypes.forEach(function(stringCategory) {
            var primaryLocaleObject = LocTest[stringCategory][primaryLocale],
                alternateLocaleObject = LocTest[stringCategory][alternateLocale];

            if(! this.isInverseCheck) {
                this.summaryObject.stringFiles.push({
                    name: stringCategory,
                    missingItems: [],
                    extraItems: []
                })
            }

            //console.log('*****************  ' + stringCategory + '  *****************');
            this.compareLevel(primaryLocale, primaryLocaleObject, alternateLocale, alternateLocaleObject, stringCategory);

        }.bind(this));
    },
    compareLevel: function(primaryLocale, primaryLocaleObject, alternateLocale, alternateLocaleObject, stringCategory) {
        var primaryObjectKeys = Object.keys(primaryLocaleObject),
            altKeys = Object.keys(alternateLocaleObject);

        primaryObjectKeys.forEach(function(_altKeys, primaryObjectKey, idx, _primKeys) {
            var primaryObjectValue = primaryLocaleObject[primaryObjectKey],
                isObject = typeof primaryObjectValue === 'object',
                matchFound = _.includes(_altKeys, primaryObjectKey),
                isLastItem = (idx === _primKeys.length -1),
                exceptionObject,
                exceptionArray,
                notFoundPath;

            exceptionObject = _.find(this.summaryObject.stringFiles, {'name' : stringCategory});
            exceptionArray = this.isInverseCheck ? exceptionObject.extraItems : exceptionObject.missingItems;

            this.levelProgress.push(primaryObjectKey);
            notFoundPath = this.levelProgress.join('.');

            //console.log('.......  ' + notFoundPath + '  ' + isObject.toString());

            if(! matchFound) {
               // console.log(alternateLocale + " does not contain " + notFoundPath);
                exceptionArray.push(notFoundPath);
                this.levelProgress.pop();
            }  else if(isObject) {
                this.compareLevel(primaryLocale, primaryObjectValue, alternateLocale, alternateLocaleObject[primaryObjectKey], stringCategory);
            } else {
                this.levelProgress.pop();
            }

            if(isLastItem) {
                this.levelProgress.pop();
            }

        }.bind(this, altKeys))
    },
    generateResults: function() {

        this.summaryObjects.forEach(function(_summaryObject) {
            var $localeDiv = $('<div>', { class: 'locale-div' }),
                $localeHeader = $('<div>', { class: 'group-header locale-flag-' + _summaryObject.locale.toLowerCase() });


            $localeHeader.append($('<span>', { text: 'Locale: ' }));
            $localeHeader.append($('<span>', { class: 'header-emphasis', text: _summaryObject.locale }));

            $localeDiv.append($localeHeader);

            _summaryObject.stringFiles.forEach(this.appendStringFileSummary.bind(this, $localeDiv));

            $('#results-div').append($localeDiv);
        }.bind(this));
    },
    appendStringFileSummary: function($localeDiv, stringFile) {
        var $stringFileDiv = $('<div>', { class: 'string-file-div'}),
            $stringFileHeader = $('<div>', { class: 'group-header' });

        $stringFileHeader.append($('<span>', { text: 'File for compare: ' }));
        $stringFileHeader.append($('<span>', { class: 'header-emphasis', text: stringFile.name }));

        $stringFileDiv.append($stringFileHeader);

        if(stringFile.missingItems.length === 0 && stringFile.extraItems.length === 0) {
            $stringFileDiv.append($('<div>', {class: 'result-item-text ok-text', text: 'Files Match'}));
        } else {
            $stringFileDiv.append(this.buildExceptionGroup(stringFile.missingItems, true));
            $stringFileDiv.append(this.buildExceptionGroup(stringFile.extraItems, false));
        }

        $localeDiv.append($stringFileDiv);
    },
    buildExceptionGroup: function(exceptionItems, isMissing) {
        var exceptionClass = isMissing ? 'missing-item' : 'extra-item',
            $exGroupDiv,
            $exGroupList;

        $exGroupDiv = $('<div>', { class: 'exception-group-div' });

        $exGroupList = $('<ul>', { class: 'exception-group-list' });
        exceptionItems.forEach(function(exceptionItem) {
            $exGroupList.append($('<li>', { class: 'result-item-text ' + exceptionClass, text: exceptionItem }));
        });

        return $exGroupDiv.append($exGroupList);
    }

};

if (!String.format) {
    String.format = function () {
        // The string containing the format items (e.g. '{0}') MUST be the first argument.
        var theString = arguments[0];

        // start with the second argument (i = 1)
        for (var i = 1; i < arguments.length; i++) {
            var regEx = new RegExp('\\{' + (i - 1) + '\\}', 'g');  //g = global
            theString = theString.replace(regEx, arguments[i]);
        }
        return theString;
    };
}

