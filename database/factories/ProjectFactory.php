<?php
use App\Project;
use App\Client;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
$factory->define(Project::class, function (Faker $faker) {
    $client = Client::all()->random();
    return [
        'client_id' => $client->id,
        'user_id' => $client->user_id,
        'name' => $faker->name,
        'desired_price_hour' => '35',
        'hours_estimated' => rand(20,100),
        'type' => 'fixed',
        'total_price' => rand(3000,12000),
    ];
});
