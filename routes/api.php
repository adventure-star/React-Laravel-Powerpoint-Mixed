<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// public routes.
Route::middleware('api', 'cors')->group(function () {
   Route::post('/login', 'AuthController@login')->name('login.api');
   Route::post('/register', 'AuthController@register')->name('register.api');
});

// private routes
Route::middleware('auth:api')->group(function () {
   Route::get('/images/all', 'CommonController@images')->name('common.images.all.api');
   Route::get('/videos/all', 'CommonController@videos')->name('common.videos.all.api');
   Route::get('/texts/all', 'CommonController@texts')->name('common.texts.all.api');
   Route::get('/animations/all', 'CommonController@animations')->name('common.animations.all.api');
   Route::get('/presentations/all', 'CommonController@presentations')->name('common.presentations.all.api');
   Route::get('/linkvideos/all', 'CommonController@linkvideos')->name('common.linkvideos.all.api');
   Route::get('/lesson/recent', 'CommonController@recentLessons')->name('common.recent.lesson.api');
   Route::post('/lesson/create', 'CommonController@createLesson')->name('common.create.lesson.api');
   Route::get('/lesson/{id}', 'CommonController@getLessonById')->name('common.get.lesson.api')->middleware('lesson');
   Route::put('/lesson/{id}', 'CommonController@updateLesson')->name('common.update.lesson.api')->middleware('lesson');
   Route::get('/lessonhistory', 'CommonController@viewLessonHistory')->name('common.view.lesson.api');
   Route::get('/history/{id}', 'CommonController@getLessonHistoryById')->name('common.get.lesson.api');

   Route::post('/lesson/historycreate', 'CommonController@createLessonHistory')->name('common.create.lessonhistory.api');

   Route::post('/upload', 'CommonController@uploadResources')->name('common.upload.resources.api');

   Route::get('/logout', 'AuthController@logout')->name('logout.api');
});

// example routes
Route::middleware('auth:api')->get('/user', function (Request $request) {
   return $request->user();
});
