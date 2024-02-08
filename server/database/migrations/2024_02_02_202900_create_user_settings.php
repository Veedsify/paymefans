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
        Schema::create('user_settings', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('bio');
            $table->string('profile_photo');
            $table->string('banner_image');
            $table->string('location');
            $table->string('message_amount');
            $table->boolean('free_messages')->default(false);
            $table->boolean('available_for_hookups')->default(false);
            $table->boolean('enable_free_subscription')->default(false);
            $table->string('subscription_amount');
            $table->string('setting_value');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_settings');
    }
};
