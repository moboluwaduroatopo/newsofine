<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use App\Buyer_user;
use Image;


class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','me','signup','updateprofile','getalluser']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->guard('buyer_user')->attempt($credentials)) {
            return response()->json(['error' => 'Email or password does\'t exist'], 401);
        }


        return $this->respondWithToken($token);
    }

    public function signup(SignUpRequest $request)
    {
        Buyer_user::create($request->all());
        return $this->login($request);
    }
   

    /** 
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
   public function getalluser()
    {
         return response()->json([
            'alluser' => Buyer_user::where('role','tailor')->get()
        ]);
    }

    public function me()
    {  
    //dd(auth()->user()) ;
      //return response()->json([
           // 'user' => auth()->user()
        //]);
      //return "done";
       // return response()->json(auth()->user());
       return response()->json(auth::guard('buyer_user')->user());
  
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth::guard('buyer_user')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth::guard('buyer_user')->refresh());
    }
    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth::guard('buyer_user')->factory()->getTTL() * 60,
            //'role'=>auth()->user()->role,
            //'user' => auth()->user()->get()
              'user' => auth::guard('buyer_user')->user()
        ]);
    }
   
   
   public function updateprofile(Request $request)
    {
       $user=auth::guard('buyer_user')->user();
      $currentfile= $user->ufile;
    //return $request->file;
      // return ['message'=> 'success'];
        if ($request->file != $currentfile){
            $file=$request->file;
            $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
           // $filename= time().'.'.$file->getClientOriginalExtension();
            Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
           //$user=auth()->user();
            $request->merge(['file'=>$filename]);
            //$user->save();
        }
        // if ($request->file){
        //     $file=$request->file;
        //     $filename= time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
        //     //$filename= time().'.'.$file->getClientOriginalExtension();
        //      Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
        //     $user=auth()->user();
        //     $user->file=$filename;
        //    $user->save();
        // }
        $user->update($request->all());
        
        return $user;
       //return response()->json(['success' => 'You have successfully uploaded an image'], 200);
           }
 
}