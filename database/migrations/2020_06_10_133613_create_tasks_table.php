<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class CreateTasksTable extends Migration
{
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('project_id')->nullable();
            $table->string('name');
            $table->longText('desc')->nullable();
            $table->boolean('focus')->default(0);
            $table->boolean('completed')->default(0);
            $table->date('due_date')->nullable();
            $table->boolean('inbox')->default(0);
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
