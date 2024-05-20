<?php

use App\Http\Controllers\ChikageiController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\MixController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [IndexController::class, 'index']);
Route::resource('chikagei', ChikageiController::class)->except(['create', 'edit', 'show']);
Route::get('/chikagei/{alias}', [ChikageiController::class, 'show'])->where('alias', '.*')->name('chikagei.show');
Route::resource('mix', MixController::class)->except(['create', 'edit', 'show']);
Route::get('/mix/{alias}', [MixController::class, 'show'])->where('alias', '.*')->name('mix.show');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', fn () => Inertia::render('Admin/Dashboard'))->name('dashboard');
});

Route::fallback(fn () => Inertia::render('Public/404'));
