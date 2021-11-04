# Instalation

### Install from composer package manager:

```script
composer require ghonijee/query-adapter
```

### How to use
* If you are use DataGrid by DevExtream table, request data will generate by DataGrid. just load the model to QueryAdapter class on the controller to handle request.
```php

use GhoniJee\DxAdapter\QueryAdapter;

$data = QueryAdapter::for(User::class)->get()

```

* Build custom query without DataGrid, by send data from request
```link
https://example.com/user?filter=['name','contains','jee']
```
and use `QueryAdapter` on your controller to handle the request
```php

use GhoniJee\DxAdapter\QueryAdapter;

$data = QueryAdapter::for(User::class)->get()

```
that request will generate/build query to get user data with contains "jee" on their name.