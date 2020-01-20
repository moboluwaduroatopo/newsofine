<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Categories;
class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cat= Categories::all();
        return view('categories/addcat')->with('cat',$cat);
        //return response()->json(Categories::all());
       
    }
    public function tailor()
    {
        return response()->json(
            Categories::where('cat_type','tailor')->get()
            );
        //return response()->json(Categories::all());
       //$cat= Categories::all()
    }
    public function shop()
    {
        return response()->json(
            Categories::where('cat_type','shop')->get()
       );
        //return response()->json(Categories::all());
       //$cat= Categories::all()
    }
    public function catid()
    {
        
        return response()->json(Categories::all());
       //$cat= Categories::all()
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $this->validate($request,[
        //     'cat_name'=>'required|unique:categories|min:2',
        //     ]);
        $checkcat=Categories::where('cat_type',$request->cat_type)->where('cat_name',$request->cat_name)
        ->count();
        if ($checkcat==0)
        {
       $cat= Categories::create($request->all());
         return redirect('/addcat/')->with('success','categotry added successfully');
        }else{
           return redirect('/addcat/')->with('error','categotry already exit'); 
        }
       
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
        $pro =Categories::findOrFail($id);
        $pro->delete();
        return redirect('/addcat/')->with('success','Delete successfully');
    }
}
