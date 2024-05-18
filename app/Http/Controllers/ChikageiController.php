<?php

namespace App\Http\Controllers;

use App\Models\Chikagei;
use App\Http\Requests\StoreChikageiRequest;
use App\Http\Requests\UpdateChikageiRequest;
use Inertia\Inertia;
use Inertia\Response;

class ChikageiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Public/ChikageiList');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreChikageiRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Chikagei $chikagei)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chikagei $chikagei)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChikageiRequest $request, Chikagei $chikagei)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chikagei $chikagei)
    {
        //
    }
}
