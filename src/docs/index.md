# Introduction

Laravel Query Adapter was created for developers to build a query filter, select, or sortBy from data URL on request. This package was specifically created to meet the need for integration between [Framework Laravel](https://laravel.com)  with [DataGrid - DevExtream](https://js.devexpress.com/Overview/DataGrid/). But generally, `QueryAdapter` can use without DataGrid on your frontend. 

Class `QueryAdapter` on this package is an instance of Eloquent Builder class by default Laravel. This means you can use another method from the default Eloquent model to build a query to get data as needed.
  
# Features
* Get specific data by field name on a model table.
* Filter data with multiple condition options, conjunctions, grouping conditions, and relation field names.
* Sort data by specific field name or related data, and
* Setup request params to handle the Laravel paginate function.

