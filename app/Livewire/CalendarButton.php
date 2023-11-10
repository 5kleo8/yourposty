<?php

namespace App\Livewire;

use Livewire\Component;

class CalendarButton extends Component
{
    public $selectedDateTime;
    public function render()
    {
        return view('livewire.postModal.components.buttons.calendar-button');
    }
}
