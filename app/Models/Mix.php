<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Mix extends Model
{
   protected $table = 'mix';
   protected $fillable = ['name', 'jp_name', 'words', 'jp_words', 'notes'];
}
