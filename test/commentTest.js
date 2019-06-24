'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const News = require('../models/News')
chai.use(require('chai-http'));

const app = require('../app.js'); // Our app

describe('API endpoint /comment', function() {
    this.timeout(5000); // How long to wait for a response (ms)

    before(function() {

    });

    after(function() {

    });

    // GET - List all comments from news
    it('should return all comments from news', function() {
        return chai.request(app)
            .get('/news/read/5c2e8589954fdc1508f41921')
            .then(function(res) {
                let a = res.body;
                a = a[0]['comments'];
                console.log(a);
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('Array');
                expect(a).to.be.not.empty;
            });
    });
});