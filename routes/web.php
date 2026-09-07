<?php

use Illuminate\Support\Facades\Route;

// Monthsary Gift Website - Default Homepage
Route::get('/', function () {
    return view('monthsary');
});

// Keep the monthsary route as well for compatibility
Route::get('/monthsary', function () {
    return view('monthsary');
});
