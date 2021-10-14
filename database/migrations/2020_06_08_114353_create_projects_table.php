<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class CreateProjectsTable extends Migration
{
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('client_id');
            $table->string('name');
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
