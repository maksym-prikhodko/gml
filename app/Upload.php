<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Multitenantable;
class Upload extends Model
{
    use Multitenantable;
    protected $fillable = [
        'order', 'name', 'filename', 'task_id',
    ];
    public function user()
    {
        return $this->belongsTo('App\User')->withDefault();
    }
    public function task()
    {
        return $this->belongsTo('App\Task')->withDefault();
    }
}
