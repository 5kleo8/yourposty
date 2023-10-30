<?php

namespace App\Livewire;

use Livewire\Attributes\Modelable;
use Livewire\Component;

class TextInput extends Component
{
    public $label;
    public $placeholder;
    public $maxInputLength = 50;
    public $value = '';
    public $additionalText = '';
    public $model;

    public function mount($model, $label, $value, $placeholder, $maxInputLength, $additionalText)
    {
        $this->model = $model;
        $this->label = $label;
        $this->value = $value;
        $this->placeholder = $placeholder;
        $this->maxInputLength = $maxInputLength;
        $this->additionalText = $additionalText;
    }

    public function render()
    {
        return view('livewire.text-input');
    }

    public function updated()
    {
        $this->dispatch('fieldUpdated', $this->model, $this->value);
    }
}
