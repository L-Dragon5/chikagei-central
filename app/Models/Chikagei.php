<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Chikagei extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;

    protected $table = 'chikagei';
    protected $fillable = ['name', 'jp_name', 'notes', 'url_alias', 'examples'];
}
