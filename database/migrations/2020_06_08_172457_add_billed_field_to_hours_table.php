<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class AddBilledFieldToHoursTable extends Migration
{
    public function up()
    {
        Schema::table('hours', function (Blueprint $table) {
            $table->boolean('billable')->default(0);
            $table->boolean('pending')->default(0);
        });
    }
    public function down()
    {
        Schema::table('hours', function (Blueprint $table) {
            $table->dropColumn('billable');
            $table->dropColumn('pending');
        });
    }
}
