<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class CreateOutcomesTable extends Migration
{
    public function up()
    {
        Schema::create('outcomes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id');
            $table->string('name');
            $table->double('amount');
            $table->date('date');
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('outcomes');
    }
}
