import React from 'react';
//import {render} from 'enzyme';
const Form = import("fed_consumer/Form");
const Button = import("federated/Button");
import suspenseRender from './suspenseRender'
//const workerpool = require('workerpool');
//const pool = workerpool.pool(__dirname + '/worker.js');

import { render } from '@testing-library/react';


describe("Federation", function () {
  it("is rendering Nested Suspense",async()=>{
    const from = await Form
    console.log(await suspenseRender(from.default))
  })
  it("Testing Button from Remote", async function () {
    const Btn = (await Button).default
    const wrapper = render(<Btn/>);
    expect(wrapper).toMatchSnapshot()
  });

/*  it("Testing Button from Form", async function () {
    const Frm = (await Form).default
    const wrapper = render(<Frm/>);
    expect(wrapper).toMatchSnapshot()
  });*/
});
