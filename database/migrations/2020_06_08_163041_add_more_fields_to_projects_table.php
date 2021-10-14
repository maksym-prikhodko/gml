<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class AddMoreFieldsToProjectsTable extends Migration
{
    public function up()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->string('type')->default('fixed');
            $table->integer('hours_estimated');
            $table->double('desired_price_hour')->default('30');
            $table->date('date_start_estimated')->nullable();
            $table->date('date_end_estimated')->nullable();
            $table->date('date_start')->nullable();
            $table->date('date_end')->nullable();
        });
    }
    public function down()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn('type');
            $table->dropColumn('hours_estimated');
            $table->dropColumn('desired_price_hour');
        });
    }
}
