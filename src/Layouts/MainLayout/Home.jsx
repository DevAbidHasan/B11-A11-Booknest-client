import React from 'react';
import { Helmet } from 'react-helmet';
import BookSlider from './BannerSlider';
import CommunitySection from '../../pages/ExtraPages/CommunitySection';
import FAQ from '../../pages/ExtraPages/FAQ';
import Contact from '../../pages/ExtraPages/Contact';
import AllCategory from '../../components/AllCategory';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Homepage || BookNest
                </title>
            </Helmet>
            <BookSlider></BookSlider>
            <AllCategory></AllCategory>
            <CommunitySection></CommunitySection>
            <FAQ></FAQ>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;