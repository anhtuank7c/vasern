//================================================================
//
//  Copyright by Ambi Studio 2018
//  Licensed under the Apache License, Version 2.0 (the "License");
//  (Please find "LICENSE" file attached for license details)
//================================================================


import _ from 'lodash';

// Queryable is an abstraction class
// that is used for querying data
export class Queryable {

    static methods = [
        'filter', 'exclude', 'data', 
        'get', 'find', 'similarTo', 
        'group', 'order', '_queryable',
        'count'
        
    ]

    constructor(data) {
        Object.defineProperty(this, '_data', {
            value: data,
            writable: false
        });
    }

    completed = false;
    available = false;
    _data = [];
    
    // Return all data
    data() {
        return this._data;
    }

    // Create a new Queryable object from
    // a list of data
    _queryable(data) {
        return new Queryable(data);
    }

    // Remove a record from _data
    _removeRecord(query) {

        if (typeof(query) == "object" && (!query.id || Object.keys(query) > 1)) {
            // Allow user to remove only one object and only using ID
            return false;
        }

        if (typeof(query) == "string") {
            query = { id: query }
        }
        return _.remove(this._data, query);
    }

    // Return a record object
    // found by query
    // @query<string|object>
    //  - as <string>: return a record object with id matched
    //  - as <object>: return a record object that match with query "key" and "value"
    get(query) {
        if (typeof(query) == "string") {
            query = { id: query }
        }
        return _.find(this._data, query);
    }

    // (Similar to get, except "query" can only be an object)
    // Return a record object found by "query"
    // @query<object>: Return a record object that match with query "key" and "value" 
    find(query) {
        return _.find(this._data, query);
    }

    // Return a new Queryable object that data have properties and values that match with query
    // @query<object>: Return a new Queryable object
    filter(query) {
        var data = _.filter(this._data, query);
        return this._queryable(data);
    }

    // Search through data list with data with property that matched or contains "value"
    // (Case insensitive)
    // @prop<string>: record's property name
    // @value<string>: search value
    // Return a list of found records
    similarTo(prop, value) {
        let result = [];
        Object.keys(prop).forEach(k => {
            this.data().forEach(dObj => {
                
                // TODO: search for different types (date/reference/etc.)

                if (dObj[k].toLowerCase().indexOf(value.toLowerCase()) != -1) {
                    result.push(dObj);
                }
            })
        })
        return result;
    }

    // Return a new Queryable object that not contains any record that match with "query"
    // @query<object>
    exclude(query) {
        var data = _.reject(this._data, query);
        return this._queryable(data);
    }

    // Group data by property name and return an array of data or custom array (using transfrom)
    // @key: data property name
    // @transfrom(key, data): (*optional) result object format object
    //      + @key: grouped data key/property name
    //      + @data: grouped data whose match @key
    group(key, tranform) {
        var data = _.groupBy(this._data, key);

        if (tranform) {
            var groups = Object.keys(data);
            var transformedResults = groups.map( key => {
                return tranform(key, data[key]);
            })
            return transformedResults;
        }
        return this._queryable(data);
    }

    order(key, order: "asc" | "des" = "asc") {
        return this._queryable(_.orderBy(this._data, key, order));
    }

    count() {
        return this._data.length;
    }
}