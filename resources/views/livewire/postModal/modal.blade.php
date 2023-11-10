@vite('resources/js/app.js')
@livewireStyles
<div class=" m-8 ">
    <div>
        <div class="border rounded-2xl  flex flex-row shadow-2xl bg-white">
            <div>
                <livewire:new-post/>
            </div>
            <div class="hidden lg:flex px-28" style="background: #d3d3d3;">
                <livewire:preview/>
            </div>
        </div>
    </div>
</div>







