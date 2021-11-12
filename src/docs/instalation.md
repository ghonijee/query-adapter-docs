# Instalation

## Requirements

* PHP `7.4|8.0`
* Laravel `^6.0`

## Install

```script
composer require ghonijee/query-adapter
```

## How to use

* If you are using DataGrid by DevExtream table, request data will generate by DataGrid. just load the model to QueryAdapter class on the controller to handle the request.
```php

use GhoniJee\DxAdapter\QueryAdapter;

$data = QueryAdapter::for(User::class)->get()

```

* Build custom query without DataGrid, by sending data from the request.
```
https://example.com/user?filter=['name','contains','jee']
```
and use `QueryAdapter` on your controller to handle the request
```php

use GhoniJee\DxAdapter\QueryAdapter;

$data = QueryAdapter::for(User::class)->get()

```
That request will generate/build a query to get user data that contains "jee" on their name.

## Publish Config

The package will automatically register its service provider and config, but you can optionally publish the config file with:

```bash
php artisan vendor:publish --provider="GhoniJee\DxAdapter\DxAdapterServiceProvider" 
```

After publish the config, you can customize request key and query for `QueryAdapter`.