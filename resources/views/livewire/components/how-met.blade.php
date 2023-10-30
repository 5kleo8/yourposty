<div class="lg:pr-64 lg:pl-64 pa-24 p-6 sm:p-0">
    <div class="text-center mb-6">
        <h2 class="font-bold text-4xl">Para terminar, como nos conociste?</h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        <div class="p-4 text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg">
            <img src="{{ asset('img/Google.svg') }}" class="mb-4 mx-auto">
            <p class="text-center font-normal pb-6">
                Google
            </p>
        </div>
        <div class="p-4 text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg" >
            <img src="{{ asset('img/Facebook.svg') }}" class="mb-4 mx-auto">
            <p class="text-center font-normal pb-6">
                Facebook
            </p>
        </div>
        <div class="p-4 text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg" >
            <img src="{{ asset('img/Twitter.svg') }}" class="mb-4 mx-auto">
            <p class="text-center font-normal pb-6">
                Twitter/X
            </p>
        </div>
        <div class="p-4 text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg" >
            <img src="{{ asset('img/Instagram.svg') }}" class="mb-4 mx-auto">
            <p class="text-center font-normal pb-6">
                Instagram
            </p>
        </div>
        <div class="p-4 text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg" >
            <img src="{{ asset('img/LikedIn.svg') }}" class="mb-4 mx-auto">
            <p class="text-center font-normal pb-6">
                LinkedIn
            </p>
        </div>
        <div class="p-4 text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg" >
            <img src="{{ asset('img/Email.svg') }}" class="mb-4 mx-auto">
            <p class="text-center font-normal pb-6">
                Email
            </p>
        </div>
        <div class="p-4 text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg" >
            <img src="{{ asset('img/Friend.svg') }}" class="mb-4 mx-auto">
            <p class="text-center font-normal pb-6">
                Por un amigo
            </p>
        </div>
        <div class="p-4 text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg" >
            <img src="{{ asset('img/Others.svg') }}" class="mb-4 mx-auto">
            <p class="text-center font-normal pb-6">
                Por otro canal
            </p>
        </div>
    </div>
    <div class="mt-12">
        <livewire:navigation-button :showNext="false" />
    </div>

</div>
