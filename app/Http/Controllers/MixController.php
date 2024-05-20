<?php

namespace App\Http\Controllers;

use App\Models\Mix;
use App\Http\Requests\StoreMixRequest;
use App\Http\Requests\UpdateMixRequest;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class MixController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Public/MIXList', [
            'allMix' => Mix::orderBy('name', 'ASC')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMixRequest $request)
    {
        $validated = $request->validated();

        Mix::create([
            ...$validated,
            'url_alias' => Str::kebab($validated['name']),
        ]);

        return to_route('mix.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(String $alias)
    {
        if (is_numeric($alias)) {
            $mix = Mix::findOrFail($alias);
        } else {
            $mix = Mix::where('url_alias', $alias)->firstOrFail();
        }

        if (!empty($mix)) {
            return Inertia::render('Public/MIXDetailed', [
                'mix' => $mix,
            ]);
        }

        return to_route('mix.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMixRequest $request, Mix $mix)
    {
        $mix->update($request->validated());

        return to_route('mix.show', ['alias' => !empty($mix->url_alias) ? $mix->url_alias : $mix->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mix $mix)
    {
        $mix->delete();

        return to_route('mix.index');
    }
}
