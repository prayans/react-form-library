import React__default__default, { createElement, useEffect, useState as useState$1, Fragment } from 'react';
import { get, isString, map, isEmpty, indexOf, isArray, filter, findIndex, reduce } from 'lodash';
import '@material-ui/core/Button';
import '@material-ui/core/CircularProgress';
import { makeStyles as makeStyles$1, createStyles as createStyles$1 } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography$1 from '@material-ui/core/Typography';
import { makeStyles, createStyles, FormControl, InputLabel, Select, MenuItem, FormHelperText, FormLabel, FormGroup, FormControlLabel, Checkbox, Switch, RadioGroup, Radio, TextField as TextField$1, CircularProgress, Typography, IconButton, Button, InputAdornment, Paper, List, ListItem, ListItemText } from '@material-ui/core';
import PlacesAutocomplete, { getLatLng, geocodeByAddress } from 'react-places-autocomplete';
import { Close } from '@material-ui/icons';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Highlighter from 'react-highlight-words';
import { FieldArray } from 'formik';
import CloseIcon from '@material-ui/icons/Close';
import moment from 'moment';
import { KeyboardDatePicker as KeyboardDatePicker$1 } from '@material-ui/pickers/DatePicker';
import { KeyboardTimePicker as KeyboardTimePicker$1 } from '@material-ui/pickers/TimePicker';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var getMenuOptions = function (options) {
    return map(options, function (item) {
        if (isString(item))
            return { name: item, value: item };
        return item;
    });
};
var getFieldError = function (fieldName, formikProps) {
    var fieldError = get(formikProps, "errors." + fieldName);
    var isTouched = get(formikProps, "touched." + fieldName);
    if (!isTouched && formikProps.submitCount < 1)
        return '';
    return fieldError;
};

var MUIReadOnly = function (props) {
    return (createElement("div", null,
        createElement(Typography$1, { variant: "subtitle1" }, props.label || ''),
        createElement(Typography$1, null, props.value || 'NA')));
};

var MUITextField = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b, _c = props.isReadOnly, isReadOnly = _c === void 0 ? false : _c;
    var fieldError = getFieldError((fieldProps.name || ''), formikProps);
    var updatedProps = __assign(__assign({}, fieldProps), { error: !!fieldError, helperText: fieldError || fieldProps.helperText || '', onChange: formikProps.handleChange, onBlur: formikProps.handleBlur, value: get(formikProps, "values." + fieldProps.name) || '' });
    console.log('Text field props read only', isReadOnly);
    if (isReadOnly) {
        return (createElement(MUIReadOnly, { label: updatedProps.label, value: updatedProps.value }));
    }
    return (createElement(TextField, __assign({}, updatedProps)));
};

var MUISelectField = function (props) {
    var _a = props.fieldConfig, fieldConfig = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b, _c = props.fieldProps, fieldProps = _c === void 0 ? {} : _c;
    var label = fieldProps.label, _d = fieldProps.options, options = _d === void 0 ? [] : _d, emptyItem = fieldProps.emptyItem, helperText = fieldProps.helperText, formControlProps = fieldProps.formControlProps, formHelperTextProps = fieldProps.formHelperTextProps, _e = fieldProps.emptyMenuItemProps, emptyMenuItemProps = _e === void 0 ? {} : _e, _f = fieldProps.menuItemProps, menuItemProps = _f === void 0 ? {} : _f, _g = fieldProps.inputLabelProps, inputLabelProps = _g === void 0 ? {} : _g, selectProps = __rest(fieldProps, ["label", "options", "emptyItem", "helperText", "formControlProps", "formHelperTextProps", "emptyMenuItemProps", "menuItemProps", "inputLabelProps"]);
    var labelId = fieldConfig.id + "_label";
    var fieldError = getFieldError((fieldProps.name || ''), formikProps);
    var emptyItemText = (isString(emptyItem) ? emptyItem : 'None');
    var menuOptions = getMenuOptions(options);
    var value = get(formikProps, "values." + fieldProps.name) || ((selectProps.multiple) ? [] : '');
    return (createElement(FormControl, __assign({ error: !!fieldError }, formControlProps),
        label &&
            (createElement(InputLabel, __assign({ id: labelId }, inputLabelProps), label)),
        createElement(Select, __assign({ labelId: labelId, id: fieldConfig.id, value: value, onChange: formikProps.handleChange, onBlur: formikProps.handleBlur }, selectProps),
            (emptyItem) &&
                (createElement(MenuItem, __assign({ value: '' }, emptyMenuItemProps), emptyItemText)),
            map(menuOptions, function (item, index) { return (createElement(MenuItem, __assign({ key: fieldConfig.id + "_menu_item_" + index, value: item.value }, menuItemProps), item.name)); })),
        (fieldError || fieldProps.helperText) &&
            (createElement(FormHelperText, __assign({}, formHelperTextProps), fieldError || fieldProps.helperText))));
};

