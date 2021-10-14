<?php
namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
class ResetPasswordController extends Controller
{
    use ResetsPasswords;
    public function __construct()
    {
        $this->middleware('guest');
    }
    protected function sendResetResponse(Request $request, $response)
    {
        return ['status' => trans($response)];
    }
    protected function sendResetFailedResponse(Request $request, $response)
    {
        return response()->json(['email' => trans($response)], 400);
    }
}
