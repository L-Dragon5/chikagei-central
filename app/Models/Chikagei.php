<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Chikagei extends Model
{
    protected $table = 'chikagei';
    protected $fillable = ['name', 'jp_name', 'notes'];
    
    public function examples(): HasMany
    {
        return $this->hasMany(ChikageiExample::class);
    }
}
