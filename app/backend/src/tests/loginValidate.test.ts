import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/user';
import mocsk from './mocsk';
import { Response } from 'superagent';
import  TokenServices   from '../Utils/TokenServices'

chai.use(chaiHttp);

const { expect } = chai;
const tokenServices = new TokenServices();

describe('validar User', () => {
   let chaiHttpResponse: Response;
   beforeEach(() => {
       sinon.stub(tokenServices, 'tokenAutenticate').resolves({ email: mocsk.user.email , password: mocsk.user.password})
       sinon.stub(User, 'findOne').resolves(mocsk.userCredential as User);
  });

  afterEach(() => {
    sinon.restore();
  });
  it ('testa se token valido', async () => {
    chaiHttpResponse = await chai.request(app)
    .get('/login/validate')
    .set('authorization', 'token')

    expect(chaiHttpResponse).to.be.json;
    expect(chaiHttpResponse.body.message).to.have.property('admin');
  })
  it ('testa se token nao existe', async () => {
    chaiHttpResponse = await chai.request(app)
    .get('/login/validate')
    .set('authorization', '')
    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse).to.be.json;
    expect(chaiHttpResponse.body).to.have.property('message');
  })
})