var MUICheckBox = function (props) {
    var _a = props.fieldConfig, fieldConfig = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b, _c = props.fieldProps, fieldProps = _c === void 0 ? {} : _c;
    var label = fieldProps.label, helperText = fieldProps.helperText, _d = fieldProps.options, options = _d === void 0 ? [] : _d, header = fieldProps.header, headerProps = fieldProps.headerProps, checkGroupProps = fieldProps.checkGroupProps, formControlProps = fieldProps.formControlProps, formHelperTextProps = fieldProps.formHelperTextProps, formControlLabelProps = fieldProps.formControlLabelProps, checkboxProps = __rest(fieldProps, ["label", "helperText", "options", "header", "headerProps", "checkGroupProps", "formControlProps", "formHelperTextProps", "formControlLabelProps"]);
    var fieldError = getFieldError((fieldProps.name || ''), formikProps);
    var value = get(formikProps, "values." + fieldProps.name);
    var menuOptions = getMenuOptions(options);
    return (createElement(FormControl, __assign({ error: !!fieldError }, formControlProps),
        (header) &&
            (createElement(FormLabel, __assign({}, headerProps), header)),
        createElement(FormGroup, __assign({}, checkGroupProps), (!isEmpty(menuOptions)) ?
            (map(menuOptions, function (item, index) { return (createElement(FormControlLabel, __assign({ key: fieldConfig.id + "_check_" + index, control: createElement(Checkbox, __assign({ checked: (indexOf(value, item.value) > -1), onBlur: formikProps.handleBlur, onChange: formikProps.handleChange, value: item.value }, __assign(__assign({}, checkboxProps), { id: fieldConfig.id + "_check_" + index }))), label: item.name || '' }, formControlLabelProps))); })) : (createElement(FormControlLabel, __assign({ control: createElement(Checkbox, __assign({ checked: (value || false), onBlur: formikProps.handleBlur, onChange: formikProps.handleChange }, checkboxProps)), label: label || '' }, formControlLabelProps)))),
        (fieldError || helperText) &&
            (createElement(FormHelperText, __assign({}, formHelperTextProps), fieldError || helperText))));
};

var MUISwitch = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b, _c = props.isReadOnly, isReadOnly = _c === void 0 ? false : _c;
    var label = fieldProps.label, switchProps = __rest(fieldProps, ["label"]);
    var value = get(formikProps, "values." + fieldProps.name);
    var handleOnChange = function () {
        formikProps.setFieldValue(fieldProps.name, !value);
    };
    console.log('Switch props', __assign({}, __assign(__assign({}, switchProps), { disabled: (switchProps.disabled || isReadOnly) })));
    return (createElement(FormControlLabel, { control: createElement(Switch, __assign({ checked: !!value, onChange: handleOnChange, onBlur: formikProps.handleBlur, inputProps: { 'aria-label': 'secondary checkbox' }, value: value }, __assign(__assign({}, switchProps), { disabled: (switchProps.disabled || isReadOnly) }))), label: label || '' }));
};

var MUIRadio = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var header = fieldProps.header, _c = fieldProps.options, options = _c === void 0 ? [] : _c, headerProps = fieldProps.headerProps, helperText = fieldProps.helperText, radioProps = fieldProps.radioProps, radioGroupProps = fieldProps.radioGroupProps, formControlProps = fieldProps.formControlProps, formHelperTextProps = fieldProps.formHelperTextProps;
    var fieldValue = get(formikProps, "values." + fieldProps.name) || '';
    var menuOptions = getMenuOptions(options);
    var fieldError = getFieldError((fieldProps.name || ''), formikProps);
    return (createElement(FormControl, __assign({ error: !!fieldError }, formControlProps),
        (header) &&
            (createElement(FormLabel, __assign({}, headerProps), header)),
        createElement(RadioGroup, __assign({ name: fieldProps.name, value: fieldValue, onChange: formikProps.handleChange, onBlur: formikProps.handleBlur }, radioGroupProps), map(menuOptions, function (option, index) {
            var value = option.value, name = option.name, rest = __rest(option, ["value", "name"]);
            return (createElement(FormControlLabel, __assign({ key: fieldProps.id + "_option_item_" + index, value: value + '', label: name, control: createElement(Radio, __assign({}, radioProps)) }, rest)));
        })),
        (fieldError || helperText) &&
            (createElement(FormHelperText, __assign({}, formHelperTextProps), fieldError || helperText))));
};

