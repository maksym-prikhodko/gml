<?php
namespace Tests\Browser\Pages;
use Laravel\Dusk\Browser;
use Laravel\Dusk\Page as BasePage;
abstract class Page extends BasePage
{
    public function assert(Browser $browser)
    {
        $browser->assertPathIs($this->url());
    }
    public static function siteElements()
    {
        return [
            '@element' => '#selector',
        ];
    }
}
