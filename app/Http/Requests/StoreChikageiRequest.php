<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreChikageiRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|unique:chikagei,name|string|max:255',
            'jp_name' => 'nullable|unique:chikagei,jp_name|string|max:255',
            'notes' => 'nullable|string',
            'examples' => 'nullable|string',
        ];
    }
}
