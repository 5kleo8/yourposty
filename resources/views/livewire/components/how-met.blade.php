<div class="mx-10">
    <h2 class=" text-center mb-6 desktopTitle">Para terminar, ¿Cómo nos conociste?</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        <div
            class="px-12 py-2 md:py-8 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/Google.svg') }}" class="mb-4">
            <p class="text-center fonts desktopfonts desktopfonts desktopfonts">
                Google
            </p>
        </div>
        <div
            class="px-12 py-2 md:py-8 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/Facebook.svg') }}" class="mb-4 mx-auto">
            <p class="text-center fonts desktopfonts">
                Facebook
            </p>
        </div>
        <div
            class="px-12 py-2 md:py-8 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/Twitter.svg') }}" class="mb-4 mx-auto">
            <p class="text-center fonts desktopfonts">
                Twitter/X
            </p>
        </div>
        <div
            class="px-12 py-2 md:py-8 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/Instagram.svg') }}" class="mb-4 mx-auto">
            <p class="text-center fonts desktopfonts">
                Instagram
            </p>
        </div>
        <div
            class="px-12 py-2 md:py-8 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/LikedIn.svg') }}" class="mb-4 mx-auto">
            <p class="text-center fonts desktopfonts">
                LinkedIn
            </p>
        </div>
        <div
            class="px-12 py-2 md:py-8 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/Email.svg') }}" class="mb-4 mx-auto">
            <p class="text-center fonts desktopfonts">
                Email
            </p>
        </div>
        <div
            class="px-12 py-2 md:py-8 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/Friend.svg') }}" class="mb-4 mx-auto">
            <p class="text-center fonts desktopfonts whitespace-no-wrap">
                Por un amigo
            </p>
        </div>
        <div
            class="px-12 py-2 md:py-8 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/Others.svg') }}" class="mb-4 mx-auto">
            <p class="text-center fonts desktopfonts whitespace-no-wrap">
                Por otro canal
            </p>
        </div>
    </div>
    <div class="mt-12">
        <livewire:navigation-button :showNext="false"/>
    </div>

</div>
