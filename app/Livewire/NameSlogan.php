<?php

namespace App\Livewire;

use App\Livewire\Traits\WithFields;
use Livewire\Component;

class NameSlogan extends Component
{
    use WithFields;

    protected array $fields = ['name', 'slogan'];
    protected $listeners = ['fieldUpdated'];

    public string $name = '';
    public string $slogan = '';

    public function mount()
    {
        $this->hydrateFields();
    }

    public function render()
    {
        return view('livewire.components.name-slogan');
    }


}
