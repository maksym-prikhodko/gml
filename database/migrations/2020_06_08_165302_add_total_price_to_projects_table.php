<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class AddTotalPriceToProjectsTable extends Migration
{
    public function up()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->double('total_price')->after('type')->nullable();
        });
    }
    public function down()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn('total_price');
        });
    }
}
