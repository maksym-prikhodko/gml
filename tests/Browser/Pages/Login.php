<?php
namespace Tests\Browser\Pages;
class Login extends Page
{
    public function url()
    {
        return '/login';
    }
    public function submit($browser, $email, $password)
    {
        $browser->type('email', $email)
                ->type('password', $password)
                ->press('Log In')
                ->pause(500);
    }
}
