2025-10-26T22:10:28.000000000Z [inf]  Starting Container
2025-10-26T22:10:29.814525813Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:29.814535952Z [inf]  #8 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:29.814558329Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:29.814569413Z [inf]  Stack trace:
2025-10-26T22:10:29.814569696Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:29.814578702Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:29.814587571Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(912): ReflectionClass->__construct('App\\Console\\Ker...')
2025-10-26T22:10:29.814598474Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:29.814601835Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:29.814608634Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:29.814646063Z [inf]  
2025-10-26T22:10:29.814652941Z [inf]  Fatal error: Uncaught ReflectionException: Class "App\Console\Kernel" does not exist in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:912
2025-10-26T22:10:29.815613678Z [inf]  #9 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:29.815619134Z [inf]  #10 {main}
2025-10-26T22:10:29.815624835Z [inf]  
2025-10-26T22:10:29.815629809Z [inf]  Next Illuminate\Contracts\Container\BindingResolutionException: Target class [App\Console\Kernel] does not exist. in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:914
2025-10-26T22:10:29.815634703Z [inf]  Stack trace:
2025-10-26T22:10:29.815643128Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:29.815648692Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:29.815655113Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:29.815677631Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:29.815684085Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:29.815690205Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:29.815696735Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:29.815702802Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:29.816442336Z [inf]  #8 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:29.816448286Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:29.816452061Z [inf]  #9 {main}
2025-10-26T22:10:29.816455235Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:29.816461472Z [inf]    thrown in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php on line 914
2025-10-26T22:10:29.816463237Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:29.816469434Z [inf]  
2025-10-26T22:10:29.816470896Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:29.816476611Z [inf]  Fatal error: Uncaught ReflectionException: Class "App\Console\Kernel" does not exist in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:912
2025-10-26T22:10:29.816482547Z [inf]  Stack trace:
2025-10-26T22:10:29.816488032Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(912): ReflectionClass->__construct('App\\Console\\Ker...')
2025-10-26T22:10:29.816493758Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:29.816499066Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:29.816504569Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:29.817729617Z [inf]  #8 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:29.817731852Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:29.817738452Z [inf]  #9 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:29.817743795Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:29.817745354Z [inf]  #10 {main}
2025-10-26T22:10:29.817751441Z [inf]  
2025-10-26T22:10:29.817752663Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:29.817758125Z [inf]  Next Illuminate\Contracts\Container\BindingResolutionException: Target class [App\Console\Kernel] does not exist. in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:914
2025-10-26T22:10:29.817760482Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:29.817767584Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:29.817768169Z [inf]  Stack trace:
2025-10-26T22:10:29.817774644Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:29.817776219Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:29.819369860Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:29.819378620Z [inf]  #8 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:29.819385646Z [inf]  #9 {main}
2025-10-26T22:10:29.819391343Z [inf]    thrown in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php on line 914
2025-10-26T22:10:30.832732541Z [inf]  
2025-10-26T22:10:30.832737910Z [inf]  Fatal error: Uncaught ReflectionException: Class "App\Console\Kernel" does not exist in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:912
2025-10-26T22:10:30.832743140Z [inf]  Stack trace:
2025-10-26T22:10:30.832747766Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(912): ReflectionClass->__construct('App\\Console\\Ker...')
2025-10-26T22:10:30.832751966Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:30.832756310Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:30.832761731Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:30.832766399Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:30.832771419Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:30.832776497Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:30.832780831Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:30.832785786Z [inf]  #8 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:30.834906180Z [inf]  #9 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:30.834910536Z [inf]  #10 {main}
2025-10-26T22:10:30.834915096Z [inf]  
2025-10-26T22:10:30.834920082Z [inf]  Next Illuminate\Contracts\Container\BindingResolutionException: Target class [App\Console\Kernel] does not exist. in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:914
2025-10-26T22:10:30.834924137Z [inf]  Stack trace:
2025-10-26T22:10:30.834928892Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:30.834933741Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:30.834937907Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:30.834942568Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:30.834945033Z [inf]  #8 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:30.834947758Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:30.834951786Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:30.834956362Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:30.834958170Z [inf]  #9 {main}
2025-10-26T22:10:30.834961687Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:30.834966623Z [inf]    thrown in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php on line 914
2025-10-26T22:10:31.810844098Z [inf]  #9 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:31.810851451Z [inf]  #10 {main}
2025-10-26T22:10:31.810854055Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:31.810860122Z [inf]  
2025-10-26T22:10:31.810860611Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:31.810869121Z [inf]  #8 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:31.810869547Z [inf]  Next Illuminate\Contracts\Container\BindingResolutionException: Target class [App\Console\Kernel] does not exist. in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:914
2025-10-26T22:10:31.810876770Z [inf]  Stack trace:
2025-10-26T22:10:31.810883370Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:31.810885721Z [inf]  
2025-10-26T22:10:31.810891416Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:31.810893802Z [inf]  Fatal error: Uncaught ReflectionException: Class "App\Console\Kernel" does not exist in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:912
2025-10-26T22:10:31.810900376Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:31.810901529Z [inf]  Stack trace:
2025-10-26T22:10:31.810908118Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(912): ReflectionClass->__construct('App\\Console\\Ker...')
2025-10-26T22:10:31.810915310Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:31.810917116Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:31.810922458Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:31.810926991Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:31.810930085Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:31.810935454Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:31.810937832Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:31.810943247Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:31.810945264Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:31.810950550Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:31.811919791Z [inf]  #8 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:31.811925557Z [inf]  #9 {main}
2025-10-26T22:10:31.811931593Z [inf]    thrown in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php on line 914
2025-10-26T22:10:32.787656247Z [inf]  
2025-10-26T22:10:32.787691147Z [inf]  Fatal error: Uncaught ReflectionException: Class "App\Console\Kernel" does not exist in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:912
2025-10-26T22:10:32.787695402Z [inf]  Stack trace:
2025-10-26T22:10:32.787702525Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(912): ReflectionClass->__construct('App\\Console\\Ker...')
2025-10-26T22:10:32.787706526Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:32.787714121Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:32.787719834Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:32.787725436Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:32.787730600Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:32.787735677Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:32.787740603Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:32.787745718Z [inf]  #8 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:32.787783286Z [inf]  #9 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:32.787788950Z [inf]  #10 {main}
2025-10-26T22:10:32.787795077Z [inf]  
2025-10-26T22:10:32.787799813Z [inf]  Next Illuminate\Contracts\Container\BindingResolutionException: Target class [App\Console\Kernel] does not exist. in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:914
2025-10-26T22:10:32.787804593Z [inf]  Stack trace:
2025-10-26T22:10:32.787811191Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:32.787816198Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:32.787821463Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:32.787826296Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:32.787831069Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:32.787836987Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:32.787841821Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:32.787846495Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:32.790512107Z [inf]  #8 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:32.790518889Z [inf]  #9 {main}
2025-10-26T22:10:32.790525909Z [inf]    thrown in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php on line 914
2025-10-26T22:10:33.170190637Z [inf]  
2025-10-26T22:10:33.170202737Z [inf]  Fatal error: Uncaught ReflectionException: Class "App\Console\Kernel" does not exist in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:912
2025-10-26T22:10:33.170211626Z [inf]  Stack trace:
2025-10-26T22:10:33.170219629Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(912): ReflectionClass->__construct('App\\Console\\Ker...')
2025-10-26T22:10:33.170230527Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:33.170238360Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:33.170257460Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:33.170265717Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:33.170273380Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:33.170280895Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:33.170288263Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:33.170295886Z [inf]  #8 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:33.171330808Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:33.171338002Z [inf]  #9 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:33.171344664Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:33.171353427Z [inf]  #10 {main}
2025-10-26T22:10:33.171359169Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:33.171365565Z [inf]  
2025-10-26T22:10:33.171374990Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:33.171379383Z [inf]  Next Illuminate\Contracts\Container\BindingResolutionException: Target class [App\Console\Kernel] does not exist. in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:914
2025-10-26T22:10:33.171386543Z [inf]  Stack trace:
2025-10-26T22:10:33.171394893Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:33.171401322Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:33.171407191Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:33.171413994Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:33.172742955Z [inf]  #8 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:33.172751825Z [inf]  #9 {main}
2025-10-26T22:10:33.172759272Z [inf]    thrown in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php on line 914
2025-10-26T22:10:34.089625021Z [inf]  
2025-10-26T22:10:34.089631147Z [inf]  Fatal error: Uncaught ReflectionException: Class "App\Console\Kernel" does not exist in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:912
2025-10-26T22:10:34.089636979Z [inf]  Stack trace:
2025-10-26T22:10:34.089645992Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(912): ReflectionClass->__construct('App\\Console\\Ker...')
2025-10-26T22:10:34.089654071Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:34.089660787Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:34.089668152Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:34.089673587Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:34.089677916Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:34.089682665Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:34.089687326Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:34.089692076Z [inf]  #8 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:34.090979049Z [inf]  #9 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:34.090984617Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:34.090987422Z [inf]  #10 {main}
2025-10-26T22:10:34.090992291Z [inf]  
2025-10-26T22:10:34.090996568Z [inf]  Next Illuminate\Contracts\Container\BindingResolutionException: Target class [App\Console\Kernel] does not exist. in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:914
2025-10-26T22:10:34.091000254Z [inf]  Stack trace:
2025-10-26T22:10:34.091004554Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:34.091008750Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:34.091013120Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:34.091017452Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:34.091021735Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:34.091025422Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:34.091029719Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:34.093178971Z [inf]  #8 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:34.093185578Z [inf]  #9 {main}
2025-10-26T22:10:34.093190701Z [inf]    thrown in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php on line 914
2025-10-26T22:10:34.935542338Z [inf]  
2025-10-26T22:10:34.935549118Z [inf]  Fatal error: Uncaught ReflectionException: Class "App\Console\Kernel" does not exist in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:912
2025-10-26T22:10:34.935554732Z [inf]  Stack trace:
2025-10-26T22:10:34.935560193Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(912): ReflectionClass->__construct('App\\Console\\Ker...')
2025-10-26T22:10:34.935563993Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:34.935571518Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:34.935575942Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:34.935584538Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:34.935591006Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:34.935597037Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:34.935604022Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:34.935611072Z [inf]  #8 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:34.937027549Z [inf]  #9 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:34.937039027Z [inf]  #10 {main}
2025-10-26T22:10:34.937046683Z [inf]  
2025-10-26T22:10:34.937054764Z [inf]  Next Illuminate\Contracts\Container\BindingResolutionException: Target class [App\Console\Kernel] does not exist. in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:914
2025-10-26T22:10:34.937060877Z [inf]  Stack trace:
2025-10-26T22:10:34.937066483Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:34.937071313Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:34.937075796Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:34.937085217Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:34.937094275Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:34.937098859Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:34.937106209Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:34.937110861Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:34.938407216Z [inf]  #8 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:34.938412210Z [inf]  #9 {main}
2025-10-26T22:10:34.938417431Z [inf]    thrown in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php on line 914
2025-10-26T22:10:35.760214242Z [inf]  
2025-10-26T22:10:35.760216248Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:35.760222433Z [inf]  Fatal error: Uncaught ReflectionException: Class "App\Console\Kernel" does not exist in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:912
2025-10-26T22:10:35.760226876Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:35.760228768Z [inf]  Stack trace:
2025-10-26T22:10:35.760234066Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:35.760235102Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(912): ReflectionClass->__construct('App\\Console\\Ker...')
2025-10-26T22:10:35.760239954Z [inf]  #8 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:35.760241784Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:35.760247021Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:35.760251312Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:35.760258182Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:35.761102247Z [inf]  #9 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:35.761107381Z [inf]  #10 {main}
2025-10-26T22:10:35.761111650Z [inf]  
2025-10-26T22:10:35.761115802Z [inf]  Next Illuminate\Contracts\Container\BindingResolutionException: Target class [App\Console\Kernel] does not exist. in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:914
2025-10-26T22:10:35.761119841Z [inf]  Stack trace:
2025-10-26T22:10:35.761123866Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:35.761127916Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:35.761131738Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:35.761135527Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:35.761139344Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:35.761142879Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:35.761147070Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:35.761152364Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:35.762233428Z [inf]  #8 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:35.762240217Z [inf]  #9 {main}
2025-10-26T22:10:35.762244611Z [inf]    thrown in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php on line 914
2025-10-26T22:10:36.780974183Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:36.780983251Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:36.780989072Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:36.780995085Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:36.781000537Z [inf]  #8 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:36.781004121Z [inf]  Stack trace:
2025-10-26T22:10:36.781014912Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(912): ReflectionClass->__construct('App\\Console\\Ker...')
2025-10-26T22:10:36.781015119Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:36.781020914Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:36.781026876Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:36.781077413Z [inf]  
2025-10-26T22:10:36.781083932Z [inf]  Fatal error: Uncaught ReflectionException: Class "App\Console\Kernel" does not exist in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:912
2025-10-26T22:10:36.783171840Z [inf]  #9 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:36.783176879Z [inf]  #10 {main}
2025-10-26T22:10:36.783180964Z [inf]  
2025-10-26T22:10:36.783185512Z [inf]  Next Illuminate\Contracts\Container\BindingResolutionException: Target class [App\Console\Kernel] does not exist. in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:914
2025-10-26T22:10:36.783189839Z [inf]  Stack trace:
2025-10-26T22:10:36.783195319Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:36.783202472Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:36.783207605Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:36.783212807Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:36.783217845Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:36.783222182Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:36.783227286Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:36.783231625Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:36.783345403Z [inf]  #8 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:36.783349806Z [inf]  #9 {main}
2025-10-26T22:10:36.783354276Z [inf]    thrown in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php on line 914
2025-10-26T22:10:37.269006345Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:37.269006657Z [inf]  
2025-10-26T22:10:37.269015772Z [inf]  Fatal error: Uncaught ReflectionException: Class "App\Console\Kernel" does not exist in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:912
2025-10-26T22:10:37.269023064Z [inf]  Stack trace:
2025-10-26T22:10:37.269030487Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(912): ReflectionClass->__construct('App\\Console\\Ker...')
2025-10-26T22:10:37.269032230Z [inf]  #8 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:37.269038493Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:37.269045811Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:37.269051565Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:37.269058584Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:37.269064647Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:37.269070295Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:37.269887684Z [inf]  #5 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('Illuminate\\Cont...', Array, true)
2025-10-26T22:10:37.269898447Z [inf]  #6 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(731): Illuminate\Foundation\Application->resolve('Illuminate\\Cont...', Array)
2025-10-26T22:10:37.269905780Z [inf]  #7 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(971): Illuminate\Container\Container->make('Illuminate\\Cont...', Array)
2025-10-26T22:10:37.269923263Z [inf]  #9 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:37.269930375Z [inf]  #10 {main}
2025-10-26T22:10:37.269937190Z [inf]  
2025-10-26T22:10:37.269943964Z [inf]  Next Illuminate\Contracts\Container\BindingResolutionException: Target class [App\Console\Kernel] does not exist. in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php:914
2025-10-26T22:10:37.269951427Z [inf]  Stack trace:
2025-10-26T22:10:37.269958068Z [inf]  #0 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build('App\\Console\\Ker...')
2025-10-26T22:10:37.269965623Z [inf]  #1 /app/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(986): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:37.269972017Z [inf]  #2 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(296): Illuminate\Foundation\Application->resolve('App\\Console\\Ker...', Array, false)
2025-10-26T22:10:37.269980176Z [inf]  #3 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(908): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
2025-10-26T22:10:37.269987056Z [inf]  #4 /app/vendor/laravel/framework/src/Illuminate/Container/Container.php(795): Illuminate\Container\Container->build(Object(Closure))
2025-10-26T22:10:37.270780606Z [inf]  #8 /app/artisan(22): Illuminate\Foundation\Application->make('Illuminate\\Cont...')
2025-10-26T22:10:37.270788578Z [inf]  #9 {main}
2025-10-26T22:10:37.270795124Z [inf]    thrown in /app/vendor/laravel/framework/src/Illuminate/Container/Container.php on line 914