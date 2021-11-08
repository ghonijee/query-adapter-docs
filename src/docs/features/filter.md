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

Kamu dapat melakukan filter data yang memiliki value string. Seperti menggunakan operator `LIKE` pada query `WHERE`. Hebatnya `QueryAdapter` mampu menyediakan beberapa kondisi untuk filter dengan value string. 

### Condition

| Condition | Query Builder |
:--|:--|
| contains | `where('fieldName','like','%value%')` |
| notcontains | `where('fieldName','not like','value')`|
| startswith | `where('fieldName','like','value%')` |
| endswith | `where('fieldName','like','%value')` |
| = | `where('fieldName', 'value%')` |
| != | `where('fieldName', '!=','value%')` |

Selain 5 kondisi teratas yang ada ditable tersebut, operator kondisi yang kamu kirimkan akan menjadi operator pada kondisi `where`.

### Example

#### Contains

``` link
https://example.com/user?filter=['name','contains','jee']
```

#### Other contion

``` link
https://example.com/user?filter=['name','<>','jee']
```


## Numeric Filter

Jika kamu ingin melalukan filter berdasarkan data dengan type numeric, seperti harga, umur, jumlah, dll. Tentu saja `QueryAdapter` dapat melakukannya berdasarkan request data yang kamu kirim. 

Kamu bisa menggunakan [comparison operators](https://www.w3schools.com/sql/sql_operators.asp) sebagai kondisi, seperti `= , !=, <, >, <=, >=, <>, etc`. QueryAdapter akan menggunakannya sebagai operator pada query `where`.

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