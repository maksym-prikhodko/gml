<?php
namespace App\Currency\Formatters;
use Torann\Currency\Contracts\FormatterInterface;
class CurrencyFormatter implements FormatterInterface
{
    protected $config;
    public function __construct(array $config = [])
    {
        $this->config = $config;
    }
    public function format($value, $code = null)
    {
        return $value . ($this->config['append_code'] === true ? $code : '');
    }
}
