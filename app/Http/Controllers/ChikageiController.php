<?php

namespace App\Http\Controllers;

use App\Models\Chikagei;
use App\Http\Requests\StoreChikageiRequest;
use App\Http\Requests\UpdateChikageiRequest;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class ChikageiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Public/ChikageiList', [
            'allChikagei' => Chikagei::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreChikageiRequest $request)
    {
        $validated = $request->validated();

        Chikagei::create([
            ...$validated,
            'url_alias' => Str::kebab($validated['name']),
        ]);

        return to_route('chikagei.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(String $alias)
    {
        if (is_numeric($alias)) {
            $chikagei = Chikagei::findOrFail($alias);
        } else {
            $chikagei = Chikagei::where('url_alias', $alias)->firstOrFail();
        }

        if (!empty($chikagei)) {
            return Inertia::render('Public/ChikageiDetailed', [
                'chikagei' => $chikagei,
            ]);
        }

        return to_route('chikagei.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChikageiRequest $request, Chikagei $chikagei)
    {
        $chikagei->update($request->validated());

        return to_route('chikagei.show', ['alias' => !empty($chikagei->url_alias) ? $chikagei->url_alias : $chikagei->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chikagei $chikagei)
    {
        $chikagei->delete();

        return to_route('chikagei.index');
    }
}
