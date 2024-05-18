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
        Schema::create('chikagei_examples', function (Blueprint $table) {
            $table->id();
            $table->foreignId('chikagei_id');
            $table->string('name');
            $table->timestamps();

            $table->foreign('chikagei_id')->references('id')->on('chikagei');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chikagei_examples');
    }
};
