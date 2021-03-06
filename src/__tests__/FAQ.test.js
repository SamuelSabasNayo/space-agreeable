import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import FAQ from '../views/FAQ';
import AuthContextProvider from '../contexts/AuthContext';


beforeEach(() => cleanup);

describe('<FAQ />', () => {
    it('should render the component', ( )=> {
        render(
            <AuthContextProvider>
            <Router>
                <FAQ />
            </Router>
            </AuthContextProvider>
        )
        expect(<FAQ />).not.toBeNull()
    })
})
