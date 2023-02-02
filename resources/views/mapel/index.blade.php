@extends('main.layout')
@section('content')
    <center>
        <b>
            <h2>LIST DATA MAPEL</h2>
            @if (session('success'))
            <p class="text-success">{{ session('success') }}</p>
            @endif
            @if (session('error'))
            <p class="text-danger">{{ session('error') }}</p>
            @endif

            <a href="/mapel/create" class="button-primary">TAMBAH DATA</a>
            {{-- @include('layouts.info') --}}

            <table cellpadding="10">
                <tr>
                    <th>NO</th>
                    <th>MAPEL</th>
                    <th>ACTION</th>
                </tr>
                @foreach ($mapel as $m)
                <tr>
                    <td> {{ $loop->iteration }} </td>
                    <td> {{ $m->nama_mapel }} </td>
                    <td>
                        <a href="/mapel/edit/{{$m->id}}" class="button-warning">EDIT</a>
                        <a href="/mapel/destroy/{{$m->id}}" class="button-danger" onclick="return confirm('Yakin ingin menghapus?')">HAPUS</a>
                    </td>
                </tr>
                @endforeach
            </table>
        </b>
    </center>
@endsection