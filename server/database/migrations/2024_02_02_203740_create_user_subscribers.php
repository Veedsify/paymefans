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
        Schema::create('user_subscribers', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('subscriber_id');
            $table->string('subscribe_status')->default("active");
            $table->string('subscriber_duration');
            $table->string('subscriber_start_date');
            $table->string('subscriber_end_date');
            $table->string('subscribtion_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_subscribers');
    }
};
