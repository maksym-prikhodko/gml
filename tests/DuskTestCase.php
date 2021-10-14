<?php
namespace Tests;
use Facebook\WebDriver\Chrome\ChromeOptions;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Laravel\Dusk\Page;
use Laravel\Dusk\TestCase as BaseTestCase;
Browser::macro('assertPageIs', function ($page) {
    if (! $page instanceof Page) {
        $page = new $page;
    }
    return $this->waitForLocation($page->url())->assertPathIs($page->url());
});
abstract class DuskTestCase extends BaseTestCase
{
    use DatabaseMigrations;
    use CreatesApplication;
    public static function prepare()
    {
        static::startChromeDriver();
    }
    protected function driver()
    {
        $options = (new ChromeOptions)->addArguments([
            '--disable-gpu',
            '--headless',
        ]);
        return RemoteWebDriver::create(
            'http:
                ChromeOptions::CAPABILITY, $options
            )
        );
    }
}
