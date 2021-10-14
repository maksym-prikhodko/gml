<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Outcome extends Model
{
    public function project()
    {
        return $this->belongsTo('App\Project')->withDefault();
    }
}
