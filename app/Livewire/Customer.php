<?php

namespace App\Livewire;

use Livewire\Component;

class Customer extends Component
{

    public function render()
    {
        return view('livewire.components.customer');
    }
    public function selectOption()
    {
        $this->dispatch('incrementStep');
    }

}
