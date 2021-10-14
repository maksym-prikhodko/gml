<?php
use App\Task;
use App\Project;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
$factory->define(Task::class, function (Faker $faker) {
    $projects = Project::all()->random();
    return [
        'project_id' => $projects->id,
        'user_id' => $projects->user_id,
        'name' => $faker->sentence(rand(3,5)),
        'desc' => $faker->sentence(rand(10, 50)),
        'focus' => rand(0,1),
    ];
});
