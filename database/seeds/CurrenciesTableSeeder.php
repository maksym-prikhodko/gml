<?php
use Illuminate\Database\Seeder;
use App\Currency;
class CurrenciesTableSeeder extends Seeder
{
    public function run()
    {
      Currency::truncate();
      DB::table('currencies')->insert(
        [
          'name' => 'Euro',
          'code' => 'EUR',
          'symbol' => '€',
          'format' => '1.0,00 €',
          'exchange_rate' => 1,
          'active' => 1,
        ]
      );
      DB::table('currencies')->insert(
        [
          'name' => 'US Dollar',
          'code' => 'USD',
          'symbol' => '$',
          'format' => '$1,0.00',
          'exchange_rate' => 1,
          'active' => 1,
        ]
      );
      DB::table('currencies')->insert(
        [
          'name' => 'Pound Sterling',
          'code' => 'GBP',
          'symbol' => '£',
          'format' => '£1,0.00',
          'exchange_rate' => 1,
          'active' => 1,
        ]
      );
      DB::table('currencies')->insert(
        [
          'name' => 'Canadian Dollar',
          'code' => 'CAD',
          'symbol' => '$',
          'format' => '$1,0.00',
          'exchange_rate' => 1,
          'active' => 1,
        ]
      );
      DB::table('currencies')->insert(
        [
          'name' => 'Australian Dollar',
          'code' => 'AUD',
          'symbol' => '$',
          'format' => '$1,0.00',
          'exchange_rate' => 1,
          'active' => 1,
        ]
      );
      DB::table('currencies')->insert(
        [
          'name' => 'Swedish Krona',
          'code' => 'SEK',
          'symbol' => 'kr',
          'format' => '1 0,00 kr',
          'exchange_rate' => 1,
          'active' => 1,
        ]
      );
      DB::table('currencies')->insert(
        [
          'name' => 'Indian Rupee',
          'code' => 'INR',
          'symbol' => '₹',
          'format' => '1,0.00₹',
          'exchange_rate' => 1,
          'active' => 1,
        ]
      );
      DB::table('currencies')->insert(
        [
          'name' => 'China Yuan Renminbi',
          'code' => 'CNY',
          'symbol' => '¥',
          'format' => '¥1,0.00',
          'exchange_rate' => 1,
          'active' => 1,
        ]
      );
      DB::table('currencies')->insert(
        [
          'name' => 'Russian Ruble',
          'code' => 'RUB',
          'symbol' => '₽',
          'format' => '1 0,00 ₽',
          'exchange_rate' => 1,
          'active' => 1,
        ]
      );
    }
}
