<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/bank', function () {
  return Inertia::render('Bank');
});

Route::get('/market', function () {
  return Inertia::render('Market');
});

Route::get('/socialmedia', function () {
  return Inertia::render('SocialMedia');
});

require __DIR__.'/auth.php';
