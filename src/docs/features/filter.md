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
```json
['field_name','condition','value']
```
The condition already supported for this package can see in the next section by filtering data type.

### Multiple Conditions

If you want to add multiple conditions, enough to make the request filter data a multidimensional array. Look example:
```json
[['field_name','condition','value'],'conjungtion',['field_name','condition','value']]
```

Between the two existing conditions, there is a conjunction. A conjunction is an operator is used to filter records based on more than one condition:

| Conjunction | Query Result |
|--|--|
| and | `where('fieldName','like','%value%')` |
| or | `orWhere('fieldName','like','value')` |
| ! | `where('fieldName','not like','value%')` |

### Build Query

```link
https://example.com/user?filter=['name','contains','jee']
```
and use `QueryAdapter` on your controller to handle the request
```php

use GhoniJee\DxAdapter\QueryAdapter;

$data = QueryAdapter::for(User::class)->get()

```
That request will generate/build a query to get user data that contains "jee" on their name.

## String Filter

Coming soon

### Condition

## Numeric Filter

Coming soon

### Condition

## Date Filter

Coming soon

### Condition

## Boolean Filter

Coming soon

### Condition

## Null Filter

Coming soon

### Condition

## Relation Filter

Coming soon

### Condition