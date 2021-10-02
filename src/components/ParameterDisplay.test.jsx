import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';

import ParameterDisplay from './ParameterDisplay';

afterEach(cleanup);

it("renders without crashing", () =>{
    const div = document.createElement("div");
    act(() => {
      ReactDOM.render(<ParameterDisplay />, div);
    });
    ReactDOM.unmountComponentAtNode(div);
    }
);
