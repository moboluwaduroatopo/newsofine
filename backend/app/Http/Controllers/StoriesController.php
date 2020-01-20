<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Stories;
use App\Post;
use App\Replies;

use Image;
class StoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Stories::all());
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id)
    {
        return response()->json(
       
           Post::where('stories_id','=',$id)->get()
            
        );
        // return $id;
    }
    public function reply($id)
    {
        return response()->json(
       
           Replies::where('post_id','=',$id)->get()
            
        );
        // return $id;
    }
    public function storepost(Request $request)
    {
        //  return $request;
     $story= Post::create($request->all()); 
    return $story;
        
       //return response()->json(['success' => 'You have successfully uploaded an image'], 200);
    }
    public function storereply(Request $request)
    {
        //  return $request;
     $reply= Replies::create($request->all()); 
    return $reply;
        
       //return response()->json(['success' => 'You have successfully uploaded an image'], 200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $request;
        if ($request->story_image){
            $file=$request->story_image;
            $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
            // return $filename;
            Image::make($file)->resize(300, 300)->save(public_path('/upload/posts/'.$filename));
            $request->merge(['story_image'=>$filename]);
    
        }
        elseif ($request->story_image1) {
        $file1=$request->story_image1;
        $filename1=time().'.' . explode('/', explode(':', substr($file1, 0, strpos($file1,';')))[1])[1];
        Image::make($file1)->resize(300, 300)->save(public_path('/upload/posts/'.$filename1));
        //$user=auth()->user();
       $request->merge(['story_image1'=>$filename1]);

        }
        elseif ($request->story_image2) {
        $file2=$request->story_image2;
       $filename2=time().'.' . explode('/', explode(':', substr($file2, 0, strpos($file2,';')))[1])[1];
       Image::make($file2)->resize(300, 300)->save(public_path('/upload/posts/'.$filename2));
       //$user=auth()->user();
      $request->merge(['story_image2'=>$filename2]);
        }
       
        // return $request;
     $stories= Stories::create($request->all()); 
    return $stories;
        
       //return response()->json(['success' => 'You have successfully uploaded an image'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
