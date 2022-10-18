import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MapPage from './pages/MapPage';
import InformationPage from './pages/InformationPage';
import FAQPage from './pages/FAQPage';
import GlacierPage from './pages/GlacierPage';
import Layout from './Layout';


const Router = () => {
    return (
        <Layout>
            <Routes>
                <Route exact path="/" element={<MapPage />} />
                <Route exact path="/informations" element={<InformationPage />} />
                <Route exact path="/faq" element={<FAQPage />} />
                <Route exact path="/glacierPage/{id}" element={<GlacierPage />} />
            </Routes>
        </Layout>
    )
}

export default Router