<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class SignInController extends Controller
{
    public function __invoke(Request $request)
    {
        if(!$token = auth()->attempt($request->only('email','password'))){
            return response(null,401);
        }

        return response()->json(compact('token'));
    }

}
