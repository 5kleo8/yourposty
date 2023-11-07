<?php

namespace App\Livewire;

use App\Livewire\Traits\WithFields;
use Livewire\Component;

class Sector extends Component
{
    use WithFields;

    protected array $fields = ['sector'];
    protected $listeners = ['fieldUpdated'];
    public string $sector = '';

    public function mount()
    {
        $this->hydrateFields();
    }

    public function selectOption()
    {
        $this->dispatch('incrementStep');
    }

    public function render()
    {
        return view('livewire.components.sector');
    }
}
