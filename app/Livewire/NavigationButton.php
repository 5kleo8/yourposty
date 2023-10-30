<?php

namespace App\Livewire;

use Livewire\Component;

class NavigationButton extends Component
{
    public $showNext = true;
    public $showPrev = true;
    public $nextDisabled = false;
    public $selection;


    public function render()
    {
        return view('livewire.navigation-button');
    }

    public function nextStep()
    {
        if ($this->showNext && !$this->nextDisabled) {
            $this->dispatch('next-step');
        }
    }

    public function prevStep()
    {
        if ($this->showPrev) {
            $this->dispatch('prev-step');
        }
    }

}
