{
    "success": false,
    "message": "Class \"App\\Http\\Controllers\\Controller\" not found",
    "error": "Error",
    "file": "\/app\/app\/Http\/Controllers\/AuthController.php",
    "line": 11,
    "trace": [
        {
            "file": "\/app\/vendor\/composer\/ClassLoader.php",
            "line": 576,
            "function": "include"
        },
        {
            "file": "\/app\/vendor\/composer\/ClassLoader.php",
            "line": 427,
            "function": "Composer\\Autoload\\{closure}",
            "args": [
                "\/app\/vendor\/composer\/..\/..\/app\/Http\/Controllers\/AuthController.php"
            ]
        },
        {
            "function": "loadClass",
            "class": "Composer\\Autoload\\ClassLoader",
            "type": "->",
            "args": [
                "App\\Http\\Controllers\\AuthController"
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Route.php",
            "line": 1096,
            "function": "is_a",
            "args": [
                "App\\Http\\Controllers\\AuthController",
                "Illuminate\\Routing\\Controllers\\HasMiddleware",
                true
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Route.php",
            "line": 1035,
            "function": "controllerMiddleware",
            "class": "Illuminate\\Routing\\Route",
            "type": "->",
            "args": []
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 818,
            "function": "gatherMiddleware",
            "class": "Illuminate\\Routing\\Route",
            "type": "->",
            "args": []
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 800,
            "function": "gatherRouteMiddleware",
            "class": "Illuminate\\Routing\\Router",
            "type": "->",
            "args": [
                {
                    "uri": "api\/register",
                    "methods": [
                        "POST"
                    ],
                    "action": {
                        "middleware": [
                            "api"
                        ],
                        "uses": "App\\Http\\Controllers\\AuthController@register",
                        "controller": "App\\Http\\Controllers\\AuthController@register",
                        "namespace": null,
                        "prefix": "api",
                        "where": []
                    },
                    "isFallback": false,
                    "controller": null,
                    "defaults": [],
                    "wheres": [],
                    "parameters": [],
                    "parameterNames": [],
                    "computedMiddleware": [],
                    "compiled": {}
                }
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 784,
            "function": "runRouteWithinStack",
            "class": "Illuminate\\Routing\\Router",
            "type": "->",
            "args": [
                {
                    "uri": "api\/register",
                    "methods": [
                        "POST"
                    ],
                    "action": {
                        "middleware": [
                            "api"
                        ],
                        "uses": "App\\Http\\Controllers\\AuthController@register",
                        "controller": "App\\Http\\Controllers\\AuthController@register",
                        "namespace": null,
                        "prefix": "api",
                        "where": []
                    },
                    "isFallback": false,
                    "controller": null,
                    "defaults": [],
                    "wheres": [],
                    "parameters": [],
                    "parameterNames": [],
                    "computedMiddleware": [],
                    "compiled": {}
                },
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                }
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 748,
            "function": "runRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                },
                {
                    "uri": "api\/register",
                    "methods": [
                        "POST"
                    ],
                    "action": {
                        "middleware": [
                            "api"
                        ],
                        "uses": "App\\Http\\Controllers\\AuthController@register",
                        "controller": "App\\Http\\Controllers\\AuthController@register",
                        "namespace": null,
                        "prefix": "api",
                        "where": []
                    },
                    "isFallback": false,
                    "controller": null,
                    "defaults": [],
                    "wheres": [],
                    "parameters": [],
                    "parameterNames": [],
                    "computedMiddleware": [],
                    "compiled": {}
                }
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 737,
            "function": "dispatchToRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                }
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 200,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\Router",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                }
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 144,
            "function": "Illuminate\\Foundation\\Http\\{closure}",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                }
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                }
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/ConvertEmptyStringsToNull.php",
            "line": 31,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                },
                {}
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 183,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                },
                {}
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                }
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TrimStrings.php",
            "line": 40,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                },
                {}
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 183,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TrimStrings",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                },
                {}
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/ValidatePostSize.php",
            "line": 27,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                }
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 183,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                },
                {}
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/PreventRequestsDuringMaintenance.php",
            "line": 99,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                }
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 183,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                },
                {}
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Http\/Middleware\/HandleCors.php",
            "line": 62,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                }
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 183,
            "function": "handle",
            "class": "Illuminate\\Http\\Middleware\\HandleCors",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                },
                {}
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Http\/Middleware\/TrustProxies.php",
            "line": 39,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                }
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 183,
            "function": "handle",
            "class": "Illuminate\\Http\\Middleware\\TrustProxies",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                },
                {}
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 119,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                }
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 175,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->",
            "args": [
                {}
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 144,
            "function": "sendRequestThroughRouter",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                }
            ]
        },
        {
            "file": "\/app\/public\/index.php",
            "line": 42,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->",
            "args": [
                {
                    "attributes": {},
                    "request": {},
                    "query": {},
                    "server": {},
                    "files": {},
                    "cookies": {},
                    "headers": {}
                }
            ]
        },
        {
            "file": "\/app\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/resources\/server.php",
            "line": 16,
            "args": [
                "\/app\/public\/index.php"
            ],
            "function": "require_once"
        }
    ]
}