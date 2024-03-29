<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;


Route::prefix('auth')->group(function(){
    Route::post("register", [AuthController::class, 'register'])->name("new.register");
});
