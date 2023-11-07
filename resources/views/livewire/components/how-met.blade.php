<div class="px-16">
    <h2 class="md:text-2xl text-center mb-6">Para terminar, ¿Cómo nos conociste?</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        <div class="px-12 py-2 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/Google.svg') }}" class="mb-4">
            <p class="text-center fonts">
                Google
            </p>
        </div>
        <div class="px-12 py-2 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/Facebook.svg') }}" class="mb-4 mx-auto">
            <p class="text-center fonts">
                Facebook
            </p>
        </div>
        <div class="px-12 py-2 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/Twitter.svg') }}" class="mb-4 mx-auto">
            <p class="text-center fonts">
                Twitter/X
            </p>
        </div>
        <div class="px-12 py-2 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/Instagram.svg') }}" class="mb-4 mx-auto">
            <p class="text-center fonts">
                Instagram
            </p>
        </div>
        <div class="px-12 py-2 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/LikedIn.svg') }}" class="mb-4 mx-auto">
            <p class="text-center fonts">
                LinkedIn
            </p>
        </div>
        <div class="px-12 py-2 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/Email.svg') }}" class="mb-4 mx-auto">
            <p class="text-center fonts">
                Email
            </p>
        </div>
        <div class="px-12 py-2 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/Friend.svg') }}" class="mb-4 mx-auto">
            <p class="text-center fonts whitespace-no-wrap">
                Por un amigo
            </p>
        </div>
        <div class="px-12 py-2 flex flex-col items-center justify-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/Others.svg') }}" class="mb-4 mx-auto">
            <p class="text-center fonts whitespace-no-wrap">
                Por otro canal
            </p>
        </div>
    </div>
    <div class="mt-12">
        <livewire:navigation-button :showNext="false"/>
    </div>

</div>
