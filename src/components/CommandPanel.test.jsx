import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';

import CommandPanel from './NotificationsPanel';

afterEach(cleanup);

it("renders without crashing", () =>{
    const div = document.createElement("div");
    act(() => {
      ReactDOM.render(<CommandPanel />, div);
    });
    ReactDOM.unmountComponentAtNode(div);
    }
);