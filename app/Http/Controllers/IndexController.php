<?php

namespace App\Http\Controllers;

use App\Models\Chikagei;
use App\Models\Mix;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    public function index(Request $request): Response
    {
        $chikagei = Chikagei::orderBy('updated_at', 'DESC')->limit(5)->get();
        $mix = Mix::orderBy('updated_at', 'DESC')->limit(5)->get();
        return Inertia::render('Public/Index', [
            'updatedChikagei' => $chikagei,
            'updatedMix' => $mix,
        ]);
    }
}
