<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class CreateMitsTable extends Migration
{
    public function up()
    {
        Schema::create('mits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->date('day');
            $table->string('name');
            $table->integer('order')->default(0);
            $table->boolean('completed')->default(0);
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('mits');
    }
}
