<?php
namespace App\Http\Controllers;
use App\Outcome;
use Illuminate\Http\Request;
class OutcomeController extends Controller
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
    public function show(Outcome $outcome)
    {
    }
    public function edit(Outcome $outcome)
    {
    }
    public function update(Request $request, Outcome $outcome)
    {
    }
    public function destroy(Outcome $outcome)
    {
    }
}
