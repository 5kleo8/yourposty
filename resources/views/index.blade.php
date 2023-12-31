<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>youposty</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300&family=Fira+Code:wght@300&family=Gabarito&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <script src="{{ mix('js/app.js') }}" defer></script>
    @livewireStyles
</head>
<body>
<livewire:navbar/>
<div class="flex flex-col md:mt-16 mt-3.5 gap-4 items-center justify-center">
    <livewire:stepper-component/>
</div>
<!-- otros scripts -->
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
@livewireScriptConfig
</body>
</html>

