<?php
return [
    'default' => 'EUR',
    'api_key' => '',
    'driver' => 'database',
    'cache_driver' => null,
    'drivers' => [
        'database' => [
            'class' => \Torann\Currency\Drivers\Database::class,
            'connection' => null,
            'table' => 'currencies',
        ],
        'filesystem' => [
            'class' => \Torann\Currency\Drivers\Filesystem::class,
            'disk' => null,
            'path' => 'currencies.json',
        ],
    ],
    'formatter' => null,
    'formatters' => [
        'php_intl' => [
            'class' => \Torann\Currency\Formatters\PHPIntl::class,
        ],
        'currency_formatter' => [
            'class' => \App\Currency\CurrencyFormatter::class,
            'append_code' => true,
        ],
    ],
];
