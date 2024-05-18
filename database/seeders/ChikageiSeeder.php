<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChikageiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('chikagei')->insert([
            'name' => 'Thunder Snake',
            'jp_name' => 'サンダースネーク',
        ]);
    }
}
