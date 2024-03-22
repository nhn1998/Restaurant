import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import img from '../../assets/menu/banner3.jpg'
import useMenu from '../../Hooks/Hooks/useHooks';
import MenuCategory from './MenuCategory/MenuCategory';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'

const Menu = () => {
    const [menu]=useMenu()
    const desserts=menu.filter(item=>item.category === 'dessert')
    const soup=menu.filter(item=>item.category === 'soup')
    const salad=menu.filter(item=>item.category === 'salad')
    const pizza=menu.filter(item=>item.category === 'pizza')
    const offered=menu.filter(item=>item.category === 'offered')
    
    return (
        <div>
            <Helmet>
                <title>Restaurant | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={img} title="our menu"></Cover>
            <div>
                <SectionTitle heading='Todays offer' subHeading="Don't miss"></SectionTitle>
                <MenuCategory items={offered}/>
                {/* dessert */}
                <MenuCategory items={desserts} title='dessert' img={dessertImg}></MenuCategory>
                <MenuCategory items={pizza} title='pizza' img={pizzaImg}></MenuCategory>
                <MenuCategory items={soup} title='soup' img={soupImg}></MenuCategory>
                <MenuCategory items={salad} title='salad' img={saladImg}></MenuCategory>

                
            </div>
        </div>
    );
};

export default Menu;