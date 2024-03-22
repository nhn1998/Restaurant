import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import shopImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/Hooks/useHooks';
import ShopTab from './ShopTab/ShopTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Shop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu]=useMenu()
    const desserts=menu.filter(item=>item.category === 'dessert')
    const soup=menu.filter(item=>item.category === 'soup')
    const salad=menu.filter(item=>item.category === 'salad')
    const pizza=menu.filter(item=>item.category === 'pizza')
    const offered=menu.filter(item=>item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Restaurant | Shop</title>
            </Helmet>
            <Cover img={shopImg} title='order'></Cover>
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <ShopTab items={salad}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={pizza}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                    <ShopTab items={soup}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                    <ShopTab items={desserts}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                    <ShopTab items={offered}></ShopTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;