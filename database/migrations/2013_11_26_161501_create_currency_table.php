<?php
use Illuminate\Database\Migrations\Migration;
class CreateCurrencyTable extends Migration
{
    protected $table_name;
    public function __construct()
    {
        $this->table_name = config('currency.drivers.database.table');
    }
    public function up()
    {
        Schema::create($this->table_name, function ($table) {
            $table->increments('id')->unsigned();
            $table->string('name');
            $table->string('code', 10)->index();
            $table->string('symbol', 25);
            $table->string('format', 50);
            $table->string('exchange_rate');
            $table->boolean('active')->default(false);
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::drop($this->table_name);
    }
}
