<div class="p-6 sm:p-6">
    <h2 class="font-bold text-2xl mt-6">Indica el nombre de tu empresa y un slogan</h2>
    <div class="flex flex-col sm:flex-row items-start mt-6">
        <div class="w-full mb-6 sm:mr-6">
            <form wire:submit.prevent="formValidated">
                <div class="mb-6">
                    <livewire:text-input
                        :label="'Nombre*'"
                        :placeholder="'Ingrese el nombre de su empresa'"
                        :maxInputLength="50"
                        :additionalText="'caracteres'"
                        :value="$name"
                        model="name"
                    />
                </div>
                <div class="mb-6">
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
            <div class=" text-left lg:hidden sm:hidden">
                <img src="{{ asset('img/onboarding.svg') }}">
            </div>
        </div>
    </div>
    <div class="mt-12">
        <livewire:navigation-button :nextDisabled="!$valid" wire:key="{{ now() }}"/>
    </div>

</div>



