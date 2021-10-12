<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    public function histories()
    {
        return $this->hasMany(LessonHistory::class, 'lesson_id', 'id');
    }
}
