import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';

import ParameterDisplay from './ParameterDisplay';
import { PowerContextProvider } from '../PowerContext';

afterEach(cleanup);

it("renders without crashing", () =>{
    const div = document.createElement("div");
    act(() => {
      ReactDOM.render(
        <PowerContextProvider>
          <ParameterDisplay type='voltage' id='0' />
        </PowerContextProvider>
    ,div );
    });
    ReactDOM.unmountComponentAtNode(div);
    }
);
