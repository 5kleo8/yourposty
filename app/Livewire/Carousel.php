<?php

namespace App\Livewire;

use Livewire\Component;
use Livewire\WithFileUploads;

class Carousel extends Component
{
    public $elements = [];

    public function mount()
    {
        $this->elements = [
            asset('img/Rectangle33.png'),
            asset('img/Rectangle33.png'),
            asset('img/Rectangle33.png'),
            asset('img/Rectangle33.png'),
            asset('img/Rectangle33.png'),
            asset('img/Rectangle33.png'),
            asset('img/Rectangle33.png'),
            asset('img/Rectangle33.png'),
            asset('img/Rectangle33.png'),
            asset('img/Rectangle33.png'),
            asset('img/Rectangle33.png'),
            asset('img/Rectangle33.png'),
        ];
    }

    public function render()
    {
        return view('livewire.postModal.components.carousel');
    }

}
