# bookshelf

[![Maintainability](https://api.codeclimate.com/v1/badges/2aafaccb439fb4609754/maintainability)](https://codeclimate.com/github/leonardovee/bookshelf/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/2aafaccb439fb4609754/test_coverage)](https://codeclimate.com/github/leonardovee/bookshelf/test_coverage)

Hello, to use this projet you gotta have installed in your machine: Node.js, NPM and Git, but since you're here, you have all of that.
<p align="center">
    <img src="https://user-images.githubusercontent.com/40545957/120939216-545f1b80-c6ed-11eb-9d6d-6b3ac376061b.png" height="500" width="225">
    <img src="https://user-images.githubusercontent.com/40545957/120939226-63de6480-c6ed-11eb-9133-5874c3811ac6.png" height="500" width="225">
</p>


This project is the public page of [bookshelf-backend](https://github.com/leonardovee/bookshelf-backend).

### To test the app first you gotta clone:
```console
$ git clone https://github.com/leonardovee/bookshelf.git

$ cd bookshelf
```

### And set the api endpoint
Go to `src/services/api.js` and change the value of the attribute `baseURL` of `axios.create()`.

### Install dependencies and you're good to go:
```console
$ yarn

$ yarn start
```