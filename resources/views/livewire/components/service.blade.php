<div class="px-4">
    <h2 class="md:text-3xl text-1xl mb-2">Indica 3 servicios que ofrece tu empresa</h2>
    <div class="flex flex-col sm:flex-row items-start sm:mt-12">
        <div class="w-full mb-3 sm:mr-3">
            <form wire:submit.prevent="formValidated">
                <div class="mb-3">
                    <livewire:text-input
                        :label="'Primer servicio*'"
                        :placeholder="'Escribe un servicio de tu empresa'"
                        :maxInputLength="70"
                        :additionalText="'caracteres'"
                        :value="$service1"
                        model="service1"
                    />
                </div>
                <div class="mb-3">
                    <livewire:text-input
                        :label="'Segundo servicio*'"
                        :placeholder="'Escribe un servicio de tu empresa'"
                        :maxInputLength="70"
                        :additionalText="'caracteres'"
                        :value="$service2"
                        model="service2"
                    />
                </div>
                <div class="mb-3">
                    <livewire:text-input
                        :label="'Tercer servicio*'"
                        :placeholder="'Escribe un servicio de tu empresa'"
                        :maxInputLength="70"
                        :additionalText="'caracteres'"
                        :value="$service3"
                        model="service3"
                    />
                </div>
            </form>
            <div class="sm:hidden w-1/2 mx-auto">
                <img src="{{ asset('img/service.svg') }}">
            </div>
        </div>
    </div>
    <div>
        <livewire:navigation-button :nextDisabled="!$valid" wire:key="{{ now() }}"/>
    </div>
    <div class="hidden lg:hidden w-4/2 mx-auto mt-12">
        <img src="{{ asset('img/service.svg') }}">
    </div>
    <style>
        @media (width: 744px) and (height: 1133px) {
            .lg\:hidden {
                display: block;
            }
        }
    </style>
</div>


