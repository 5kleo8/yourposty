<div class="mx-10">
    <h2 class="mx-auto mb-3 md:mb-7 desktopTitle">Indica el nombre de tu empresa y un slogan</h2>
    <div class="flex flex-col sm:flex-row items-start md:mb-12">
        <div class="w-full">
            <form wire:submit.prevent="formValidated">
                <div>
                    <livewire:text-input
                        :label="'Nombre*'"
                        :placeholder="'Ingrese el nombre de su empresa'"
                        :maxInputLength="50"
                        :additionalText="'caracteres'"
                        :value="$name"
                        model="name"
                    />
                </div>
                <div>
                    <livewire:text-input
                        label="Slogan*"
                        :placeholder="'Su Slogan'"
                        :maxInputLength="50"
                        :additionalText="'caracteres'"
                        :value="$slogan"
                        model="slogan"
                    />
                </div>
            </form>
            <div class="sm:hidden h-40 w-40 mx-auto">
                <img src="{{ asset('img/onboarding.svg') }}">
            </div>

        </div>
    </div>
    <div>
        <livewire:navigation-button :nextDisabled="!$valid" wire:key="{{ now() }}"/>
    </div>
    <div class="hidden lg:hidden w-4/2 mx-auto mt-12">
        <img src="{{ asset('img/onboarding.svg') }}">
    </div>
    <style>
        @media (width: 744px) and (height: 1133px) {
            .lg\:hidden {
                display: block;
            }
        }
    </style>
</div>



