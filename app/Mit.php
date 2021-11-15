<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Multitenantable;
class Mit extends Model
{
    use Multitenantable;
    protected $fillable = [
        'name', 'day', 'order', 'completed'
    ];
    public function user()
    {
        return $this->belongsTo('App\User')->withDefault();
    }
}
