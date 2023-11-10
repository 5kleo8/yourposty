<?php

namespace App\Livewire;

use Livewire\Component;

class SocialButtonsPreview extends Component
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
        ];
        for ($i = 0; $i < 5; $i++) {
            $this->buttons[] = [
                'image' => $images[$i],
                'alt' => 'Imagen ' . ($i + 1)
            ];
        }
    }
    public function setClickedButtonIndex($index)
    {
        $this->clickedButtonIndex = $index;
    }
    public function render()
    {
        return view('livewire.postModal.components.buttons.social-buttons-preview');
    }
}
