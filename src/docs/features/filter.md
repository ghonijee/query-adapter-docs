# Filtering

Laravel Query Adapter can build query `where` for filtering data on the model based on data sent by request. By default, `QueryAdapter` will read request data with keyword `filter`, but this keyword can be config from `config/dx-adapter.php`.

```php
// config/dx-adapter.php
return [
    'request' => [
        'filter' => 'filter', // change this value to custom keyword
    ],
];
```

## Basic Usage

### Format

Request format to build data filter query can be seen in the example below this:
```
['field_name','condition','value']
```
The condition already supported for this package can see in the next section by filtering data type.

### Multiple Conditions

If you want to add multiple conditions, enough to make the request filter data a multidimensional array. Look example:
```
[['field_name','condition','value'],'conjungtion',['field_name','condition','value']]
```

Between the two existing conditions, there is a conjunction. A conjunction is an operator is used to filter records based on more than one condition:

| Conjunction | Query Result |
|--|--|
| and | `where('fieldName','like','%value%')` |
| or | `orWhere('fieldName','like','value')` |
| ! | `where('fieldName','not like','value%')` |

### Build Query

``` link
https://example.com/user?filter=['name','contains','jee']
```
and use `QueryAdapter` on your controller to handle the request
```php

use GhoniJee\DxAdapter\QueryAdapter;

$data = QueryAdapter::for(User::class)->get()

```
That request will generate/build a query to get user data that contains "jee" on their name.


## String Filter

You can use a QueryAdapter to filter data by string values. Like using the query operator `LIKE` with the condition `WHERE`. Of course, `QueryAdapter` can build a query with some option condition.

### Condition

| Condition | Query Builder |
:--|:--|
| contains | `where('fieldName','like','%value%')` |
| notcontains | `where('fieldName','not like','value')`|
| startswith | `where('fieldName','like','value%')` |
| endswith | `where('fieldName','like','%value')` |

As previously mentioned, you may use any operator that is supported by your database. That operator will be assigned to `WHERE` condition.

### Example

#### Contains

``` php
// GET => https://example.com/user?filter=['name','contains','jee']

->where('name','LIKE','%jee%')
```

#### Other condition

``` php
// GET => https://example.com/user?filter=['name','!=','jee']

->where('name','!=','jee')
```


## Numeric Filter

You want to do filter data by numeric value, like filter data by price, age, amount, etc. Of course, this package can do that from params data on your request.

You can use [comparison operators](https://www.w3schools.com/sql/sql_operators.asp) as filter condition, like `=, !=, <, >, <=, >=, <>, etc`. `QueryAdapter` will use the contion as operator on query `WHERE`. 

### Example

#### Equal (=)

``` php
// GET => https://example.com/user?filter=['age','=', 20]

->where('age', '=',20)
```

#### Less than or equal to (<=)

``` php
// GET => https://example.com/product?filter=['price','<=','100000']

->where('price', '<=',100000)
```

## Date Filter

Sometimes we need to filter data by date like we want to get a list of users created on a specific date. `QueryAdapter` can help you build a query to filter data from a field or data with a date value.

You can use several conditions to filter data by date type.

### Condition

| Condition | Query Builder |
:--|:--|
| = | `where('fieldName',''21-09-2021'')` |
| < | `whereDate('fieldName','<', '22-08-2021')`|

## Boolean Filter

Coming soon

### Condition

## Null Filter

Coming soon

### Condition

## Relation Filter

Coming soon

### Condition