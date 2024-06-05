<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Mix extends Model implements Auditable
{
   use \OwenIt\Auditing\Auditable;
   
   protected $table = 'mix';
   protected $fillable = ['name', 'jp_name', 'words', 'jp_words', 'notes', 'url_alias', 'examples'];
}
