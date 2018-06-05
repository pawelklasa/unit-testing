var chai = require('chai');
var should = require('chai').should();
var sinon = require('sinon');
var assert = require('assert');

var UserAccountsService = require('../app.js');

  it('Get users data', function (){
    var email1 = 'pawel.klasa@gmail.com';
    var email2 = 'pav@gmail.com';

    var accountService = new UserAccountsService();
    var mockAcountService = sinon.mock(accountService);
    mockAcountService.expects('getData').exaclty(3);
    accountService.fetchData();
    mockAcountService.verify();
  })