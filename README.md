最高のごはん app
====

土鍋炊飯を全力でサポート

<!--
## Description

## Demo
-->

## Requirement

[Titanium](http://docs.appcelerator.com/platform/latest/#!/guide/Titanium_Command-Line_Interface_Reference)、[TiShadow](http://tishadow.yydigital.com/)、[gulp](http://gulpjs.com/)の環境が最前提としてあるので各種インストール

```bash
$ npm install -g titanium
$ npm install -g alloy
$ npm install -g tishadow
$ npm install -g gulp
```

## Install

開発上必要となる module を一括インストール

```
$ cd [プロジェクトroot]
$ npm install
```

## Usage

[TiShadow](http://tishadow.yydigital.com/) 環境をまずは整えます。</br>

TiShadow サーバーを起動

```
$ tishadow server
```

別のペインで appify アプリをビルドしてシミュレータを起動

```
$ cd [プロジェクトroot]
$ mkdir appify
$ tishadow appify -d appify -o [自分のpcのlocalIP]
$ ti build -p ios -d appify
```

gulpでsrc配下をwatchして即時反映

```
$ gulp watch
```

## Author

[sawa-zen](https://github.com/sawa-zen)
