<?php
namespace Tests\Browser\Pages;
class Register extends Page
{
    public function url()
    {
        return '/register';
    }
    public function submit($browser, array $data = [])
    {
        foreach ($data as $key => $value) {
            $browser->type($key, $value);
        }
        $browser->press('Register')
            ->pause(1000);
    }
}