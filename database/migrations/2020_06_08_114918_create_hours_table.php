<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class CreateHoursTable extends Migration
{
    public function up()
    {
        Schema::create('hours', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id');
            $table->string('name');
            $table->datetime('start');
            $table->datetime('end');
            $table->double('hours');
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('hours');
    }
}