var useState = useState$1;
var SearchField = function (props) {
    var address = props.address, fieldProps = props.fieldProps, _a = props.placeAutocompleteProps, placeAutocompleteProps = _a === void 0 ? {} : _a, value = props.value, resetField = props.resetField, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var inputProps = (value && value.lat && value.lng) ? ({
        endAdornment: (createElement(InputAdornment, { position: "end" },
            createElement(IconButton, { "aria-label": "remove selected place", edge: "end", onClick: function () { return resetField(); } },
                createElement(Close, null))))
    }) : {};
    var _c = fieldProps.textFieldProps, textFieldProps = _c === void 0 ? {} : _c;
    var fieldInputProps = __assign(__assign({}, textFieldProps.InputProps), inputProps);
    var fieldError = getFieldError((fieldProps.name || ''), formikProps);
    var updatedProps = __assign(__assign({}, __assign(__assign({}, textFieldProps), { InputProps: fieldInputProps })), { error: !!fieldError, helperText: (fieldError || ''), name: fieldProps.name });
    return (createElement("div", null,
        createElement(TextField$1, __assign({ value: address || '' }, placeAutocompleteProps.getInputProps({
            label: textFieldProps.label || 'Search Places',
            className: 'location-search-input',
            onBlur: formikProps.handleBlur
        }), updatedProps))));
};
var LIST_CONTAINER_STYLES = { position: 'absolute', left: 0, top: '100%', right: 0, zIndex: 500 };
var PlaceList = function (props) {
    var _a = props.placeAutocompleteProps, placeAutocompleteProps = _a === void 0 ? {} : _a, listProps = props.listProps, listItemProps = props.listItemProps, listContainerStyle = props.listContainerStyle;
    var suggestions = placeAutocompleteProps.suggestions, getSuggestionItemProps = placeAutocompleteProps.getSuggestionItemProps;
    return (createElement("div", { className: "autocomplete-dropdown-container" },
        createElement(Paper, { style: __assign(__assign(__assign({}, LIST_CONTAINER_STYLES), listContainerStyle), { visibility: ((suggestions.length) ? 'visible' : 'hidden') }) },
            createElement(List, __assign({}, listProps), suggestions.map(function (suggestion) {
                var className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                // inline style for demonstration purpose
                var style = { cursor: 'pointer' };
                return (createElement(ListItem, __assign({ disableGutters: true, dense: true, selected: suggestion.active, key: suggestion.placeId }, getSuggestionItemProps(suggestion, {
                    className: className,
                    style: style
                }), __assign({}, listItemProps)),
                    createElement(ListItemText, { primary: suggestion.formattedSuggestion.mainText, secondary: suggestion.formattedSuggestion.secondaryText })));
            })))));
};
var FieldLayout = function (props) {
    var currentAddress = props.currentAddress, selectedValue = props.selectedValue, placeAutocompleteProps = props.placeAutocompleteProps, name = props.name, id = props.id, textFieldProps = props.textFieldProps;
    return (createElement("div", null,
        createElement(SearchField, { resetField: props.resetField, address: currentAddress, value: selectedValue, placeAutocompleteProps: placeAutocompleteProps, formikProps: props.formikProps, fieldProps: { name: name, id: id, textFieldProps: textFieldProps } }),
        createElement(PlaceList, { placeAutocompleteProps: placeAutocompleteProps, listContainerStyle: props.listContainerStyle })));
};
var MUIPlaceSuggest = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var _c = useState(''), address = _c[0], setAddress = _c[1];
    var placeAutocompleteProps = fieldProps.placeAutocompleteProps, locationNameKey = fieldProps.locationNameKey, outputResult = fieldProps.outputResult, fieldLayoutProps = __rest(fieldProps, ["placeAutocompleteProps", "locationNameKey", "outputResult"]);
    var selectedValue = formikProps.values[(fieldProps.name || '')];
    var locationName = formikProps.values[(locationNameKey || '')];
    useEffect(function () {
        setAddress(locationName || '');
    }, []);
    var handleChange = function (address) {
        setAddress(address);
    };
    var handleSelect = function (address) { return __awaiter(void 0, void 0, void 0, function () {
        var geoAdress, selectedAddress, latLng;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, geocodeByAddress(address)];
                case 1:
                    geoAdress = _a.sent();
                    selectedAddress = geoAdress[0];
                    if (!selectedAddress)
                        return [2 /*return*/];
                    return [4 /*yield*/, getLatLng(selectedAddress)];
                case 2:
                    latLng = _a.sent();
                    formikProps.setFieldValue(fieldProps.name, latLng);
                    setAddress(selectedAddress.formatted_address);
                    if (locationName)
                        formikProps.setFieldValue(locationNameKey, selectedAddress.formatted_address);
                    if (outputResult)
                        formikProps.setFieldValue(outputResult, selectedAddress);
                    return [2 /*return*/];
            }
        });
    }); };
    var resetField = function () {
        setAddress('');
        formikProps.setFieldValue(fieldProps.name);
    };
    return (createElement("div", { style: { position: 'relative' } },
        createElement(PlacesAutocomplete, __assign({ value: address, onChange: handleChange, onSelect: handleSelect }, placeAutocompleteProps), function (placeCompleteProps) { return (createElement(FieldLayout, __assign({ placeAutocompleteProps: placeCompleteProps, resetField: resetField, currentAddress: address, selectedValue: selectedValue, formikProps: formikProps }, fieldLayoutProps))); })));
};

