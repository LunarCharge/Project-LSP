@extends('main.layout')
@section('content')
    <center>
        <h2>EDIT DATA MAPEL</h2>
        <form action="/mapel/update/{{ $mapel->id }}" method="post">
            @csrf
            <table width="50%">
                <tr>
                    <td class="bar">MAPEL</td>
                    <td class="bar">
                        <input type="text" name="nama_mapel" value="{{$mapel->nama_mapel}}">
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <center>
                            <button type="submit" class="button-primary">UBAH</button>
                        </center>
                    </td>
                </tr>
            </table>
        </form>
    </center>
@endsection