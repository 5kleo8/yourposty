<?php

namespace App\Livewire;

use Livewire\Component;

class SocialNetworks extends Component
{

    public $clickedButtonIndex = null;
    public $buttons = [];

    public function mount()
    {
        $images = [
            'img/Facebook.svg',
            'img/Twitter.svg',
            'img/Instagram.svg',
            'img/Instagram.svg',
            'img/Instagram.svg',
            'img/Instagram.svg',
            'img/Instagram.svg',
            'img/Instagram.svg',
        ];

        $texts = [
            'Texto Botón 1',
            'Texto Botón 2',
            'Texto Botón 3',
            'Texto Botón 4',
            'Texto Botón 5',
            'Texto Botón 6',
            'Texto Botón 7',
            'Texto Botón 8',
        ];

        for ($i = 0; $i < 8; $i++) {
            $this->buttons[] = [
                'image' => $images[$i],
                'alt' => 'Imagen ' . ($i + 1),
                'text' => $texts[$i],
            ];
        }
    }


    public function setClickedButtonIndex($index)
    {
        $this->clickedButtonIndex = $index;
    }
    public function render()
    {
        return view('livewire.postModal.components.buttons.social-networks');
    }
}
