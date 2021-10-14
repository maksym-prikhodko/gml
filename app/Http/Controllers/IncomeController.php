<?php
namespace App\Http\Controllers;
use App\Income;
use Illuminate\Http\Request;
class IncomeController extends Controller
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
    public function show(Income $income)
    {
    }
    public function edit(Income $income)
    {
    }
    public function update(Request $request, Income $income)
    {
    }
    public function destroy(Income $income)
    {
    }
}
