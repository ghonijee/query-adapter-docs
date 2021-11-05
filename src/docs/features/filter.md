# Filtering

Laravel Query Adapter can build query `where` for filtering data on the model based on data sent by request. By default, `QueryAdapter` will read request data with keyword `filter`, but this keyword can be config from `config/dx-adapter.php`.

```php
// config/dx-adapter.php
return [
    'request' => [
        'filter' => 'filter', // change this value to custom keyword
    ],
    'query' => [
        'contains' => 'LIKE'
    ]
];
```

## Basic Usage

### Format

Request format to build data filter query can be seen in the example below this:
```json
['field_name','condition','value']
```
The condition already supported for this package can see in the next section by filtering data type.

### Multi Filtering

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

## String Filter

### Condition

## Numeric Filter

### Condition

## Date Filter

### Condition

## Boolean Filter

### Condition

## Null Filter

### Condition

## Relation Filter

### Condition