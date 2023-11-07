<div class="mx-16">
    <h2 class="mb-3 md:mb-8">Indica 3 servicios que ofrece tu empresa</h2>
    <div class="flex flex-col sm:flex-row items-start md:mb-12">
        <div class="w-full">
            <form wire:submit.prevent="formValidated">
                <div>
                    <livewire:text-input
                        :label="'Primer servicio*'"
                        :placeholder="'Escribe un servicio de tu empresa'"
                        :maxInputLength="70"
                        :additionalText="'caracteres'"
                        :value="$service1"
                        model="service1"
                    />
                </div>
                <div>
                    <livewire:text-input
                        :label="'Segundo servicio*'"
                        :placeholder="'Escribe un servicio de tu empresa'"
                        :maxInputLength="70"
                        :additionalText="'caracteres'"
                        :value="$service2"
                        model="service2"
                    />
                </div>
                <div>
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
            <div class="sm:hidden w-28 h-32 mx-auto mt-2 mb-2">
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


