<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class AddFieldsToProjectsTable extends Migration
{
    public function up()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->boolean('focus')->default(1);
        });
    }
    public function down()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn('focus');
        });
    }
}
