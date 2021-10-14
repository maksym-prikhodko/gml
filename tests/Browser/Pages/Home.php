<?php
namespace Tests\Browser\Pages;
use Laravel\Dusk\Browser;
class Home extends Page
{
    public function url()
    {
        return '/home';
    }
    public function assert(Browser $browser)
    {
        $browser->waitForLocation($this->url())->assertPathIs($this->url());
    }
    public function elements()
    {
        return [
            '@navbar-toggle' => '.navbar .navbar-toggler',
            '@navbar-dropdown-toggle' => '.navbar-nav.ml-auto .dropdown-toggle',
        ];
    }
    public function clickLogout($browser)
    {
        $browser->click('@navbar-toggle') 
            ->waitFor('@navbar-dropdown-toggle')
            ->click('@navbar-dropdown-toggle') 
            ->waitForText('Logout')
            ->clickLink('Logout')
            ->pause(100);
    }
}
