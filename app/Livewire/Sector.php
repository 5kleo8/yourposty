<?php

namespace App\Livewire;

use Livewire\Component;

class Sector extends Component
{
    public $chips = [];
    public $newChip = '';
    public $activeElement = null;

    public function mount()
    {
        $savedChips = session()->get('chips', '');
        $this->chips = $savedChips ? explode(",", $savedChips) : [];
        $this->activeElement = session()->get('activeElement', null);
    }

    public function setActive($index)
    {
        $this->activeElement = $index;
        session()->put('activeElement', $index);
    }

    public function addChip()
    {
        if ($this->newChip) {
            $this->chips[] = $this->newChip;
            $this->newChip = '';
        }

        session()->put('chips', implode(",", $this->chips));
    }

    public function removeChip($index)
    {
        unset($this->chips[$index]);
        $this->chips = array_values($this->chips);
        session()->put('chips', implode(",", $this->chips));
    }

    public function render()
    {
        return view('livewire.components.sector');
    }
}
