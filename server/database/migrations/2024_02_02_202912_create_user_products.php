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
        Schema::create('user_products', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('product_id');
            $table->string('product_name');
            $table->string('product_description');
            $table->string('product_price');
            $table->string('product_image');
            $table->string('product_category');
            $table->string('product_status')->default("active");
            $table->string('product_type');
            $table->string('product_quantity');
            $table->string('product_location');
            $table->string('product_currency');
            $table->string('product_shipping');
            $table->string('product_shipping_fee');
            $table->string('product_shipping_time');
            $table->string('product_shipping_location');
            $table->string('product_shipping_currency');
            $table->string('product_shipping_type');
            $table->string('product_shipping_status')->default("active");
            $table->string('product_shipping_quantity');
            $table->json('product_colors');
            $table->json('product_sizes');
            $table->json('product_images');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_products');
    }
};
