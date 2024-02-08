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
        Schema::create('user_model_settings', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('model_name');
            $table->string('model_status')->default("inactive");
            $table->string('model_verified')->default("unverified");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_model_settings');
    }
};
