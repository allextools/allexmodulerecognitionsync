var chai = require('chai'),
  expect = chai.expect;

var resolve, isString, q;

function bootUp () {
  resolve = require('../');
}

describe ('Outer resolve Tests', function () {
  it('Load the library', function () {
    bootUp();
  });
  it ('Resolve a plain namespace', function () {
    return expect(resolve('npm')).to.equal('npm');
  });
  it ('Resolve a 2-segment namespace', function () {
    return expect(resolve('allex:master')).to.deep.equal({
      modulename: 'allex_masterservice',
      reponame: 'master',
      username: 'allex',
      namespace: null,
      group: 'services',
      npmstring: 'git+ssh://git@github.com/allex-services/master.git',
      gitclonestring: 'git@github.com:allex-services/master.git'
    });
  });
  it ('Resolve a 3-segment namespace', function () {
    return expect(resolve('allex:buffer:lib')).to.deep.equal({
      modulename: 'allex_bufferlib',
      reponame: 'buffer',
      username: 'allex',
      namespace: null,
      group: 'libs',
      npmstring: 'git+ssh://git@github.com/allex-libs/buffer.git',
      gitclonestring: 'git@github.com:allex-libs/buffer.git'
    });
  });
  it ('Resolve a 4-segment namespace', function () {
    return expect(resolve('allex:topclient_fix:lib')).to.deep.equal({
      modulename: 'allex__topclient_fixlib',
      reponame: 'fix',
      username: 'allex',
      namespace: 'topclient',
      group: 'libs',
      npmstring: 'git+ssh://git@gitlab.topclient.info/allex_libs/fix.git',
      gitclonestring: 'git@gitlab.topclient.info:allex_libs/fix.git'
    });
  });
  it ('Resolve a 2-segment string', function () {
    return expect(resolve('allex_masterservice')).to.deep.equal({
      modulename: 'allex_masterservice',
      reponame: 'master',
      username: 'allex',
      namespace: null,
      group: 'services',
      npmstring: 'git+ssh://git@github.com/allex-services/master.git',
      gitclonestring: 'git@github.com:allex-services/master.git'
    });
  });
  it ('Resolve a 3-segment string', function () {
    return expect(resolve('allex_bufferlib')).to.deep.equal({
      modulename: 'allex_bufferlib',
      reponame: 'buffer',
      username: 'allex',
      namespace: null,
      group: 'libs',
      npmstring: 'git+ssh://git@github.com/allex-libs/buffer.git',
      gitclonestring: 'git@github.com:allex-libs/buffer.git'
    });
  });
  it ('Resolve a 4-segment string', function () {
    return expect(resolve('allex__topclient_fixlib')).to.deep.equal({
      modulename: 'allex__topclient_fixlib',
      reponame: 'fix',
      username: 'allex',
      namespace: 'topclient',
      group: 'libs',
      gitclonestring: 'git@gitlab.topclient.info:allex_libs/fix.git',
      npmstring: 'git+ssh://git@gitlab.topclient.info/allex_libs/fix.git'
    });
  });
  it ('Resolve a 3-segment github string', function () {
    return expect(resolve('allex_modulerecognitionlowlevellib')).to.deep.equal({
      modulename: 'allex_modulerecognitionlowlevellib',
      reponame: 'modulerecognition',
      username: 'allex',
      namespace: null,
      group: 'lowlevellibs',
      gitclonestring: 'git@github.com:allex-lowlevel-libs/modulerecognition.git',
      npmstring: 'git+ssh://git@github.com/allex-lowlevel-libs/modulerecognition.git'
    });
  });
});


