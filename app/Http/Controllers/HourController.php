<?php
namespace App\Http\Controllers;
use App\Hour;
use Illuminate\Http\Request;
class HourController extends Controller
{
    public function index()
    {
        $this->middleware('auth');
    }
    public function create()
    {
    }
    public function store(Request $request)
    {
    }
    public function show(Hour $hour)
    {
    }
    public function edit(Hour $hour)
    {
    }
    public function update(Request $request, Hour $hour)
    {
    }
    public function destroy(Hour $hour)
    {
    }
}
