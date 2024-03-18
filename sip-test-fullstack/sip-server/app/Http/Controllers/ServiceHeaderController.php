<?php

namespace App\Http\Controllers;

use App\Models\ServiceHeader;
use App\Http\Requests\StoreServiceHeaderRequest;
use App\Http\Requests\UpdateServiceHeaderRequest;

class ServiceHeaderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreServiceHeaderRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreServiceHeaderRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ServiceHeader  $serviceHeader
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceHeader $serviceHeader)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ServiceHeader  $serviceHeader
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceHeader $serviceHeader)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateServiceHeaderRequest  $request
     * @param  \App\Models\ServiceHeader  $serviceHeader
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateServiceHeaderRequest $request, ServiceHeader $serviceHeader)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ServiceHeader  $serviceHeader
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceHeader $serviceHeader)
    {
        //
    }
}
