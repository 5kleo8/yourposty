<?php

namespace App\Livewire;

use Livewire\Component;

class Landing extends Component
{

    public function render()
    {
        return view('livewire.components.landing');
    }
    public function selectOption()
    {
        $this->dispatch('incrementStep');
    }

}