var MUIDatePicker = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var value = get(formikProps, "values." + fieldProps.name);
    //const [selectedDate, setSelectedDate] = React.useState<MaterialUiPickersDate | null>(initValue ? initValue : null);
    var fieldError = get(formikProps, "errors." + fieldProps.name);
    var outputFormat = fieldProps.outputFormat, datePickerProps = __rest(fieldProps, ["outputFormat"]);
    var handleDateChange = function (date) {
        //setSelectedDate(date);
        if (!date) {
            formikProps.setFieldValue(fieldProps.name, date, false);
            return;
        }
        var dateValue = (outputFormat === 'date') ? date : date.format(outputFormat || fieldProps.format || 'MM/DD/YYYY');
        formikProps.setFieldValue(fieldProps.name, dateValue, false);
    };
    var updatedProps = __assign(__assign({}, datePickerProps), { error: !!fieldError, helperText: (fieldError || ''), onChange: handleDateChange, value: (!value) ? null : undefined, inputValue: (!value) ? '' : value, format: fieldProps.format || 'MM/DD/YYYY', onError: function (error) {
            // handle as a side effect
            if (error !== fieldError) {
                formikProps.setFieldError(fieldProps.name, error);
            }
        } });
    return (createElement(KeyboardDatePicker, __assign({}, updatedProps)));
};
var MUITimePicker = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var fieldError = get(formikProps, "errors." + fieldProps.name);
    var value = get(formikProps, "values." + fieldProps.name);
    var handleTimeChange = function (time) {
        if (time === null)
            formikProps.setFieldValue(fieldProps.name, time, false);
        else
            formikProps.setFieldValue(fieldProps.name, new Date(time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }), false);
    };
    var updatedProps = __assign(__assign({}, fieldProps), { error: !!fieldError, helperText: (fieldError || ''), onChange: handleTimeChange, value: (!value) ? null : undefined, inputValue: (!value) ? '' : value, onError: function (error) {
            if (error !== fieldError) {
                formikProps.setFieldError(fieldProps.name, error);
            }
        } });
    return (createElement(KeyboardTimePicker, __assign({}, updatedProps)));
};

