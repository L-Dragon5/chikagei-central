<?php

namespace App\Http\Controllers;

use App\Models\Mix;
use App\Http\Requests\StoreMixRequest;
use App\Http\Requests\UpdateMixRequest;
use Inertia\Inertia;
use Inertia\Response;

class MixController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Public/MIXList');
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
    public function store(StoreMixRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Mix $mix)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mix $mix)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMixRequest $request, Mix $mix)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mix $mix)
    {
        //
    }
}
