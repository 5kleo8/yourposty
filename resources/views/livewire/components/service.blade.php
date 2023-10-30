<div class="p-6 sm:p-6">
    <h2 class="font-bold text-2xl mt-4">Indica 3 servicios que ofrece tu empresa</h2>
    <div class="flex flex-col sm:flex-row items-start mt-6">
        <div class="w-full mb-6 sm:mr-6">
            <form wire:submit.prevent="formValidated">
                <div class="mb-6">
                    <livewire:text-input
                        :label="'Primer servicio*'"
                        :placeholder="'Escribe un servicio de tu empresa'"
                        :maxInputLength="70"
                        :additionalText="'caracteres'"
                        :value="$service1"
                        model="service1"
                    />
                </div>
                <div class="mb-6">
                    <livewire:text-input
                        :label="'Segundo servicio*'"
                        :placeholder="'Escribe un servicio de tu empresa'"
                        :maxInputLength="70"
                        :additionalText="'caracteres'"
                        :value="$service2"
                        model="service2"
                    />
                </div>
                <div class="mb-6">
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
        </div>
        <div class=" text-center lg:hidden sm:hidden">
            <img src="{{ asset('img/service.svg') }}">
        </div>
    </div>

    <livewire:navigation-button :nextDisabled="!$valid" wire:key="{{ now() }}"/>

</div>


