<?php
use App\Client;
use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
$factory->define(Client::class, function (Faker $faker) {
    return [
        'user_id' => User::all()->random()->id,
        'name' => $faker->name,
    ];
});
