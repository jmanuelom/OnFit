<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/{pathMatch}', function() {
    return view('welcome');
})->where('pathMatch', ".*");

Route::get('/list', function() {
    return view('welcome');
});

Route::get('/nuevaVista', function() {
    return view('welcome');
});

Route::get('/home', function() {
    return view('welcome');
});