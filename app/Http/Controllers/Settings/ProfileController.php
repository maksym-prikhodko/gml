<?php
namespace App\Http\Controllers\Settings;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
class ProfileController extends Controller
{
    public function update(Request $request)
    {
        $user = $request->user();
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email,'.$user->id,
        ]);
        return tap($user)->update($request->only('name', 'email'));
    }
}
