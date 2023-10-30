<?php

namespace App\Livewire;

use App\Livewire\Traits\WithFields;
use Livewire\Component;

class Service extends Component
{

    use WithFields;
    protected array $fields = ['service1', 'service2', 'service3'];
    protected $listeners = ['fieldUpdated'];
    public string $service1 = '';
    public string $service2 = '';
    public string $service3 = '';

    public function mount()
    {
        $this->hydrateFields();
    }
    public function render()
    {
        return view('livewire.components.service');
    }
}
