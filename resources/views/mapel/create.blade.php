@extends('main.layout')
@section('content')
    <center>
        <h2>TAMBAH DATA MAPEL</h2>
        <form action="/mapel/store" method="post">
            @csrf
            <table width="50%">
                <tr>
                    <td class="bar">MAPEL</td>
                    <td class="bar">
                        <input type="text" name="nama_mapel">
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <center>
                            <button type="submit" class="button-primary">SIMPAN</button>
                        </center>
                    </td>
                </tr>
            </table>
        </form>
    </center>
@endsection