var TIME_BETWEEN_REQS = 300;
var MUIAutocomplete = function (props) {
    var _a = useState$1(), query = _a[0], setQuery = _a[1];
    var _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b, _c = props.formikProps, formikProps = _c === void 0 ? {} : _c, _d = props.fieldConfig, fieldConfig = _d === void 0 ? {} : _d;
    var fieldError = getFieldError((fieldConfig.valueKey || ''), formikProps);
    var _e = fieldProps.highlighterProps, highlighterProps = _e === void 0 ? {
        highlightText: false,
        highlightColor: '#ffff00'
    } : _e, _f = fieldProps.options, options = _f === void 0 ? [] : _f, _g = fieldProps.renderInputProps, renderInputProps = _g === void 0 ? {} : _g, _h = fieldProps.inputProps, inputProps = _h === void 0 ? {} : _h, _j = fieldProps.getQueryResponse, getQueryResponse = _j === void 0 ? undefined : _j, _k = fieldProps.outputKey, _l = fieldProps.clearOnSelect, clearOnSelect = _l === void 0 ? false : _l, _m = fieldProps.onItemSelected, onItemSelected = _m === void 0 ? undefined : _m, _o = fieldProps.displayKey, displayKey = _o === void 0 ? 'label' : _o, _p = fieldProps.uniqueKey, autoCompleteProps = __rest(fieldProps, ["highlighterProps", "options", "renderInputProps", "inputProps", "getQueryResponse", "outputKey", "clearOnSelect", "onItemSelected", "displayKey", "uniqueKey"]);
    var classes = useStyles();
    var _q = useState$1([]), defaultOptions = _q[0], setDefaultOptions = _q[1];
    var _r = useState$1(false), open = _r[0], setOpen = _r[1];
    var _s = useState$1(false), loading = _s[0], setLoading = _s[1];
    var _t = useState$1(''), globalTerm = _t[0], setGlobalTerm = _t[1];
    var _u = useState$1([]), globalQueries = _u[0], setGlobalQueries = _u[1];
    var value = get(formikProps, "values." + (get(fieldProps, 'name') || '')) || (get(fieldProps, 'multiple') ? [] : null);
    var defaultGetOptionLabel = function (x) { return isString(x) ? x : x[displayKey]; };
    var handleQueryResponse = function (newTerm) { return __awaiter(void 0, void 0, void 0, function () {
        var result, newOptions_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    if (!getQueryResponse) return [3 /*break*/, 2];
                    return [4 /*yield*/, getQueryResponse(newTerm)];
                case 1:
                    result = _a.sent();
                    newOptions_1 = [];
                    result.forEach(function (element) {
                        newOptions_1.push(element);
                    });
                    setLoading(false);
                    return [2 /*return*/, newOptions_1];
                case 2: return [2 /*return*/, []];
            }
        });
    }); };
    var handleChange = function (newTerm, isWaitingReq) {
        if (isWaitingReq === void 0) { isWaitingReq = false; }
        return __awaiter(void 0, void 0, void 0, function () {
            var queries, prevQueryIndex, lastQueryOrder, lastQueryIndex, lastQuery, now, newOptions, index, latestRespOrder, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (options.length > 0)
                            return [2 /*return*/];
                        setQuery(newTerm);
                        if (!newTerm) {
                            setDefaultOptions([]);
                            return [2 /*return*/];
                        }
                        if ((isWaitingReq && globalTerm !== newTerm) || !newTerm)
                            return [2 /*return*/];
                        setGlobalTerm(newTerm);
                        queries = __spreadArrays(globalQueries);
                        prevQueryIndex = findIndex(queries, function (q) { return q.term === newTerm; });
                        lastQueryOrder = reduce(queries, function (currentMaxId, query) {
                            return Math.max(currentMaxId, query.order);
                        }, -1);
                        if (prevQueryIndex !== -1) {
                            if (queries[prevQueryIndex].options) {
                                setDefaultOptions(queries[prevQueryIndex].options || []);
                            }
                            else {
                                queries[prevQueryIndex].order = Math.max(queries[prevQueryIndex].order, lastQueryOrder + 1);
                            }
                            return [2 /*return*/];
                        }
                        lastQueryIndex = findIndex(queries, function (q) { return q.order === lastQueryOrder; });
                        lastQuery = queries[lastQueryIndex];
                        now = new Date().getTime();
                        if (!(lastQuery && (now - lastQuery.sendAt < TIME_BETWEEN_REQS))) return [3 /*break*/, 1];
                        setGlobalQueries(__spreadArrays(queries));
                        setTimeout(function () {
                            handleChange(newTerm, true);
                        }, TIME_BETWEEN_REQS - (now - lastQuery.sendAt));
                        return [3 /*break*/, 5];
                    case 1:
                        queries.push({
                            term: newTerm,
                            sendAt: now,
                            order: (lastQueryOrder || 0) + 1
                        });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, handleQueryResponse(newTerm)];
                    case 3:
                        newOptions = _a.sent();
                        index = findIndex(queries, function (q) { return q.term === newTerm; });
                        latestRespOrder = reduce(queries, function (currentMaxId, query) {
                            if (!query.options)
                                return currentMaxId;
                            return Math.max(currentMaxId, query.order);
                        }, -1);
                        queries[index].options = newOptions;
                        if (latestRespOrder < queries[index].order) {
                            setDefaultOptions(newOptions);
                        }
                        setGlobalQueries(__spreadArrays(queries));
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.log('error', error_1);
                        queries = filter(queries, function (q) { return q.term !== newTerm; });
                        setDefaultOptions([]);
                        setGlobalQueries(__spreadArrays(queries));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    var onItemSelect = function (event, value) {
        event.preventDefault();
        if (clearOnSelect)
            setQuery('');
        if (value) {
            if (onItemSelected)
                onItemSelected(value);
            else {
                formikProps.setFieldValue(get(fieldProps, 'name'), value, false);
            }
            // if (outputKey)
            //     formikProps.setFieldValue(outputKey, isString(value) ? value : value[uniqueKey], false)
        }
    };
    var onInputChange = function (event, values, reason) {
        if (event) {
            event.preventDefault();
            if (reason === 'clear') {
                if (onItemSelected) {
                    onItemSelected(get(fieldProps, 'multiple') ? [] : (isString(value) ? values : null));
                }
                else {
                    formikProps.setFieldValue(get(fieldProps, 'name'), get(fieldProps, 'multiple') ? [] : (isString(value) ? values : null), false);
                }
            }
        }
    };
    var defaultRenderOptions = function (option, _a) {
        var inputValue = _a.inputValue;
        /*THIS WILL BE USED TO RENDER OPTION AND HIGHLIGHT IF USER DOESN'T PROVIDE ANY RENDER OPTIONS */
        return (createElement("div", null, (highlighterProps.highlightText === false) ?
            //NO HIGHLIGHT
            createElement("span", null, isString(option) ? option : option[displayKey]) :
            //DEFAULT HIGHLIGHT WITH USER STYLES IF PROVIDED
            createElement(Highlighter, { searchWords: [inputValue], textToHighlight: isString(option) ? option : option[displayKey], highlightStyle: __assign({ backgroundColor: highlighterProps.highlightColor }, highlighterProps.highlighterStyles) })));
    };
    return createElement(Fragment, null,
        createElement(Autocomplete, __assign({ onChange: onItemSelect, onInputChange: onInputChange, getOptionLabel: defaultGetOptionLabel, onOpen: function () { setOpen(true); }, open: open, onClose: function () { setOpen(false); }, options: options.length > 0 ? options : defaultOptions, renderOption: defaultRenderOptions, disableClearable: clearOnSelect, value: value, renderInput: function (params) { return createElement(TextField$1, __assign({}, params, { value: query, onChange: function (e) { return handleChange(e.target.value); }, fullWidth: true, error: fieldError ? true : false, className: fieldError ? classes.autocompleteError : '', InputProps: __assign(__assign(__assign(__assign({}, params.InputProps), { classes: {
                        root: fieldError ? classes.autocompleteError : ''
                    }, endAdornment: (createElement(Fragment, null,
                        loading ? createElement(CircularProgress, { color: "primary", size: 20 }) : null,
                        params.InputProps.endAdornment)) }), inputProps), { inputProps: __assign(__assign({}, params.inputProps), { autoComplete: 'nope' }) }) }, renderInputProps)); } }, autoCompleteProps)),
        "  ",
        fieldError && createElement(Typography, { variant: 'overline', className: fieldError ? classes.errorField : '' }, fieldError));
};
var useStyles = makeStyles(function () {
    return (createStyles({
        errorField: {
            color: '#B71840',
            fontSize: 12,
            fontWeight: 'bold',
            textTransform: 'none'
        },
        autocompleteError: {
            '&::after': {
                borderColor: '#B71840 !important'
            }
        }
    }));
});

/* interface IArrayItemProps extends TextFieldProps {
    fieldValue?: string
    formikProps?: FormikValues
    name?: string
    itemIndex?: number

} */
/* export const ArrayItem:React.FC<IArrayItemProps> = (props) => {
    const {fieldValue='',} = props;
    return (
        <div>
            <TextField/>
        </div>
    )
} */
var MUIFieldArray = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var itemType = fieldProps.itemType, _c = fieldProps.addButtonText, addButtonText = _c === void 0 ? 'Add' : _c, addButtonProps = fieldProps.addButtonProps, addButton = fieldProps.addButton, removeButton = fieldProps.removeButton, removeButtonProps = fieldProps.removeButtonProps, _d = fieldProps.textFieldProps, textFieldProps = _d === void 0 ? {} : _d;
    var values = get(formikProps, "values." + fieldProps.name);
    var itemComponentConfig = getComponentConfig(itemType);
    var classes = useStyles$1();
    return (React__default__default.createElement(FieldArray, { name: fieldProps.name, render: function (arrayHelpers) { return (React__default__default.createElement("div", null,
            (values || []).map(function (value, index) { return (React__default__default.createElement("div", { key: fieldProps.name + "-" + index, className: classes.arrayItem },
                React__default__default.cloneElement(itemComponentConfig.component, __assign(__assign({ name: fieldProps.name, itemIndex: index, arrayHelpers: arrayHelpers, fieldValue: value, formikProps: formikProps }, itemComponentConfig.props), textFieldProps)),
                (removeButton) ? removeButton : (React__default__default.createElement(IconButton, __assign({ className: classes.arrayRemoveIcon, size: "small", onClick: function () { return arrayHelpers.remove(index); } }, removeButtonProps),
                    React__default__default.createElement(CloseIcon, null))))); }),
            (addButton) ? addButton : (React__default__default.createElement(Button, __assign({ type: "button", onClick: function () { return arrayHelpers.push({}); } }, addButtonProps), addButtonText)))); } }));
};
var useStyles$1 = makeStyles$1(function () {
    return (createStyles$1({
        arrayItem: {
            position: 'relative'
        },
        arrayRemoveIcon: {
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translate(0,-50%)'
        }
    }));
});

