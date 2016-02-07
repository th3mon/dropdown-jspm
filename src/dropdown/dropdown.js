'use strict';
import $ from 'jquery';
import dropdownData from './dropdownData.json!';

var
    html = [
        '<div class="panel panel-default" style="margin:50px">',
            '<div class="panel-heading">',
                'Select:',
            '</div>',
            '<div class="panel-body">',
                '<select></select>',
            '</div>',
        '</div>'
    ].join(''),

    view = $(html).appendTo('body'),
    $select = view.find('select');

dropdownData.forEach(function(item) {
    var $item = $('<option></option>', {
        value: item.CustomerID,
        text: item.ContactName
    });

    $select.append($item);
});


const dropdown = {
    dropdown: $select,
    value: function () {
        return $select.find('option').length;
    }
};

export {dropdown};