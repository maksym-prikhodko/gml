@php
$config = [
    'appName' => config('app.name'),
    'locale' => $locale = app()->getLocale(),
    'locales' => config('app.locales'),
    'githubAuth' => config('services.github.client_id'),
];
@endphp
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>{{ config('app.name') }}</title>
  <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,400;1,200;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{{ mix('dist/css/app.css') }}">
</head>
<body>
  <div id="app"></div>
  <script>
    window.config = @json($config);
  </script>
  <script src="{{ mix('dist/js/app.js') }}"></script>
</body>
</html>
