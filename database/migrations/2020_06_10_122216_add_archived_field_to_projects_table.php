<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class AddArchivedFieldToProjectsTable extends Migration
{
    public function up()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->boolean('archived')->default(0);
        });
    }
    public function down()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn('archived');
        });
    }
}
