import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';

import CommandPanel from './NotificationsPanel';
import { PowerContextProvider } from '../PowerContext';

afterEach(cleanup);

it("renders without crashing", () =>{
    const div = document.createElement("div");
    act(() => {
      ReactDOM.render(
        <PowerContextProvider>
          <CommandPanel />
        </PowerContextProvider>
    , div);
    });
    ReactDOM.unmountComponentAtNode(div);
    }
);