var getOptions = function (startTime, endTime, interval, amPm) {
    var start = amPm ? moment(startTime, 'hh:mm a').toDate() : moment(startTime, 'HH:mm').toDate();
    var end = amPm ? moment(endTime, 'hh:mm a').toDate() : moment(endTime, 'HH:mm').toDate();
    var list = [];
    while (start.getTime() <= end.getTime()) {
        var item = amPm ? moment(start).format('hh:mm a') : moment(start).format('HH:mm');
        list.push({ name: item, value: item });
        start = new Date(start.getTime() + interval * 60000);
    }
    return list;
};
var MUIDropDownTimePicker = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.fieldConfig, fieldConfig = _b === void 0 ? {} : _b, _c = props.formikProps, formikProps = _c === void 0 ? {} : _c;
    var fieldError = getFieldError((fieldProps.name || ''), formikProps);
    var _d = fieldProps.formControlProps, formControlProps = _d === void 0 ? {} : _d, _e = fieldProps.startTime, startTime = _e === void 0 ? '00:00' : _e, _f = fieldProps.endTime, endTime = _f === void 0 ? '23:45' : _f, _g = fieldProps.interval, interval = _g === void 0 ? 15 : _g, _h = fieldProps.amPm, amPm = _h === void 0 ? false : _h, label = fieldProps.label, emptyItem = fieldProps.emptyItem, helperText = fieldProps.helperText, _j = fieldProps.inputLabelProps, inputLabelProps = _j === void 0 ? {} : _j, formHelperTextProps = fieldProps.formHelperTextProps, _k = fieldProps.menuItemProps, menuItemProps = _k === void 0 ? {} : _k, _l = fieldProps.emptyMenuItemProps, emptyMenuItemProps = _l === void 0 ? {} : _l, _m = fieldProps.error, error = _m === void 0 ? !!fieldError : _m, selectProps = __rest(fieldProps, ["formControlProps", "startTime", "endTime", "interval", "amPm", "label", "emptyItem", "helperText", "inputLabelProps", "formHelperTextProps", "menuItemProps", "emptyMenuItemProps", "error"]);
    var labelId = fieldConfig.id + "_label";
    var value = get(formikProps, "values." + fieldProps.name) || '';
    var list = getOptions(startTime, endTime, interval, amPm);
    var emptyItemText = (isString(emptyItem) ? emptyItem : 'None');
    var onChange = function (event) {
        event.preventDefault();
        if (event.target.value)
            formikProps.setFieldValue(get(fieldProps, 'name'), event.target.value, false);
    };
    console.log(value);
    return (React__default__default.createElement(FormControl, __assign({}, formControlProps),
        label &&
            (React__default__default.createElement(InputLabel, __assign({ id: labelId }, inputLabelProps), label)),
        React__default__default.createElement(Select, __assign({ labelId: labelId, id: fieldConfig.id, value: value, onChange: onChange, error: error }, selectProps),
            (emptyItem) &&
                (React__default__default.createElement(MenuItem, __assign({ value: '' }, menuItemProps, emptyMenuItemProps), emptyItemText)),
            map(list, function (item, index) { return (React__default__default.createElement(MenuItem, __assign({}, menuItemProps, { key: fieldConfig.id + "_menu_item_" + index, value: item.value }), item.name)); })),
        React__default__default.createElement(FormHelperText, null, helperText)));
};
var useStyles$2 = makeStyles(function () { return createStyles({
    invisibleInput: { opacity: 0, width: '100%', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, cursor: 'pointer' }
}); });
var ComponentMapConfig = {};
var getComponentConfig = function (type) {
    return ComponentMapConfig[type];
};
var attachField = function (type, component, props) {
    if (isArray(type)) {
        map(type, function (item) { return ComponentMapConfig[item] = { component: component, props: props }; });
    }
    else
        ComponentMapConfig[type] = { component: component, props: props };
};
attachField('text', createElement(MUITextField, null), { type: 'text' });
attachField('password', createElement(MUITextField, null), { type: 'password' });
attachField('select', createElement(MUISelectField, null));
attachField('checkbox', createElement(MUICheckBox, null));
attachField('date-picker', createElement(MUIDatePicker, null), { variant: 'inline', label: 'Select Date' });
attachField('time-picker', createElement(MUITimePicker, null), { variant: 'inline', label: 'Select Time' });
attachField('location-suggest', createElement(MUIPlaceSuggest, null));
attachField('switch', createElement(MUISwitch, null));
attachField('radio', createElement(MUIRadio, null));
attachField('autocomplete', createElement(MUIAutocomplete, null));
attachField('array', createElement(MUIFieldArray, null));
attachField('time-picker-select', createElement(MUIDropDownTimePicker, null));
var useFormStyles = makeStyles$1(function () {
    return (createStyles$1({
        row: {
            display: 'flex'
        },
        column: {},
        actionContainer: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            '&.action-center': {
                justifyContent: 'center'
            },
            '&.action-right': {
                justifyContent: 'flex-end'
            },
            '&.action-fullWidth > button': {
                flex: 1
            }
        },
        submitLoader: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            marginTop: -5
        }
    }));
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function __rest$1(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var MUIDatePicker$1 = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var value = get(formikProps, "values." + fieldProps.name);
    var fieldError = get(formikProps, "errors." + fieldProps.name);
    var outputFormat = fieldProps.outputFormat, datePickerProps = __rest$1(fieldProps, ["outputFormat"]);
    var handleDateChange = function (date) {
        if (date === null) {
            formikProps.setFieldValue(fieldProps.name, date, false);
        }
        else {
            var data = new Date(date);
            // (outputFormat === 'date') ? date :moment(date).format(outputFormat || fieldProps.format || 'MM/DD/YYYY')
            formikProps.setFieldValue(fieldProps.name, data, false);
        }
    };
    var updatedProps = __assign$1(__assign$1({}, datePickerProps), { error: !!fieldError, helperText: (fieldError || ''), onChange: handleDateChange, value: (!value) ? null : undefined, inputValue: (!value) ? '' : value, format: fieldProps.format || 'mm/dd/yyyy', onError: function (error) {
            // handle as a side effect
            if (error !== fieldError) {
                formikProps.setFieldError(fieldProps.name, error);
            }
        } });
    return (createElement(KeyboardDatePicker$1, __assign$1({}, updatedProps)));
};
var MUITimePicker$1 = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var fieldError = get(formikProps, "errors." + fieldProps.name);
    var value = get(formikProps, "values." + fieldProps.name);
    var handleTimeChange = function (time) {
        if (time === null)
            formikProps.setFieldValue(fieldProps.name, time, false);
        else
            formikProps.setFieldValue(fieldProps.name, new Date(time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }), false);
    };
    var updatedProps = __assign$1(__assign$1({}, fieldProps), { error: !!fieldError, helperText: (fieldError || ''), onChange: handleTimeChange, value: (!value) ? null : undefined, inputValue: (!value) ? '' : value, onError: function (error) {
            if (error !== fieldError) {
                formikProps.setFieldError(fieldProps.name, error);
            }
        } });
    return (createElement(KeyboardTimePicker$1, __assign$1({}, updatedProps)));
};

