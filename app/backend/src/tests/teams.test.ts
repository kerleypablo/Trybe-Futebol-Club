import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import mocks from './mocsk';
import { app } from '../app';

import { Response } from 'superagent';
import Teams from '../database/models/Team';
import mocsk from './mocsk';


chai.use(chaiHttp);

const { expect } = chai;

describe('Teams', () => {
    let chaiHttpResponse: Response;
    beforeEach(() => {
        sinon.stub(Teams, 'findAll').resolves(mocsk.teams as Teams[]);
        sinon.stub(Teams, 'findOne').resolves(mocsk.teamsid as Teams);
   });
 
   afterEach(() => {
     sinon.restore();
   });
    it('verifica se e possível realizar uma req', async () => {
        chaiHttpResponse = await chai
        .request(app)
        .get('/teams');
        expect(chaiHttpResponse).to.have.status(200);
        expect(chaiHttpResponse).to.be.json;
        expect(chaiHttpResponse.body).to.have.equal(mocks.team);
    });

    it('verifica se e possivel procurar um teme pelo Id', async () => {
        chaiHttpResponse = await chai
        .request(app)
        .get('/teams/1');
        expect(chaiHttpResponse).to.have.status(200);
        expect(chaiHttpResponse).to.be.json;
        expect(chaiHttpResponse.body).to.have.equal(mocks.teamsid);
    });
});