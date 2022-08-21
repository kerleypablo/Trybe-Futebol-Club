import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/user';
import { IUserCredentials } from '../Interfaces/IUser';
import mocsk from './mocsk';
import { Response } from 'superagent';
import  TokenServices   from '../Utils/TokenServices'
import decript from '../middlewares/decrypt.password'

chai.use(chaiHttp);

const { expect } = chai;
const tokeService = new TokenServices();

describe('Login User', () => {
   let chaiHttpResponse: Response;
   beforeEach(() => {
    sinon.stub(User, 'findOne').resolves(mocsk.userCredential as User);
    sinon.stub(tokeService, 'tokenGenerate').resolves(mocsk.token.token);
    sinon.stub(decript, 'decrypt')
  });

  afterEach(() => {
    sinon.restore();
  });
  it ('testa se possivel fazer login', async () => {
    chaiHttpResponse = await chai.request(app)
    .post('/login')
    .send(mocsk.userCredential);
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse).to.be.json;
    expect(chaiHttpResponse.body.message).to.have.property('token');
  });
  it('testa se nao [e possivel fazer login com email incorreto ', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(mocsk.erroUserCredencial);
    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse).to.be.json;
    expect(chaiHttpResponse.body).to.have.property('message');
  });
  it('testa se nao [e possivel fazer login com senha incorreto ', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(mocsk.erroUserCredencial2);
    expect(chaiHttpResponse).to.have.status(400);
    expect(chaiHttpResponse).to.be.json;
    expect(chaiHttpResponse.body).to.have.property('message');
  });
});