var getFieldError$1 = function (fieldName, formikProps) {
    var fieldError = get(formikProps, "errors." + fieldName);
    var isTouched = get(formikProps, "touched." + fieldName);
    if (!isTouched && formikProps.submitCount < 1)
        return '';
    return fieldError;
};

var getOptions$1 = function (startTime, endTime, interval, amPm) {
    var start = amPm ? moment(startTime, 'hh:mm a').toDate() : moment(startTime, 'HH:mm').toDate();
    var end = amPm ? moment(endTime, 'hh:mm a').toDate() : moment(endTime, 'HH:mm').toDate();
    var list = [];
    while (start.getTime() <= end.getTime()) {
        var item = amPm ? moment(start).format('hh:mm a') : moment(start).format('HH:mm');
        list.push({ name: item, value: item });
        start = new Date(start.getTime() + interval * 60000);
    }
    return list;
};
var MUIDropDownTimePicker$1 = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.fieldConfig, fieldConfig = _b === void 0 ? {} : _b, _c = props.formikProps, formikProps = _c === void 0 ? {} : _c;
    var fieldError = getFieldError$1((fieldProps.name || ''), formikProps);
    var _d = fieldProps.formControlProps, formControlProps = _d === void 0 ? {} : _d, _e = fieldProps.startTime, startTime = _e === void 0 ? '00:00' : _e, _f = fieldProps.endTime, endTime = _f === void 0 ? '23:45' : _f, _g = fieldProps.interval, interval = _g === void 0 ? 15 : _g, _h = fieldProps.amPm, amPm = _h === void 0 ? false : _h, label = fieldProps.label, emptyItem = fieldProps.emptyItem, helperText = fieldProps.helperText, _j = fieldProps.inputLabelProps, inputLabelProps = _j === void 0 ? {} : _j, formHelperTextProps = fieldProps.formHelperTextProps, _k = fieldProps.menuItemProps, menuItemProps = _k === void 0 ? {} : _k, _l = fieldProps.emptyMenuItemProps, emptyMenuItemProps = _l === void 0 ? {} : _l, _m = fieldProps.error, error = _m === void 0 ? !!fieldError : _m, selectProps = __rest$1(fieldProps, ["formControlProps", "startTime", "endTime", "interval", "amPm", "label", "emptyItem", "helperText", "inputLabelProps", "formHelperTextProps", "menuItemProps", "emptyMenuItemProps", "error"]);
    var labelId = fieldConfig.id + "_label";
    var value = get(formikProps, "values." + fieldProps.name) || '';
    var list = getOptions$1(startTime, endTime, interval, amPm);
    var emptyItemText = (isString(emptyItem) ? emptyItem : 'None');
    var onChange = function (event) {
        event.preventDefault();
        if (event.target.value)
            formikProps.setFieldValue(get(fieldProps, 'name'), event.target.value, false);
    };
    console.log(value);
    return (React__default__default.createElement(FormControl, __assign$1({}, formControlProps),
        label &&
            (React__default__default.createElement(InputLabel, __assign$1({ id: labelId }, inputLabelProps), label)),
        React__default__default.createElement(Select, __assign$1({ labelId: labelId, id: fieldConfig.id, value: value, onChange: onChange, error: error }, selectProps),
            (emptyItem) &&
                (React__default__default.createElement(MenuItem, __assign$1({ value: '' }, menuItemProps, emptyMenuItemProps), emptyItemText)),
            map(list, function (item, index) { return (React__default__default.createElement(MenuItem, __assign$1({}, menuItemProps, { key: fieldConfig.id + "_menu_item_" + index, value: item.value }), item.name)); })),
        React__default__default.createElement(FormHelperText, null, helperText)));
};

// import { isArray, map } from 'lodash';
// let ComponentMapConfig: { [key: string]: { component: JSX.Element, props?: object } } = {}; 
// export const attachField = (type: Array<string> | string, component: JSX.Element, props?: object) => { 
//     if (isArray(type)) {
//         map(type, item => ComponentMapConfig[item] = { component, props })
//     } else
//         ComponentMapConfig[type] = { component, props };
// }
attachField('date-picker-new', React__default__default.createElement(MUIDatePicker$1, null), { variant: 'inline', label: 'Select Date' });
attachField('time-picker-new', React__default__default.createElement(MUITimePicker$1, null), { variant: 'inline', label: 'Select Time' });
attachField('time-picker-select-new', React__default__default.createElement(MUIDropDownTimePicker$1, null));

var index = './lib';

export default index;
export { MUIDatePicker$1 as MUIDatePicker, MUIDropDownTimePicker$1 as MUIDropDownTimePicker, MUITimePicker$1 as MUITimePicker };
//# sourceMappingURL=index.es.js.map