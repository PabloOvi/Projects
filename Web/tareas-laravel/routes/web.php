<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TasksController;
use App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/',[TasksController::class, 'index'])->name('task');

Route::get('/task',[TasksController::class, 'index'])->name('task');

Route::post('/task',[TasksController::class, 'store'])->name('task');

Route::get('/task/{id}',[TasksController::class, 'show'])->name('task-show');
Route::patch('/task/{id}',[TasksController::class, 'update'])->name('task-update');

Route::delete('/task/{id}',[TasksController::class, 'destroy'])->name('task-destroy');

