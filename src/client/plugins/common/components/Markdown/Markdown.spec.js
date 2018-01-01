import React from 'react';
import { expect } from 'chai';
import { step } from 'mocha-steps';
import ReactDOM from 'react-dom';

describe('Report UI works', () => {
  let app;
  let content;

  step('Report page renders on mount', () => {
    content = app.find('#content');
    expect(content).to.not.be.empty;
  });
});
