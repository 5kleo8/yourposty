<div>
    <div wire:key="step{{ $currentStep }}"
         class="animate__animated animate__fadeIn flex flex-col sm:flex-row">
        <div>
            @if($currentStep === 0)
            <!-- Paso 1 -->
            @livewire('landing')
            @elseif($currentStep === 1)
            <!-- Paso 2 -->
            @livewire('name-slogan')
            @elseif($currentStep === 2)
            <!-- Paso 3 -->
            @livewire('service')
            @elseif($currentStep === 3)
            <!-- Paso 4 -->
            @livewire('sector')
            @elseif($currentStep === 4)
            <!-- Paso 5 -->
            @livewire('how-met')
            @elseif($currentStep === 5)
            @endif
        </div>

        @if($showImage)
            <div class="hidden md:block text-left  mt-12">
                <img src="{{ asset('img/onboarding.svg') }}" class="md:h-96 md:h-80">
            </div>
        @endif

        @if($showImage2)
            <div class="hidden md:block text-left  mt-12 ">
                <img src="{{ asset('img/service.svg') }}" class="md:h-96 md:h-86">
            </div>
        @endif
    </div>
    <div class="step-counter  flex items-center justify-center  px-40 my-8 md:mt-12 space-x-4">
        @for($i = 0; $i < 5; $i++)
            <div class="step
            {{ $i < $currentStep ? 'bg-blue-500' : 'bg-white' }}
            {{ $i === $currentStep ? 'active' : '' }}">
            </div>
        @endfor
    </div>
    <style>
        .step-counter {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }

        .step {
            width: 8px;
            height: 8px;
            background-color: rgba(171, 171, 171, 0.77);
            border-radius: 50%;
            margin-right: 10px;
            opacity: 50%;
        }

        .step:last-child {
            margin-right: 0;
        }

        .step.active {
            width: 10px;
            height: 10px;
            opacity: 1;
            background-color: rgba(35, 35, 35, 70%);
        }


    </style>

</div>
