<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateMixRequest extends FormRequest
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
        $mixId = $this->route('mix')->id;

        return [
            'name' => ['required', Rule::unique('mix')->ignore($mixId), 'string', 'max:255'],
            'jp_name' => ['nullable', Rule::unique('mix')->ignore($mixId), 'string', 'max:255'],
            'words' => 'nullable|string',
            'jp_words' => 'nullable|string',
            'notes' => 'nullable|string',
            'url_alias' => 'nullable|string',
            'examples' => 'nullable|string',
        ];
    }
}
