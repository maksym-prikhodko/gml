<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Hour extends Model
{
    public function project()
    {
        return $this->belongsTo('App\Project')->withDefault();
    }
}
