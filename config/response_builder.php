<?php
return [
    'min_code'          => 100,
    'max_code'          => 1024,
    'map' => [
        \App\ApiCode::SOMETHING_WENT_WRONG => 'api.something_went_wrong',
    ],
    'converter'         => [
        \Illuminate\Database\Eloquent\Model::class          => [
            'handler' => \MarcinOrlowski\ResponseBuilder\Converters\ToArrayConverter::class,
            'pri'     => 0,
        ],
        \Illuminate\Support\Collection::class               => [
            'handler' => \MarcinOrlowski\ResponseBuilder\Converters\ToArrayConverter::class,
            'pri'     => 0,
        ],
        \Illuminate\Database\Eloquent\Collection::class     => [
            'handler' => \MarcinOrlowski\ResponseBuilder\Converters\ToArrayConverter::class,
            'pri'     => 0,
        ],
        \Illuminate\Http\Resources\Json\JsonResource::class => [
            'handler' => \MarcinOrlowski\ResponseBuilder\Converters\ToArrayConverter::class,
            'pri'     => 0,
        ],
        \JsonSerializable::class                            => [
            'handler' => \MarcinOrlowski\ResponseBuilder\Converters\JsonSerializableConverter::class,
            'pri'     => -10,
        ],
        \Illuminate\Contracts\Support\Arrayable::class      => [
            'handler' => \MarcinOrlowski\ResponseBuilder\Converters\ArrayableConverter::class,
            'pri'     => -10,
        ],
    ],
    'exception_handler' => [
        'map' => [
        ],
    ],
    'encoding_options'  => JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_AMP | JSON_HEX_QUOT | JSON_UNESCAPED_UNICODE,
    'debug'             => [
        'debug_key'         => 'debug',
        'exception_handler' => [
            'trace_key'     => 'trace',
            'trace_enabled' => env('APP_DEBUG', false),
        ],
    ],
];
