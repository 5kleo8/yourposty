<?php

namespace App\Livewire;

use Livewire\Attributes\On;
use Livewire\Component;

class StepperComponent extends Component
{
    public $steps = ['Paso 1', 'Paso 2', 'Paso 3', "Paso 4", "Paso 5"];
    public $currentStep = 0;
    protected $listeners = [
        'incrementStep' => 'incrementStep',
        'nameSloganValidated' => 'validateNameSlogan'
    ];


    #[On('next-step')]
    public function incrementStep()
    {
        if ($this->currentStep < count($this->steps) - 1) {
            $this->currentStep++;
        }
    }
    #[On('prev-step')]
    public function decrementStep()
    {
        if ($this->currentStep > 0) {
            $this->currentStep--;
        }
    }
    public function updateStep($step)
    {
        $this->currentStep = $step;
    }

    public function render()
    {
        $showImage1 = $this->currentStep === 1;
        $showImage2 = $this->currentStep === 2;
        return view('livewire.onboarding.components.stepper-component', ['showImage' => $showImage1, "showImage2" => $showImage2]);
    }
}

