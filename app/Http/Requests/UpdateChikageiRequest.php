<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateChikageiRequest extends FormRequest
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
        $chikageiId = $this->route('chikagei')->id;

        return [
            'name' => ['required', Rule::unique('chikagei')->ignore($chikageiId), 'string', 'max:255'],
            'jp_name' => ['nullable', Rule::unique('chikagei')->ignore($chikageiId), 'string', 'max:255'],
            'notes' => 'nullable|string',
            'url_alias' => 'nullable|string',
            'examples' => 'nullable|string',
        ];
    }
}
