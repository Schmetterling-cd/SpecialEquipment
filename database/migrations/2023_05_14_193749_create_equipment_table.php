<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('equipment', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('equipment_type_id');
            $table->string('name');
            $table->integer('coast');
            $table->binary('photo');
            $table->dateTime('update_at');
            $table->dateTime('create_at');
            $table->timestamps();
        });

        Schema::create('equipment_type', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->dateTime('update_at');
            $table->dateTime('create_at');
            $table->timestamps();
        });

        Schema::create('equipment_type_specializations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('equipment_type_id');
            $table->dateTime('update_at');
            $table->dateTime('create_at');
            $table->timestamps();
        });

        Schema::create('equipment_specializations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('equipment_type_spec_id');
            $table->foreignId('equipment_id');
            $table->string('value');
            $table->dateTime('update_at');
            $table->dateTime('create_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('equipment');
    }
};
