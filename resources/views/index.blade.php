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
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,200;9..40,300&family=Fira+Code:wght@300&family=Gabarito&display=swap"  rel="stylesheet">
    @vite('resources/js/app.js')
    @livewireStyles
</head>
<body>
<livewire:navbar/>
<div  class="flex flex-col p-2 md:p-10 gap-4 items-center justify-center">
    <livewire:stepper-component/>
</div>
<!-- otros scripts -->
@livewireScriptConfig
</body>
<style>
    body {
        font-family: 'Gabarito', sans-serif;
    }

    @media (max-width: 768px) {
      body{
          font-size: 20px;
          font-style: normal;
          font-weight: 900;
          line-height: 26px;
      }
        p{
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 12px;
        }
        label{
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 11px;
        }
    }
</style>

</html>

