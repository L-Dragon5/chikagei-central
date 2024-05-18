<?php

use App\Http\Controllers\ChikageiController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\MixController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [IndexController::class, 'index']);
Route::resource('chikagei', ChikageiController::class);
Route::resource('mix', MixController::class);

Route::fallback(function () {
    return Inertia::render('Public/404');
});
