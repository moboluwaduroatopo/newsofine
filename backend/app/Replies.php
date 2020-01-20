<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Replies extends Model
{
    //
    protected $fillable = [
        'reply_name','reply_comment','post_id'
    ];
}
