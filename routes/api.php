<?php
use Illuminate\Support\Facades\Route;
Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', 'Auth\LoginController@logout');
    Route::get('/user', 'Auth\UserController@current');
    Route::patch('settings/profile', 'Settings\ProfileController@update');
    Route::patch('settings/password', 'Settings\PasswordController@update');
    Route::resource('projects', 'ProjectController');
    Route::get('/fetch/projects', 'ProjectController@fetch')->name('projects.fetch');
    Route::post('/update/project/focus', 'ProjectController@toggleFocus')->name('projects.update.focus');
    Route::post('/update/project/archive', 'ProjectController@toggleArchive')->name('projects.update.archive');
    Route::post('/order/projects', 'ProjectController@order')->name('projects.order');
    Route::post('/project/raw', 'ProjectController@fetchRaw')->name('projects.raw');
    Route::resource('clients', 'ClientController');
    Route::get('/fetch/clients', 'ClientController@fetch')->name('clients.fetch');
    Route::get('/fetch/select/clients', 'ClientController@fetchForSelect')->name('clients.fetch.select');
    Route::resource('tasks', 'TaskController');
    Route::post('/fetch/projects/tasks', 'TaskController@fetch')->name('project.tasks.fetch');
    Route::post('/order/tasks', 'TaskController@order')->name('project.tasks.order');
    Route::post('/update/task/focus', 'TaskController@toggleFocus')->name('tasks.update.focus');
    Route::post('/update/task/completed', 'TaskController@toggleCompleted')->name('tasks.update.completed');
});
Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');
    Route::post('email/verify/{user}', 'Auth\VerificationController@verify')->name('verification.verify');
    Route::post('email/resend', 'Auth\VerificationController@resend');
    Route::post('oauth/{driver}', 'Auth\OAuthController@redirectToProvider');
    Route::get('oauth/{driver}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');
});
