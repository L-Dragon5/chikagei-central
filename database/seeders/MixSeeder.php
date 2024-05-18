<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MixSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('mix')->insert([
            [
                'name' => 'Standard MIX',
                'words' => 'Taigā―! Faiyā―! Saibā―! Faibā―! Daibā―! Baibā!

Jyā Jyā―!',
                'jp_words' => 'タイガー！ファイヤー！サイバー！ファイバー！ダイバー！バイバー！

ジャージャー！',
                'notes' => 'The first of the three foundation MIXs and consists of a Japanglish version of Tiger, Fire, Cyber, Fiber, Diver, and Viper. This MIX lasts for 16-beats.',
            ],
            [
                'name' => 'Standard MIX (Extended)',
                'words' => 'Taigā―! Faiyā―! Saibā―! Faibā―! Daibā―! Baibā

Jyā Jyā―! Faibō―! Waipā―!',
                'jp_words' => 'タイガー！ファイヤー！サイバー！ファイバー！ダイバー！バイバー！

ジャージャー！(ファイボー！ワイパー！)',
                'notes' => 'An extended version of the Standard MIX when the instrumental lasts longer than 16-beats. Depending the extra length, you can either extend it with “Faibō―! Waipā―!” or “Iettaiga―! Faibō―! Waipā―!”.',
            ],
        ]);
    }
}
