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
        Schema::table('chikagei', function (Blueprint $table) {
            $table->string('url_alias')->nullable();
        });

        Schema::table('mix', function (Blueprint $table) {
            $table->string('url_alias')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('chikagei', function (Blueprint $table) {
            $table->dropColumn('url_alias');
        });

        Schema::table('mix', function (Blueprint $table) {
            $table->dropColumn('url_alias');
        });
    }
};
