import './styles/index.scss';
import classNames from 'classnames';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader, NavBar, useTheme } from 'components';
import { AboutPage, ErrorPage, MainPage } from 'pages';


const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames("app", theme)}>
            <NavBar/>
            <div className="content">
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route path={'/about'} element={<AboutPage />} />
                        <Route path={'/'} element={<MainPage />} />
                        <Route path={'*'} element={<ErrorPage />} />
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
};

export default App;
