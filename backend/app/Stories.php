<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stories extends Model
{
    protected $fillable = [
        'stories_name','story_image','story_image1','story_image2','scomment'
    ];
}
