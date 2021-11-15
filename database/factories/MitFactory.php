<?php
use App\Mit;
use App\User;
use Faker\Generator as Faker;
use Carbon\Carbon;
$factory->define(Mit::class, function (Faker $faker) {
    $user = User::all()->random();
    return [
        'user_id' => $user->id,
        'day' => Carbon::now()->startOfWeek()->add(rand(0,7), 'days')->format('Y-m-d'),
        'name' => $faker->sentence(rand(3,5)),
        'order' => rand(0,10),
    ];
});
