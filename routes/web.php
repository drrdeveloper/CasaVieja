<?php

use Illuminate\Support\Facades\Route;

// PÁGINA PRINCIPAL

Route::get('/', function () {
    echo '<script>window.location.href = "es"; </script>';
})->name('home');

Route::get('/es', function () {
    echo '<script>var currentView = "home"; </script>';
    echo '<script>var currentLang = "es"; </script>';
     return view('app');
})->name('home');

Route::get('/es/about', function () {
    echo '<script>var currentView = "about"; </script>';
    echo '<script>var currentLang = "es"; </script>';
     return view('app');
})->name('about');

Route::get('/es/booking', function () {
    echo '<script>var currentView = "reserva"; </script>';
    echo '<script>var currentLang = "es"; </script>';
     return view('app');
})->name('reserva');


Route::get('/en', function () {
    echo '<script>var currentView = "home"; </script>';
    echo '<script>var currentLang = "en"; </script>';
     return view('app');
})->name('homeEN');

Route::get('/login', function () {
    echo '<script>var currentView = "login"; </script>';
    echo '<script>var currentLang = "es"; </script>';
     return view('app');
})->name('login');

Route::get('/tools/register', function () {
    echo '<script>var currentView = "registro"; </script>';
    echo '<script>var currentLang = "es"; </script>';
     return view('privado');
})->name('register');

